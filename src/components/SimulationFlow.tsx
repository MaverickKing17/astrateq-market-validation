/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, AlertTriangle, ArrowRight, Copy, Share2, 
  Check, Mail, ShieldCheck, UserCheck, Star, Users, Award, Trophy,
  ChevronDown, Zap, Eye, Brain, Activity
} from "lucide-react";
import { QUESTIONS, REFERRAL_TIERS } from "../data";
import { SimulationAnswers, ReferralTier } from "../types";

export default function SimulationFlow() {
  const [currentStep, setCurrentStep] = useState<"quiz" | "result" | "referral">("quiz");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<SimulationAnswers>({});
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [referredBy, setReferredBy] = useState<string | null>(null);
  const [referralCount, setReferralCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  // Capture referral code on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref");
    if (ref) {
      setReferredBy(ref);
      // Persist referredBy code silently in session state / local storage
      localStorage.setItem("astrateq_referred_by", ref);
    } else {
      const savedRef = localStorage.getItem("astrateq_referred_by");
      if (savedRef) {
        setReferredBy(savedRef);
      }
    }

    // Load any existing referral state from local storage if they already joined
    const savedCode = localStorage.getItem("astrateq_user_ref_code");
    const savedEmail = localStorage.getItem("astrateq_user_email");
    const savedCount = localStorage.getItem("astrateq_referral_count");
    
    if (savedCode && savedEmail) {
      setReferralCode(savedCode);
      setEmail(savedEmail);
      setCurrentStep("referral");
      if (savedCount) {
        setReferralCount(parseInt(savedCount, 10));
      }
    }
  }, []);

  const handleSelectOption = (optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [QUESTIONS[currentQuestionIndex].id]: optionId
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const isOptionSelected = answers[currentQuestion.id] !== undefined;

  // Handles moving to Results screen
  const handleSeeResults = () => {
    setCurrentStep("result");
    // Scroll to simulation container top for perfect focus
    document.getElementById("live-simulation")?.scrollIntoView({ behavior: "smooth" });
  };

  // Handles email submit to join cohort
  const handleJoinCohort = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Please enter your email address to continue.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid Canadian email address.");
      return;
    }
    setEmailError("");

    // Generate random code client-side
    // /* TODO: Replace with a secure server-side generation & validation API */
    const randomSuffix = Math.random().toString(36).substring(2, 8).toUpperCase();
    const generatedCode = `ASTQ-${randomSuffix}`;

    setReferralCode(generatedCode);
    setCurrentStep("referral");
    
    // Save locally
    localStorage.setItem("astrateq_user_ref_code", generatedCode);
    localStorage.setItem("astrateq_user_email", email);
    localStorage.setItem("astrateq_referral_count", "0");

    // Scroll to dashboard
    document.getElementById("live-simulation")?.scrollIntoView({ behavior: "smooth" });
  };

  // Construct referral link
  const referralLink = `${window.location.origin}${window.location.pathname}?ref=${referralCode}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareLink = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Astrateq Gadgets Driver Awareness Research Study",
          text: "Check your Driver Awareness Readiness in 60 seconds with this privacy-first simulation!",
          url: referralLink,
        });
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      } catch (err) {
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  // Determine active tier
  const getActiveTier = (count: number): ReferralTier => {
    let active = { referralsNeeded: 0, name: "Initiate Participant", perks: "Joined the validation cohort." };
    for (const tier of REFERRAL_TIERS) {
      if (count >= tier.referralsNeeded) {
        active = tier;
      }
    }
    return active;
  };

  const activeTier = getActiveTier(referralCount);

  // Helper to simulate a referral
  const handleSimulateReferral = () => {
    const newCount = referralCount + 1;
    setReferralCount(newCount);
    localStorage.setItem("astrateq_referral_count", newCount.toString());
  };

  // Reset function to clear and take simulation again
  const handleReset = () => {
    localStorage.removeItem("astrateq_user_ref_code");
    localStorage.removeItem("astrateq_user_email");
    localStorage.removeItem("astrateq_referral_count");
    setAnswers({});
    setCurrentQuestionIndex(0);
    setEmail("");
    setReferralCount(0);
    setCurrentStep("quiz");
  };

  return (
    <section 
      className="bg-white border-y border-deepnavy/10 py-20 px-6 scroll-mt-20" 
      id="live-simulation"
    >
      <div className="max-w-4xl mx-auto">
        
        {/* Header indicator */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs text-cyanaccent uppercase tracking-widest font-bold">
            Interactive Instrument
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-deepnavy font-bold mt-2">
            Driver Awareness Simulation
          </h2>
          <p className="text-deepnavy/70 mt-3 font-sans max-w-2xl mx-auto">
            Take part in our 60-second exploratory questionnaire to assess typical awareness, fatigue, and environmental variables.
          </p>
          {referredBy && (
            <div className="inline-flex items-center gap-2 mt-4 px-3 py-1 bg-cyanaccent/5 border border-cyanaccent/20 rounded-full text-xs text-cyanaccent font-medium">
              <UserCheck className="h-3 w-3" />
              <span>Attributed referral code: <strong>{referredBy}</strong></span>
            </div>
          )}
        </div>

        {/* Outer simulation card frame */}
        <div className="bg-pearl/50 border border-deepnavy/10 rounded-3xl p-6 md:p-10 shadow-sm relative overflow-hidden">
          
          {/* Animated step switcher */}
          <AnimatePresence mode="wait">
            
            {/* STEP 1: QUIZ */}
            {currentStep === "quiz" && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* Progress bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-mono text-deepnavy/60">
                    <span>Question {currentQuestionIndex + 1} of {QUESTIONS.length}</span>
                    <span>{Math.round(((currentQuestionIndex + 1) / QUESTIONS.length) * 100)}% Complete</span>
                  </div>
                  <div className="w-full h-1.5 bg-deepnavy/5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-cyanaccent transition-all duration-300"
                      style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question title */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-cyanaccent bg-cyanaccent/10 px-2.5 py-1 rounded-full">
                    {currentQuestion.category}
                  </span>
                  <h3 className="font-serif text-xl md:text-2xl text-deepnavy font-bold pt-2">
                    {currentQuestion.text}
                  </h3>
                </div>

                {/* Options grid */}
                <div className="grid grid-cols-1 gap-4" id={`options-grid-${currentQuestion.id}`}>
                  {currentQuestion.options.map((option) => {
                    const isSelected = answers[currentQuestion.id] === option.id;
                    return (
                      <button
                        key={option.id}
                        onClick={() => handleSelectOption(option.id)}
                        className={`w-full text-left p-5 rounded-xl border text-sm font-sans transition-all flex items-center justify-between cursor-pointer ${
                          isSelected 
                            ? "bg-cyanaccent/10 border-cyanaccent text-deepnavy font-semibold shadow-sm" 
                            : "bg-white border-deepnavy/10 hover:border-deepnavy/30 text-deepnavy/80 hover:text-deepnavy"
                        }`}
                        id={`option-${currentQuestion.id}-${option.id}`}
                      >
                        <span>{option.text}</span>
                        <div className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected 
                            ? "border-cyanaccent bg-cyanaccent text-white" 
                            : "border-deepnavy/20 bg-white"
                        }`}>
                          {isSelected && <Check className="h-3.5 w-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Navigation Actions */}
                <div className="flex justify-between items-center pt-6 border-t border-deepnavy/10">
                  <button
                    onClick={handlePrevQuestion}
                    disabled={currentQuestionIndex === 0}
                    className="px-5 py-2.5 rounded-lg text-sm font-sans font-medium text-deepnavy/60 hover:text-deepnavy disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    id="quiz-prev-btn"
                  >
                    Previous
                  </button>

                  {currentQuestionIndex < QUESTIONS.length - 1 ? (
                    <button
                      onClick={handleNextQuestion}
                      disabled={!isOptionSelected}
                      className="bg-deepnavy text-white disabled:bg-deepnavy/20 font-medium text-sm px-6 py-2.5 rounded-lg flex items-center gap-2 transition-all cursor-pointer"
                      id="quiz-next-btn"
                    >
                      Next Question
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleSeeResults}
                      disabled={!isOptionSelected}
                      className="bg-cyanaccent text-white disabled:bg-cyanaccent/20 font-bold text-sm px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                      id="quiz-submit-btn"
                    >
                      See My Driver Awareness Score
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {/* STEP 2: RESULT */}
            {currentStep === "result" && (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                <div className="text-center space-y-2">
                  <div className="inline-flex p-3 bg-emerald-500/10 text-emerald-600 rounded-full mb-2">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-deepnavy font-bold">
                    Simulation Successfully Evaluated
                  </h3>
                  <p className="text-sm text-deepnavy/60 font-sans max-w-md mx-auto">
                    Your answers match our baseline parameters for Canadian driving patterns. Review your simulated dashboard below.
                  </p>
                </div>

                {/* Simulated score card */}
                <div className="bg-gradient-to-b from-[#070d1a] via-[#09152b] to-[#040811] text-white rounded-3xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center border border-cyanaccent/25 shadow-[0_20px_50px_rgba(3,7,18,0.55)] relative overflow-hidden" id="simulated-result-dashboard">
                  
                  {/* Ambient background waveform for skeuomorphic depth */}
                  <div className="absolute inset-x-0 bottom-0 h-28 opacity-10 pointer-events-none mix-blend-screen filter blur-[0.5px]">
                    <svg className="w-full h-full stroke-cyanaccent fill-none" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path d="M0,25 Q10,15 20,30 T40,10 T60,35 T80,15 T100,25" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Left block: Score Circle */}
                  <div className="md:col-span-5 flex flex-col items-center border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-8 relative z-10">
                    <span className="text-[8.5px] font-mono tracking-[0.18em] text-slate-400 uppercase mb-3.5 font-light">
                      Simulated Profile Score
                    </span>
                    
                    <div className="relative w-36 h-36 flex items-center justify-center">
                      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500/15 to-emerald-500/15 blur-xl pointer-events-none" />
                      
                      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 160 160">
                        {/* Trail path (3D deep channel slot) */}
                        <circle cx="80" cy="80" r="68" stroke="#0a1224" strokeWidth="10" fill="transparent" />
                        <circle cx="80" cy="80" r="68" stroke="#121f38" strokeWidth="8" fill="transparent" />
                        
                        {/* Blur Glow behind the active indicator for neon effect */}
                        <circle 
                          cx="80" cy="80" r="68" 
                          stroke="url(#cyan-glow-gradient-result)" 
                          strokeWidth="14" 
                          strokeDasharray="427" 
                          strokeDashoffset="81" 
                          strokeLinecap="round" 
                          fill="transparent" 
                          className="opacity-50 blur-[6px]"
                        />

                        {/* Crisp Active path with gradient fill */}
                        <circle 
                          cx="80" cy="80" r="68" 
                          stroke="url(#cyan-glow-gradient-result)" 
                          strokeWidth="8" 
                          strokeDasharray="427" 
                          strokeDashoffset="81" 
                          strokeLinecap="round" 
                          fill="transparent" 
                          className="drop-shadow-[0_0_4px_rgba(6,182,212,0.5)]"
                        />

                        <defs>
                          <linearGradient id="cyan-glow-gradient-result" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="60%" stopColor="#0ea5e9" />
                            <stop offset="100%" stopColor="#10b981" />
                          </linearGradient>
                        </defs>
                      </svg>
                      
                      <div className="text-center z-10">
                        <span className="block font-serif text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-50 to-cyan-200 drop-shadow-[0_4px_16px_rgba(6,182,212,0.5)] leading-none select-none">
                          81
                        </span>
                        <span className="inline-flex mt-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[9px] font-extrabold uppercase tracking-widest shadow-[0_0_12px_rgba(16,185,129,0.3)] backdrop-blur-sm">
                          ● Good
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] text-slate-300 mt-4 font-sans font-medium">
                      Keep it up. Stay consistent.
                    </span>
                  </div>

                  {/* Right block: Metrics */}
                  <div className="md:col-span-7 space-y-3 relative z-10">
                    <h4 className="font-serif text-sm font-black tracking-[0.1em] text-white mb-2 uppercase drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">Metrics Breakdown</h4>
                    
                    {/* Fatigue card */}
                    <div className="flex items-center justify-between p-3.5 backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-t border-l border-cyanaccent/30 border-r border-b border-white/[0.05] rounded-xl shadow-[0_8px_32px_0_rgba(2,10,25,0.55)] transition-all hover:border-cyanaccent/50 hover:bg-white/[0.1]">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-cyanaccent/20 text-cyanaccent rounded-lg border border-cyanaccent/35 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
                          <Zap className="h-4.5 w-4.5" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[13px] font-extrabold text-white font-sans tracking-wide leading-tight">FATIGUE RISK</span>
                          <span className="text-[11px] text-slate-200 font-sans font-semibold leading-normal mt-0.5">Physical & mental fatigue index</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10.5px] font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-mono shadow-[0_0_8px_rgba(16,185,129,0.25)]">Low</span>
                        <ChevronDown className="h-4 w-4 text-slate-300" />
                      </div>
                    </div>

                    {/* Attention card */}
                    <div className="flex items-center justify-between p-3.5 backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-t border-l border-cyanaccent/30 border-r border-b border-white/[0.05] rounded-xl shadow-[0_8px_32px_0_rgba(2,10,25,0.55)] transition-all hover:border-cyanaccent/50 hover:bg-white/[0.1]">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-cyanaccent/20 text-cyanaccent rounded-lg border border-cyanaccent/35 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
                          <Eye className="h-4.5 w-4.5" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[13px] font-extrabold text-white font-sans tracking-wide leading-tight">ATTENTION STABILITY</span>
                          <span className="text-[11px] text-slate-200 font-sans font-semibold leading-normal mt-0.5">Focus persistence scale</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10.5px] font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-mono shadow-[0_0_8px_rgba(16,185,129,0.25)]">Good</span>
                        <ChevronDown className="h-4 w-4 text-slate-300" />
                      </div>
                    </div>

                    {/* Cognitive Load card */}
                    <div className="flex items-center justify-between p-3.5 backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-t border-l border-cyanaccent/30 border-r border-b border-white/[0.05] rounded-xl shadow-[0_8px_32px_0_rgba(2,10,25,0.55)] transition-all hover:border-cyanaccent/50 hover:bg-white/[0.1]">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-amber-500/20 text-amberaccent rounded-lg border border-amberaccent/35 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
                          <Brain className="h-4.5 w-4.5" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[13px] font-extrabold text-white font-sans tracking-wide leading-tight">COGNITIVE LOAD</span>
                          <span className="text-[11px] text-slate-200 font-sans font-semibold leading-normal mt-0.5">Heuristic task stress load</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10.5px] font-bold text-amber-300 bg-amber-500/20 border border-amberaccent/40 px-2.5 py-0.5 rounded-full font-mono shadow-[0_0_8px_rgba(184,134,11,0.25)]">Moderate</span>
                        <ChevronDown className="h-4 w-4 text-slate-300" />
                      </div>
                    </div>

                    {/* Environmental card */}
                    <div className="flex items-center justify-between p-3.5 backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-t border-l border-cyanaccent/30 border-r border-b border-white/[0.05] rounded-xl shadow-[0_8px_32px_0_rgba(2,10,25,0.55)] transition-all hover:border-cyanaccent/50 hover:bg-white/[0.1]">
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-cyanaccent/20 text-cyanaccent rounded-lg border border-cyanaccent/35 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
                          <Activity className="h-4.5 w-4.5" />
                        </div>
                        <div className="flex flex-col text-left">
                          <span className="text-[13px] font-extrabold text-white font-sans tracking-wide leading-tight">ENVIRONMENTAL FACTOR</span>
                          <span className="text-[11px] text-slate-200 font-sans font-semibold leading-normal mt-0.5">Contextual difficulty multiplier</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10.5px] font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 rounded-full font-mono shadow-[0_0_8px_rgba(16,185,129,0.25)]">Low</span>
                        <ChevronDown className="h-4 w-4 text-slate-300" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* Important Disclaimer Link */}
                <div className="flex items-start gap-2.5 p-4 bg-amberaccent/10 border border-amberaccent/20 rounded-xl text-deepnavy/80 text-xs font-sans">
                  <AlertTriangle className="h-4.5 w-4.5 text-amberaccent shrink-0 mt-0.5" />
                  <div>
                    <strong>Simulated Output — Conceptual Behavioral Model, Not Real-World Measurement.</strong> This evaluation demonstrates the planned deliverables of our on-device model and represents no physical bio-tracking or live driving telemetry.
                  </div>
                </div>

                {/* OPT-IN SECTION: Join Research Cohort */}
                <div className="border-t border-deepnavy/10 pt-8 space-y-6">
                  <div className="text-center md:text-left space-y-1">
                    <h4 className="font-serif text-xl text-deepnavy font-bold">Join our Pre-Launch Canadian Research Cohort</h4>
                    <p className="text-sm text-deepnavy/70 font-sans">
                      Participate in future software tests, priority feedback rounds, and validate local driver privacy completely free of charge.
                    </p>
                  </div>

                  <form onSubmit={handleJoinCohort} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto md:mx-0">
                    <div className="flex-1 relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-deepnavy/40">
                        <Mail className="h-5 w-5" />
                      </div>
                      <input
                        type="email"
                        placeholder="Enter your Canadian email address"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (emailError) setEmailError("");
                        }}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white border text-deepnavy font-sans text-sm focus:outline-none focus:ring-2 focus:ring-cyanaccent/50 ${
                          emailError ? "border-red-500" : "border-deepnavy/15 focus:border-cyanaccent"
                        }`}
                        id="cohort-email-input"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="bg-cyanaccent hover:bg-cyanaccent/90 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all whitespace-nowrap cursor-pointer flex items-center justify-center gap-1.5"
                      id="cohort-join-submit-btn"
                    >
                      Join Research Cohort
                    </button>
                  </form>

                  {emailError && (
                    <p className="text-xs font-sans text-red-500" id="email-error-msg">{emailError}</p>
                  )}

                  <p className="text-[11px] text-deepnavy/50 font-sans">
                    By submitting your email, you consent to receive periodic conceptual research updates. 
                    We completely respect your inbox. Absolutely no spam, marketing catalogs, or third-party lists.
                  </p>
                </div>
              </motion.div>
            )}

            {/* STEP 3: REFERRAL PANEL */}
            {currentStep === "referral" && (
              <motion.div
                key="referral"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div className="text-center space-y-2">
                  <div className="inline-flex p-3 bg-cyanaccent/10 text-cyanaccent rounded-full mb-1">
                    <UserCheck className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-deepnavy font-bold">
                    Welcome to the Cohort!
                  </h3>
                  <p className="text-sm text-deepnavy/70 font-sans max-w-lg mx-auto">
                    Your email <strong>{email}</strong> has been registered. Start sharing your link to help us validate driver interest and unlock status tiers.
                  </p>
                </div>

                {/* Share Card block */}
                <div className="bg-white border border-deepnavy/15 rounded-2xl p-6 space-y-4" id="referral-dashboard-card">
                  <span className="font-mono text-[10px] text-cyanaccent uppercase tracking-wider font-semibold block">
                    Your Unique Invite URL
                  </span>
                  
                  {/* Share URL Row */}
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex-1 bg-pearl border border-deepnavy/10 rounded-xl px-4 py-3 font-mono text-xs text-deepnavy/80 select-all overflow-x-auto whitespace-nowrap">
                      {referralLink}
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <button
                        onClick={handleCopyLink}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-deepnavy hover:bg-deepnavy/90 text-white font-medium text-xs px-4 py-3 rounded-xl transition-all cursor-pointer"
                        id="copy-link-btn"
                      >
                        {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                        <span>{copied ? "Copied" : "Copy Link"}</span>
                      </button>
                      <button
                        onClick={handleShareLink}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-2 border border-deepnavy/20 hover:bg-deepnavy/5 text-deepnavy font-medium text-xs px-4 py-3 rounded-xl transition-all cursor-pointer"
                        id="share-link-btn"
                      >
                        {shared ? <Check className="h-4 w-4 text-emerald-400" /> : <Share2 className="h-4 w-4" />}
                        <span>{shared ? "Shared" : "Share"}</span>
                      </button>
                    </div>
                  </div>

                  {/* Referral Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-deepnavy/10" id="referral-stats-metrics">
                    <div className="p-3 bg-pearl/60 border border-deepnavy/5 rounded-xl">
                      <span className="text-[10px] font-mono text-deepnavy/50 block uppercase">Referrals Secured</span>
                      <strong className="text-2xl text-deepnavy font-bold font-serif">{referralCount}</strong>
                    </div>
                    <div className="p-3 bg-pearl/60 border border-deepnavy/5 rounded-xl">
                      <span className="text-[10px] font-mono text-deepnavy/50 block uppercase">Active Tier Status</span>
                      <strong className="text-sm text-cyanaccent font-bold block mt-1">{activeTier.name}</strong>
                    </div>
                  </div>

                  <p className="text-[11px] text-deepnavy/50 font-sans italic pt-1">
                    {activeTier.perks}
                  </p>
                </div>

                {/* Interactive Tiers Map */}
                <div className="space-y-3 font-sans">
                  <h4 className="text-xs font-mono text-deepnavy/50 uppercase tracking-widest font-bold">Referral Tiers</h4>
                  <div className="space-y-2.5" id="referral-tiers-list">
                    {REFERRAL_TIERS.map((tier) => {
                      const isUnlocked = referralCount >= tier.referralsNeeded;
                      return (
                        <div 
                          key={tier.referralsNeeded} 
                          className={`p-3.5 rounded-xl border flex items-center justify-between text-xs transition-all ${
                            isUnlocked 
                              ? "bg-cyanaccent/5 border-cyanaccent/30 text-deepnavy" 
                              : "bg-white border-deepnavy/10 text-deepnavy/60"
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <div className={`h-6 w-6 rounded-full flex items-center justify-center shrink-0 ${
                              isUnlocked ? "bg-cyanaccent text-white" : "bg-deepnavy/5 text-deepnavy/40"
                            }`}>
                              {tier.referralsNeeded}
                            </div>
                            <div>
                              <strong className="font-serif text-sm font-bold block">{tier.name}</strong>
                              <span className="text-[11px]">{tier.perks}</span>
                            </div>
                          </div>
                          {isUnlocked && (
                            <span className="px-2 py-0.5 rounded-full bg-cyanaccent/15 text-cyanaccent text-[10px] font-bold uppercase tracking-wider">
                              Unlocked
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Compliance lines */}
                <div className="p-4 bg-deepnavy/[0.02] border border-deepnavy/10 rounded-xl text-[11px] text-deepnavy/70 leading-relaxed font-sans" id="referral-compliance-box">
                  <span className="font-bold text-deepnavy uppercase text-[9px] tracking-wider block mb-1">Compliance & Privacy Notice</span>
                  "Referral tracking uses a randomly generated code only — no personal data is shared with the people you invite. CASL-compliant: your contacts are never emailed without their own consent." No auto-email, no contact import — sharing is always a deliberate, user-initiated action.
                </div>

                {/* Reset / Simulator Panel */}
                <div className="pt-6 border-t border-deepnavy/10 flex flex-col sm:flex-row gap-3 justify-between items-center">
                  <button
                    onClick={handleReset}
                    className="text-xs text-deepnavy/50 hover:text-cyanaccent underline font-mono transition-colors cursor-pointer"
                    id="reset-simulation-btn"
                  >
                    ← Reset simulation state to start over
                  </button>

                  <div className="flex items-center gap-2 p-2 bg-amberaccent/5 border border-amberaccent/20 rounded-lg text-xs" id="referral-simulator-panel">
                    <span className="font-mono text-[10px] font-bold text-amberaccent shrink-0 uppercase">Simulator:</span>
                    <button
                      onClick={handleSimulateReferral}
                      className="px-3 py-1 bg-amberaccent hover:bg-amberaccent/90 text-white font-bold rounded text-[10px] shadow-sm transition-all cursor-pointer uppercase tracking-wider"
                      id="simulate-friend-join-btn"
                    >
                      + Simulate friend join
                    </button>
                  </div>
                </div>

              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
