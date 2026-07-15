/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  ClipboardList, Cpu, BarChart3, Info, 
  Dribbble, Award, Sparkles, CheckSquare, 
  UserCheck, ShieldCheck, Mail, ArrowRight, Activity, HelpCircle
} from "lucide-react";

interface InfoSectionsProps {
  onStartSimulation?: () => void;
}

export default function InfoSections({ onStartSimulation }: InfoSectionsProps) {
  const [previewOption, setPreviewOption] = useState<"a" | "b" | "c">("a");

  const previewMetrics = {
    a: {
      score: 81,
      badge: "Good",
      badgeStyle: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.25)]",
      description: "Calculated alertness index is stable but requires active audio compensation.",
      strokeOffset: Math.round((1 - 0.81) * 276),
      sparkline: "M0,15 L10,12 L20,18 L30,5 L40,8 L50,14 L60,10 L70,3 L80,12 L90,14 L100,6",
      stability: "STABLE // 81%"
    },
    b: {
      score: 58,
      badge: "At Risk",
      badgeStyle: "bg-red-500/10 border-red-500/30 text-red-400 shadow-[0_0_8px_rgba(239,68,68,0.25)]",
      description: "Calculated fatigue and aggressive coping mechanisms suggest elevated risk profiles.",
      strokeOffset: Math.round((1 - 0.58) * 276),
      sparkline: "M0,15 L10,17 L20,19 L30,12 L40,16 L50,18 L60,14 L70,19 L80,18 L90,20 L100,16",
      stability: "UNSTABLE // 58%"
    },
    c: {
      score: 94,
      badge: "Optimal",
      badgeStyle: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.25)]",
      description: "Proactive rest patterns maintain highest attention buffers. High safety index.",
      strokeOffset: Math.round((1 - 0.94) * 276),
      sparkline: "M0,10 L10,8 L20,9 L30,6 L40,7 L50,5 L60,6 L70,4 L80,5 L90,4 L100,5",
      stability: "OPTIMAL // 94%"
    }
  };

  const currentMetrics = previewMetrics[previewOption];
  return (
    <div className="bg-pearl space-y-24 py-16">
      
      {/* ---------------- SECTION 2: Why we're exploring Driver Awareness differently ---------------- */}
      <section className="max-w-7xl mx-auto px-6" id="why-research">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-cyanaccent uppercase tracking-widest font-bold">
            Core Philosophy
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-deepnavy font-bold mt-2 tracking-tight">
            Why we're exploring Driver Awareness differently
          </h2>
          <p className="text-base text-deepnavy/70 mt-4 leading-relaxed font-sans max-w-2xl mx-auto">
            Traditional driving technologies react after something happens—cameras record the collision, and air bags deploy to absorb the impact. We are researching whether active driver awareness itself can become a measurable, predictable baseline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Preventive vs Reactive */}
          <div className="bg-gradient-to-br from-[#0B1526] to-[#12233F] border border-[#20314d] hover:border-cyanaccent/50 rounded-3xl p-8 hover:shadow-lg transition-all" id="why-card-1">
            <div className="p-3.5 bg-cyanaccent/20 border border-cyanaccent/30 w-fit rounded-2xl mb-6 text-cyan-400">
              <ClipboardList className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="font-serif text-2xl text-white font-black tracking-tight mb-3">Preventive Cognitive Models</h3>
            <p className="text-sm text-slate-200 leading-relaxed font-sans font-medium">
              Rather than filming or tracking raw driver metrics, we investigate if simple subjective self-assessments combined with contextual data can predict cognitive drift before fatigue becomes critical.
            </p>
          </div>

          {/* Card 2: Absolute Sovereignty */}
          <div className="bg-gradient-to-br from-[#0B1526] to-[#12233F] border border-[#20314d] hover:border-amberaccent/50 rounded-3xl p-8 hover:shadow-lg transition-all" id="why-card-2">
            <div className="p-3.5 bg-amberaccent/20 border border-amberaccent/30 w-fit rounded-2xl mb-6 text-amber-400">
              <Cpu className="h-6 w-6 text-amber-400" />
            </div>
            <h3 className="font-serif text-2xl text-white font-black tracking-tight mb-3">On-Device Edge Computing</h3>
            <p className="text-sm text-slate-200 leading-relaxed font-sans font-medium">
              Centralized servers and cloud-based video logs expose drivers to systemic tracking risks. We're testing lightweight behavioral structures that compute exclusively on standard smartphone hardware.
            </p>
          </div>

          {/* Card 3: Non-Intrusive Validation */}
          <div className="bg-gradient-to-br from-[#0B1526] to-[#12233F] border border-[#20314d] hover:border-cyanaccent/50 rounded-3xl p-8 hover:shadow-lg transition-all" id="why-card-3">
            <div className="p-3.5 bg-cyanaccent/20 border border-cyanaccent/30 w-fit rounded-2xl mb-6 text-cyan-400">
              <BarChart3 className="h-6 w-6 text-cyan-400" />
            </div>
            <h3 className="font-serif text-2xl text-white font-black tracking-tight mb-3">Independent Science Focus</h3>
            <p className="text-sm text-slate-200 leading-relaxed font-sans font-medium">
              This initiative decouples driving diagnostics from vehicle telemetry, insurance databases, and marketing systems to establish an objective, driver-first security standard.
            </p>
          </div>
        </div>

        {/* Mandatory simulation disclaimer line */}
        <div className="flex items-center gap-3 mt-8 p-4 bg-cyanaccent/5 border border-cyanaccent/10 rounded-xl justify-center text-center" id="sim-disclaimer-banner">
          <Info className="h-5 w-5 text-cyanaccent shrink-0" />
          <p className="text-xs font-sans text-deepnavy/80">
            Research Parameters: <strong className="text-cyanaccent">This assessment is entirely exploratory</strong>. All profiles and feedback models are simulated for feasibility assessment.
          </p>
        </div>
      </section>

      {/* ---------------- SECTION 3: What you'll receive ---------------- */}
      <section className="max-w-7xl mx-auto px-6 border-t border-deepnavy/10 pt-24" id="what-you-receive">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-cyanaccent uppercase tracking-widest font-bold">
            Cognitive Diagnostics
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-deepnavy font-bold mt-2 tracking-tight">
            What you'll receive
          </h2>
          <p className="text-deepnavy/70 mt-3 font-sans">
            By engaging with this research concept, you will obtain a detailed diagnostic preview representing an objective behavioral assessment:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Deliverable 1 */}
          <div className="bg-gradient-to-br from-[#0B1526] to-[#12233F] border-y border-r border-l-4 border-l-cyanaccent border-y-[#20314d] border-r-[#20314d] hover:border-cyanaccent/50 rounded-3xl p-8 hover:shadow-lg transition-all flex flex-col justify-between" id="receive-card-1">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-black">Report Doc // 01</span>
                <span className="text-[10px] bg-cyan-950/40 text-cyan-400 border border-cyan-800/40 px-2.5 py-1 rounded-md font-mono font-black uppercase">Diagnostic</span>
              </div>
              <h3 className="font-serif text-2xl text-white font-black tracking-tight mb-3">Driver Awareness Score</h3>
              <p className="text-sm text-slate-200 leading-relaxed font-sans font-semibold">
                A structured, simulated numerical scale representing potential alertness retention, computed from regional environmental stressors and personal fatigue vectors.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[10px] text-cyan-400 font-mono font-bold tracking-wider">
              METRIC: AWARENESS COEFFICIENT
            </div>
          </div>

          {/* Deliverable 2 */}
          <div className="bg-gradient-to-br from-[#0B1526] to-[#12233F] border-y border-r border-l-4 border-l-amberaccent border-y-[#20314d] border-r-[#20314d] hover:border-amberaccent/50 rounded-3xl p-8 hover:shadow-lg transition-all flex flex-col justify-between" id="receive-card-2">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono text-amber-400 tracking-wider uppercase font-black">Report Doc // 02</span>
                <span className="text-[10px] bg-amber-950/40 text-amber-400 border border-amber-800/40 px-2.5 py-1 rounded-md font-mono font-black uppercase">Risk Analysis</span>
              </div>
              <h3 className="font-serif text-2xl text-white font-black tracking-tight mb-3">Fatigue Risk Profile</h3>
              <p className="text-sm text-slate-200 leading-relaxed font-sans font-semibold">
                An objective breakdown detailing your vulnerability to cognitive exhaustion, particularly during challenging weather patterns or prolonged urban highway commutes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[10px] text-amber-400 font-mono font-bold tracking-wider">
              METRIC: TEMPORAL STRESS FACTOR
            </div>
          </div>

          {/* Deliverable 3 */}
          <div className="bg-gradient-to-br from-[#0B1526] to-[#12233F] border-y border-r border-l-4 border-l-cyanaccent border-y-[#20314d] border-r-[#20314d] hover:border-cyanaccent/50 rounded-3xl p-8 hover:shadow-lg transition-all flex flex-col justify-between" id="receive-card-3">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-black">Report Doc // 03</span>
                <span className="text-[10px] bg-cyan-950/40 text-cyan-400 border border-cyan-800/40 px-2.5 py-1 rounded-md font-mono font-black uppercase">Participation</span>
              </div>
              <h3 className="font-serif text-2xl text-white font-black tracking-tight mb-3">Research Cohort Invitation</h3>
              <p className="text-sm text-slate-200 leading-relaxed font-sans font-semibold">
                Direct options to help define the next generation of privacy-first driver security models, gaining priority access to upcoming offline software prototypes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-[10px] text-cyan-400 font-mono font-bold tracking-wider">
              METRIC: COHORT STAGE-1 ELIGIBILITY
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: How it works (Stateful Interactive Research Explorer) ---------------- */}
      <section className="max-w-7xl mx-auto px-6 border-t border-deepnavy/10 pt-24" id="how-it-works">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-cyanaccent uppercase tracking-widest font-black block mb-2" id="how-tag">
            Validation Workflow
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-deepnavy font-black tracking-tight" id="how-heading">
            How It Works
          </h2>
          <p className="text-base text-deepnavy/70 mt-4 leading-relaxed font-sans max-w-2xl mx-auto">
            Our market-validation process is fully streamlined, transparent, and user-directed. Explore each phase of our research simulation framework below:
          </p>
        </div>

        {/* Stateful Step Selector Tabs */}
        <div className="bg-white rounded-3xl border border-deepnavy/10 p-6 md:p-8 shadow-sm" id="interactive-workflow-hub">
          <WorkflowExplorer />
        </div>
      </section>

      {/* ---------------- SECTION 5: What Astrateq Gadgets is validating first ---------------- */}
      <section className="max-w-7xl mx-auto px-6 border-t border-deepnavy/10 pt-24" id="validation-goals">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs text-cyanaccent uppercase tracking-widest font-bold">
            Hypothesis Testing
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-deepnavy font-bold mt-2 tracking-tight">
            What Astrateq Gadgets is validating first
          </h2>
          <p className="text-deepnavy/70 mt-3 font-sans">
            Our pre-launch research program seeks answers to three core scientific and technical questions:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-[#0B1526] to-[#12233F] border border-[#20314d] hover:border-cyanaccent/50 rounded-3xl p-8 hover:shadow-lg transition-all flex flex-col justify-between" id="val-card-1">
            <div>
              <div className="h-1.5 w-16 bg-cyan-400 rounded-full mb-6" />
              <h3 className="font-serif text-lg md:text-xl text-white font-black tracking-tight mb-3">
                Can awareness patterns be estimated without in-vehicle monitoring?
              </h3>
              <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-sans font-semibold">
                We are validating whether mathematical modeling of driving habits and subjective fatigue scales can form an accurate prediction model without invasive in-car tracking.
              </p>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-black mt-6 block">Hypothesis 01 // Est. Capability</span>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-[#0B1526] to-[#12233F] border border-[#20314d] hover:border-amberaccent/50 rounded-3xl p-8 hover:shadow-lg transition-all flex flex-col justify-between" id="val-card-2">
            <div>
              <div className="h-1.5 w-16 bg-amber-400 rounded-full mb-6" />
              <h3 className="font-serif text-lg md:text-xl text-white font-black tracking-tight mb-3">
                Can driving context influence perceived alertness?
              </h3>
              <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-sans font-semibold">
                We are mapping how highly localized factors—such as Canadian winter conditions, sub-zero cold, and major highway commuting bottlenecks—disproportionately impact driver response limits.
              </p>
            </div>
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest font-black mt-6 block">Hypothesis 02 // Stress Context</span>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-[#0B1526] to-[#12233F] border border-[#20314d] hover:border-cyanaccent/50 rounded-3xl p-8 hover:shadow-lg transition-all flex flex-col justify-between" id="val-card-3">
            <div>
              <div className="h-1.5 w-16 bg-cyan-400 rounded-full mb-6" />
              <h3 className="font-serif text-lg md:text-xl text-white font-black tracking-tight mb-3">
                Can privacy-first models provide meaningful insights?
              </h3>
              <p className="text-xs md:text-sm text-slate-200 leading-relaxed font-sans font-semibold">
                We are analyzing driver willingness to engage with localized, 100% offline security tools that guarantee absolute insulation from cloud monitoring and third-party trackers.
              </p>
            </div>
            <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-black mt-6 block">Hypothesis 03 // Privacy Acceptance</span>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 6: Simulation Preview ---------------- */}
      <section className="max-w-7xl mx-auto px-6 border-t border-deepnavy/10 pt-24" id="simulation-preview">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-cyanaccent uppercase tracking-widest font-bold">
            Interactive Preview
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-deepnavy font-bold mt-2 tracking-tight">
            Simulation Design Preview
          </h2>
          <p className="text-deepnavy/70 mt-3 font-sans max-w-2xl mx-auto">
            Review the exact structure of our research diagnostic instrument. No data is sent to the cloud; the client-side script processes your parameters fully in local sandboxed memory.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="preview-container">
          
          {/* Column 1: Sample Questionnaire Box */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#0B1526] to-[#12233F] border border-[#20314d] rounded-2xl p-8 flex flex-col justify-between shadow-lg" id="preview-questionnaire-box">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono text-slate-300 uppercase tracking-wider font-semibold">Active Assessment Simulator</span>
                </div>
                <span className="text-xs font-mono bg-slate-800 text-white border border-slate-700 px-2.5 py-0.5 rounded font-medium">Question 3 of 5</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-6">
                <div className="w-3/5 h-full bg-cyan-400 rounded-full" />
              </div>

              {/* Question Statement */}
              <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold block mb-2">Subjective Focus Metric</span>
              <h3 className="font-serif text-xl text-white font-bold mb-6 leading-snug">
                "When experiencing persistent cognitive fatigue on a Canadian highway, what is your primary response pattern?"
              </h3>

              {/* Multiple Choice Options */}
              <div className="space-y-3">
                <button
                  onClick={() => setPreviewOption("a")}
                  className={`w-full flex items-center gap-3 p-3.5 border rounded-xl transition-all text-left cursor-pointer focus:outline-none ${
                    previewOption === "a"
                      ? "border-cyan-400 bg-cyan-950/30 text-white font-semibold"
                      : "border-[#20314d] bg-[#09101c]/50 hover:border-cyan-400/50 text-slate-200"
                  }`}
                  id="preview-option-a"
                >
                  <div className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 ${
                    previewOption === "a" ? "border-cyan-400 bg-cyan-400 text-white" : "border-slate-600 bg-slate-800/80"
                  }`}>
                    {previewOption === "a" && (
                      <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs font-sans">I rely heavily on radio/audio stimulation to force focus (Active Compensation).</span>
                </button>

                <button
                  onClick={() => setPreviewOption("b")}
                  className={`w-full flex items-center gap-3 p-3.5 border rounded-xl transition-all text-left cursor-pointer focus:outline-none ${
                    previewOption === "b"
                      ? "border-cyan-400 bg-cyan-950/30 text-white font-semibold"
                      : "border-[#20314d] bg-[#09101c]/50 hover:border-cyan-400/50 text-slate-200"
                  }`}
                  id="preview-option-b"
                >
                  <div className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 ${
                    previewOption === "b" ? "border-cyan-400 bg-cyan-400 text-white" : "border-slate-600 bg-slate-800/80"
                  }`}>
                    {previewOption === "b" && (
                      <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs font-sans">I attempt to accelerate slightly to heighten adrenaline (Aggressive Risk).</span>
                </button>

                <button
                  onClick={() => setPreviewOption("c")}
                  className={`w-full flex items-center gap-3 p-3.5 border rounded-xl transition-all text-left cursor-pointer focus:outline-none ${
                    previewOption === "c"
                      ? "border-cyan-400 bg-cyan-950/30 text-white font-semibold"
                      : "border-[#20314d] bg-[#09101c]/50 hover:border-cyan-400/50 text-slate-200"
                  }`}
                  id="preview-option-c"
                >
                  <div className={`h-5 w-5 rounded-full border flex items-center justify-center shrink-0 ${
                    previewOption === "c" ? "border-cyan-400 bg-cyan-400 text-white" : "border-slate-600 bg-slate-800/80"
                  }`}>
                    {previewOption === "c" && (
                      <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className="text-xs font-sans">I seek a designated rest stop or pull over immediately (Safe Baseline).</span>
                </button>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono">
              <span>EXPLORATORY METRIC: ATTENTION_STABILITY_V3</span>
              <span>EST. PROCESSING TIME: ~12ms</span>
            </div>
          </div>

          {/* Column 2: Simulated Output Dashboard Preview */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#070d1a] via-[#09152b] to-[#040811] text-white rounded-2xl p-8 flex flex-col justify-between border border-cyanaccent/20 shadow-[0_20px_50px_rgba(3,7,18,0.5)] relative overflow-hidden" id="preview-dashboard-box">
            
            {/* Ambient glows behind */}
            <div className="absolute top-1/4 -left-12 w-32 h-32 bg-cyanaccent/20 rounded-full blur-[40px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-12 w-32 h-32 bg-emerald-500/20 rounded-full blur-[40px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-6">
                <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400">Simulation Output Report</span>
                <span className="px-2.5 py-0.5 text-[9px] font-mono font-bold bg-cyanaccent/15 border border-cyanaccent/30 text-cyanaccent rounded-full uppercase tracking-wider">Estimated Model</span>
              </div>

              {/* Large Score Circle Mock */}
              <div className="flex flex-col items-center py-4">
                <div className="relative h-32 w-32 rounded-full flex items-center justify-center mb-4">
                  {/* Background Soft Glow */}
                  <div className="absolute inset-2 rounded-full bg-cyan-500/10 blur-md pointer-events-none" />
                  
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="44" stroke="#0e172a" strokeWidth="6" fill="transparent" />
                    <circle cx="50" cy="50" r="44" stroke="#102a45" strokeWidth="5" fill="transparent" />
                    
                    {/* Active neon arc */}
                    <circle 
                      cx="50" cy="50" r="44" 
                      stroke="#06b6d4" 
                      strokeWidth="5.5" 
                      strokeDasharray="276" 
                      strokeDashoffset={currentMetrics.strokeOffset}
                      strokeLinecap="round" 
                      fill="transparent" 
                      className="drop-shadow-[0_0_6px_rgba(6,182,212,0.6)] transition-all duration-500"
                    />
                  </svg>
                  
                  <div className="text-center z-10">
                    <span className="block font-serif text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-50 to-cyan-100 drop-shadow-[0_2px_10px_rgba(6,182,212,0.5)] leading-none transition-all duration-500">
                      {currentMetrics.score}
                    </span>
                    <span className={`inline-block px-2 py-0.5 rounded-full border text-[8px] font-extrabold uppercase tracking-widest mt-1.5 backdrop-blur-sm transition-all duration-500 ${currentMetrics.badgeStyle}`}>
                      {currentMetrics.badge}
                    </span>
                  </div>
                </div>
                
                <h4 className="font-serif text-base font-bold text-white tracking-wide">Driver Awareness Profile</h4>
                <p className="text-[10.5px] text-slate-300 font-sans text-center mt-2 max-w-xs leading-relaxed h-12 transition-all duration-500">
                  {currentMetrics.description}
                </p>
              </div>

              {/* Awareness Graph Visual */}
              <div className="bg-slate-950/40 backdrop-blur-md border border-white/[0.06] rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-2 text-[9px] font-mono tracking-wider text-slate-400">
                  <span>COGNITIVE STABILITY GRAPH</span>
                  <span className="text-cyanaccent font-bold uppercase transition-all duration-500">{currentMetrics.stability}</span>
                </div>
                {/* Simulated Sparkline Graph with SVG */}
                <svg className="w-full h-8 stroke-cyanaccent fill-none" viewBox="0 0 100 20">
                  <path d={currentMetrics.sparkline} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-all duration-500" />
                  <path d={currentMetrics.sparkline} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-30 blur-[2px] transition-all duration-500" />
                </svg>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div className="backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-lg p-2.5 flex items-center gap-2 hover:bg-white/[0.06] transition-all">
                  <ShieldCheck className="h-4 w-4 text-cyanaccent shrink-0" />
                  <span className="text-slate-200 font-semibold font-sans">100% Offline</span>
                </div>
                <div className="backdrop-blur-md bg-white/[0.03] border border-white/[0.06] rounded-lg p-2.5 flex items-center gap-2 hover:bg-white/[0.06] transition-all">
                  <Award className="h-4 w-4 text-cyanaccent shrink-0" />
                  <span className="text-slate-200 font-semibold font-sans">Cohort Verified</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-center relative z-10">
              <button 
                onClick={() => {
                  if (onStartSimulation) {
                    onStartSimulation();
                  } else {
                    const el = document.getElementById("live-simulation");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full bg-cyanaccent hover:bg-cyanaccent/90 text-white font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-[0_4px_12px_rgba(14,124,158,0.25)] hover:shadow-[0_4px_20px_rgba(14,124,158,0.4)] hover:-translate-y-0.5"
              >
                Start 60s Simulation
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

// Stateful Interactive Step Explorer
function WorkflowExplorer() {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      label: "Phase 1: Cognitive Intake",
      shortTitle: "Answer Questions",
      icon: "📋",
      tagline: "Voluntary self-reported attention metrics",
      overview: "Enter voluntary subjective and contextual variables—including commute patterns, sleep hygiene, driving durations, and attention coping mechanisms—via our 5-question secure diagnostic sandbox form.",
      scientificGoal: "Subjective fatigue indicators correlate strongly with physiological drowsiness levels. By collecting systematic self-reports, we validate whether pre-commute profiling can predict cognitive drift before you start the ignition.",
      technicalDetails: [
        "100% Client-side sandbox browser execution",
        "Zero API calls or transmission of answers during input",
        "Decoupled from device camera and external telemetry"
      ],
      metricLabel: "DIAGNOSTIC INSTRUMENT: COG_INTAKE_V1"
    },
    {
      label: "Phase 2: Contextual Heuristics",
      shortTitle: "Generate Profile",
      icon: "⚙️",
      tagline: "Processing localized stress vectors",
      overview: "Our local mathematical script immediately processes your answers against regional Canadian driving hazards to construct a temporal attention stress curve.",
      scientificGoal: "Driving context heavily impacts alertness. By combining your inputs with regional Canadian commuter bottleneck multipliers and seasonal daylight curves, the algorithm calculates custom, realistic fatigue risks.",
      technicalDetails: [
        "Instant math heuristic processing on-device",
        "Adaptive temporal stress multipliers for rural vs metropolitan routes",
        "Decoupled from vehicle OBD-II computers or central processing nodes"
      ],
      metricLabel: "ALGORITHM METRIC: TEMPORAL_STRESS_CURVE_V4"
    },
    {
      label: "Phase 3: Instant Analytics",
      shortTitle: "See Results Report",
      icon: "📊",
      tagline: "Comprehensive attention diagnostics",
      overview: "Instantly view your simulated Driver Awareness Score, along with detailed fatigue mitigation breakdowns and province-specific risk profiles—completely free of charge.",
      scientificGoal: "Showing actionable results helps drivers build localized awareness of their sleep schedules, commute timing, and attention patterns. No email wall, credit cards, or hidden commercial upgrades are required.",
      technicalDetails: [
        "Interactive high-contrast telemetry HUD mock",
        "Comprehensive localized risk assessment metrics",
        "Saves score safely in your browser local storage"
      ],
      metricLabel: "FINDINGS COEFFICIENT: AWARENESS_INDEX_81"
    },
    {
      label: "Phase 4: Academic Cohort",
      shortTitle: "Join Active Cohort",
      icon: "🤝",
      tagline: "Register as research partner",
      overview: "Motorists can optionally submit their email to join the National Research Cohort to receive aggregated cohort findings and priority pilot opportunities.",
      scientificGoal: "Transitioning from theoretical models to real-world software requires collaborative motorists. Cohort members receive priority notifications to test early, non-commercial software prototypes.",
      technicalDetails: [
        "Optional voluntary email registration",
        "Anonymized data synchronization via Firebase Firestore",
        "Strictly non-commercial research contact list"
      ],
      metricLabel: "PARTICIPATION STAGE: COHORT_MEMBER_ENROLLMENT"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch" id="workflow-explorer-wrapper">
      {/* Sidebar: Step Tabs */}
      <div className="lg:col-span-4 flex flex-col gap-3 justify-between" id="workflow-tabs-sidebar">
        <div className="space-y-3">
          <span className="font-mono text-[10px] text-cyanaccent font-black tracking-widest block uppercase mb-4">
            Select Timeline Step
          </span>
          {steps.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center gap-4 cursor-pointer focus:outline-none ${
                  isActive
                    ? "bg-cyanaccent text-white border-cyanaccent shadow-md translate-x-1"
                    : "bg-[#0B1526] text-white border-[#20314d] hover:border-cyanaccent/30 hover:bg-[#12233F]"
                }`}
                id={`workflow-tab-${idx}`}
              >
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center font-mono text-lg shrink-0 ${
                  isActive ? "bg-white/20 text-white" : "bg-cyan-950/40 text-cyan-400 border border-cyan-800/40"
                }`}>
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-serif font-black text-sm tracking-tight">
                    {step.shortTitle}
                  </h4>
                  <p className={`text-[10px] mt-0.5 ${isActive ? "text-white/80" : "text-slate-400"}`}>
                    {step.label}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 p-4 bg-[#0B1526] border border-[#20314d] rounded-2xl hidden lg:block">
          <p className="text-[10px] text-slate-400 font-sans leading-relaxed">
            *This timeline operates fully within a non-commercial framework. Every phase is designed to establish scientific feasibility while respecting participant sovereignty.
          </p>
        </div>
      </div>

      {/* Main Panel: Step Details (Dynamic Content) */}
      <div className="lg:col-span-8 bg-[#0B1526] border border-[#20314d] rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg" id="workflow-detail-panel">
        <div>
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl" role="img" aria-label="Step icon">
                {steps[activeStep].icon}
              </span>
              <div>
                <span className="text-[10px] font-mono font-black text-cyan-400 uppercase block">
                  {steps[activeStep].label}
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-white font-black tracking-tight mt-0.5">
                  {steps[activeStep].tagline}
                </h3>
              </div>
            </div>
            <span className="text-xs bg-cyan-950/40 text-cyan-400 border border-cyan-800/40 px-3 py-1 rounded-full font-mono font-black">
              ACTIVE RESEARCH STEP
            </span>
          </div>

          {/* Description & Scientific Justification */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h5 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                Phase Overview
              </h5>
              <p className="text-sm md:text-base text-slate-200 font-sans leading-relaxed">
                {steps[activeStep].overview}
              </p>
            </div>

            <div className="space-y-2 p-5 bg-[#12233F] border border-[#20314d] rounded-2xl">
              <h5 className="text-xs font-mono font-black text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Scientific Goal & Hypothesis
              </h5>
              <p className="text-xs md:text-sm text-slate-300 font-sans leading-relaxed italic">
                "{steps[activeStep].scientificGoal}"
              </p>
            </div>

            {/* Technical Parameter Checklist */}
            <div className="space-y-2">
              <h5 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                Technical Security Parameters
              </h5>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {steps[activeStep].technicalDetails.map((detail, dIdx) => (
                  <li key={dIdx} className="flex gap-2 items-start text-xs text-slate-200 font-semibold bg-[#12233F] border border-[#20314d] p-3 rounded-xl shadow-xs">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer info line */}
        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400 font-mono">
          <span>{steps[activeStep].metricLabel}</span>
          <span className="hidden sm:inline">PROCESSING MODEL: SECURE_SANDBOX_ST_0{activeStep + 1}</span>
        </div>
      </div>
    </div>
  );
}
