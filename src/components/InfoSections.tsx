/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { 
  ClipboardList, Cpu, BarChart3, Info, 
  Dribbble, Award, Sparkles, CheckSquare, 
  UserCheck, ShieldCheck, Mail, ArrowRight, Activity, HelpCircle
} from "lucide-react";

export default function InfoSections() {
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
          <div className="bg-white border border-deepnavy/10 rounded-2xl p-8 hover:border-cyanaccent/30 transition-all shadow-sm" id="why-card-1">
            <div className="p-3 bg-cyanaccent/10 w-fit rounded-xl mb-6">
              <ClipboardList className="h-6 w-6 text-cyanaccent" />
            </div>
            <h3 className="font-serif text-xl text-deepnavy font-bold mb-3">Preventive Cognitive Models</h3>
            <p className="text-sm text-deepnavy/80 leading-relaxed font-sans">
              Rather than filming or tracking raw driver metrics, we investigate if simple subjective self-assessments combined with contextual data can predict cognitive drift before fatigue becomes critical.
            </p>
          </div>

          {/* Card 2: Absolute Sovereignty */}
          <div className="bg-white border border-deepnavy/10 rounded-2xl p-8 hover:border-cyanaccent/30 transition-all shadow-sm" id="why-card-2">
            <div className="p-3 bg-cyanaccent/10 w-fit rounded-xl mb-6">
              <Cpu className="h-6 w-6 text-cyanaccent" />
            </div>
            <h3 className="font-serif text-xl text-deepnavy font-bold mb-3">On-Device Edge Computing</h3>
            <p className="text-sm text-deepnavy/80 leading-relaxed font-sans">
              Centralized servers and cloud-based video logs expose drivers to systemic tracking risks. We're testing lightweight behavioral structures that compute exclusively on standard smartphone hardware.
            </p>
          </div>

          {/* Card 3: Non-Intrusive Validation */}
          <div className="bg-white border border-deepnavy/10 rounded-2xl p-8 hover:border-cyanaccent/30 transition-all shadow-sm" id="why-card-3">
            <div className="p-3 bg-cyanaccent/10 w-fit rounded-xl mb-6">
              <BarChart3 className="h-6 w-6 text-cyanaccent" />
            </div>
            <h3 className="font-serif text-xl text-deepnavy font-bold mb-3">Independent Science Focus</h3>
            <p className="text-sm text-deepnavy/80 leading-relaxed font-sans">
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
          <div className="bg-white border border-deepnavy/10 rounded-2xl p-8 hover:border-cyanaccent/30 transition-all shadow-sm flex flex-col justify-between" id="receive-card-1">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-deepnavy/10 mb-6">
                <span className="text-xs font-mono text-cyanaccent tracking-wider uppercase font-semibold">Report Doc // 01</span>
                <span className="text-xs bg-slate-100 text-deepnavy px-2 py-0.5 rounded font-mono font-medium">Diagnostic</span>
              </div>
              <h3 className="font-serif text-xl text-deepnavy font-bold mb-3">Driver Awareness Score</h3>
              <p className="text-sm text-deepnavy/80 leading-relaxed font-sans">
                A structured, simulated numerical scale representing potential alertness retention, computed from regional environmental stressors and personal fatigue vectors.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-deepnavy/5 text-xs text-deepnavy/50 font-mono">
              METRIC: AWARENESS COEFFICIENT
            </div>
          </div>

          {/* Deliverable 2 */}
          <div className="bg-white border border-deepnavy/10 rounded-2xl p-8 hover:border-cyanaccent/30 transition-all shadow-sm flex flex-col justify-between" id="receive-card-2">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-deepnavy/10 mb-6">
                <span className="text-xs font-mono text-cyanaccent tracking-wider uppercase font-semibold">Report Doc // 02</span>
                <span className="text-xs bg-slate-100 text-deepnavy px-2 py-0.5 rounded font-mono font-medium">Risk Analysis</span>
              </div>
              <h3 className="font-serif text-xl text-deepnavy font-bold mb-3">Fatigue Risk Profile</h3>
              <p className="text-sm text-deepnavy/80 leading-relaxed font-sans">
                An objective breakdown detailing your vulnerability to cognitive exhaustion, particularly during challenging weather patterns or prolonged urban highway commutes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-deepnavy/5 text-xs text-deepnavy/50 font-mono">
              METRIC: TEMPORAL STRESS FACTOR
            </div>
          </div>

          {/* Deliverable 3 */}
          <div className="bg-white border border-deepnavy/10 rounded-2xl p-8 hover:border-cyanaccent/30 transition-all shadow-sm flex flex-col justify-between" id="receive-card-3">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-deepnavy/10 mb-6">
                <span className="text-xs font-mono text-cyanaccent tracking-wider uppercase font-semibold">Report Doc // 03</span>
                <span className="text-xs bg-slate-100 text-deepnavy px-2 py-0.5 rounded font-mono font-medium">Participation</span>
              </div>
              <h3 className="font-serif text-xl text-deepnavy font-bold mb-3">Research Cohort Invitation</h3>
              <p className="text-sm text-deepnavy/80 leading-relaxed font-sans">
                Direct options to help define the next generation of privacy-first driver security models, gaining priority access to upcoming offline software prototypes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-deepnavy/5 text-xs text-deepnavy/50 font-mono">
              METRIC: COHORT STAGE-1 ELIGIBILITY
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 4: How it works ---------------- */}
      <section className="max-w-7xl mx-auto px-6 border-t border-deepnavy/10 pt-24" id="how-it-works">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-cyanaccent uppercase tracking-widest font-bold">
            Timeline
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-deepnavy font-bold mt-2 tracking-tight">
            How it works
          </h2>
          <p className="text-deepnavy/70 mt-3 font-sans">
            Our exploratory simulation process is entirely streamlined, taking only 60 seconds of focused input:
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12" id="how-it-works-flow">
          {/* Connector line for large screens */}
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-cyanaccent/20 via-amberaccent/20 to-cyanaccent/20 -z-10" />

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center space-y-4" id="work-step-1">
            <div className="h-12 w-12 rounded-full bg-cyanaccent text-white flex items-center justify-center font-bold text-lg shadow-md">
              1
            </div>
            <h3 className="font-serif text-base text-deepnavy font-bold">Answer Questions</h3>
            <p className="text-xs text-deepnavy/70 max-w-xs font-sans">
              Input driving behavior, context, and focus indicators through five targeted research questions.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center space-y-4" id="work-step-2">
            <div className="h-12 w-12 rounded-full bg-deepnavy text-white flex items-center justify-center font-bold text-lg shadow-md">
              2
            </div>
            <h3 className="font-serif text-base text-deepnavy font-bold">Generate Profile</h3>
            <p className="text-xs text-deepnavy/70 max-w-xs font-sans">
              The on-screen diagnostic script translates parameters into a simulated driver profile.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center space-y-4" id="work-step-3">
            <div className="h-12 w-12 rounded-full bg-cyanaccent text-white flex items-center justify-center font-bold text-lg shadow-md">
              3
            </div>
            <h3 className="font-serif text-base text-deepnavy font-bold">See Results Report</h3>
            <p className="text-xs text-deepnavy/70 max-w-xs font-sans">
              Review your customized score, Fatigue Risk analysis, and potential mitigation priorities instantly.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center space-y-4" id="work-step-4">
            <div className="h-12 w-12 rounded-full bg-deepnavy text-white flex items-center justify-center font-bold text-lg shadow-md">
              4
            </div>
            <h3 className="font-serif text-base text-deepnavy font-bold">Optionally Join Cohort</h3>
            <p className="text-xs text-deepnavy/70 max-w-xs font-sans">
              Submit your interest to join the National Research Cohort and shape upcoming software pilots.
            </p>
          </div>
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
          <div className="bg-white border border-deepnavy/5 rounded-2xl p-8 shadow-sm flex flex-col justify-between" id="val-card-1">
            <div>
              <div className="h-2 w-12 bg-cyanaccent rounded-full mb-6" />
              <h3 className="font-serif text-lg text-deepnavy font-bold mb-3">
                Can awareness patterns be estimated without in-vehicle monitoring?
              </h3>
              <p className="text-sm text-deepnavy/70 leading-relaxed font-sans">
                We are validating whether mathematical modeling of driving habits and subjective fatigue scales can form an accurate prediction model without invasive in-car tracking.
              </p>
            </div>
            <span className="text-xs font-mono text-deepnavy/40 uppercase tracking-widest mt-6 block">Hypothesis 01 // Est. Capability</span>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-deepnavy/5 rounded-2xl p-8 shadow-sm flex flex-col justify-between" id="val-card-2">
            <div>
              <div className="h-2 w-12 bg-amberaccent rounded-full mb-6" />
              <h3 className="font-serif text-lg text-deepnavy font-bold mb-3">
                Can driving context influence perceived alertness?
              </h3>
              <p className="text-sm text-deepnavy/70 leading-relaxed font-sans">
                We are mapping how highly localized factors—such as Canadian winter conditions, sub-zero cold, and major highway commuting bottlenecks—disproportionately impact driver response limits.
              </p>
            </div>
            <span className="text-xs font-mono text-deepnavy/40 uppercase tracking-widest mt-6 block">Hypothesis 02 // Stress Context</span>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-deepnavy/5 rounded-2xl p-8 shadow-sm flex flex-col justify-between" id="val-card-3">
            <div>
              <div className="h-2 w-12 bg-cyanaccent rounded-full mb-6" />
              <h3 className="font-serif text-lg text-deepnavy font-bold mb-3">
                Can privacy-first models provide meaningful insights?
              </h3>
              <p className="text-sm text-deepnavy/70 leading-relaxed font-sans">
                We are analyzing driver willingness to engage with localized, 100% offline security tools that guarantee absolute insulation from cloud monitoring and third-party trackers.
              </p>
            </div>
            <span className="text-xs font-mono text-deepnavy/40 uppercase tracking-widest mt-6 block">Hypothesis 03 // Privacy Acceptance</span>
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
          <div className="lg:col-span-7 bg-white border border-deepnavy/10 rounded-2xl p-8 flex flex-col justify-between" id="preview-questionnaire-box">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-deepnavy/5 mb-6">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyanaccent animate-pulse" />
                  <span className="text-xs font-mono text-deepnavy/60 uppercase tracking-wider font-semibold">Active Assessment Simulator</span>
                </div>
                <span className="text-xs font-mono bg-slate-100 text-deepnavy px-2.5 py-0.5 rounded font-medium">Question 3 of 5</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mb-6">
                <div className="w-3/5 h-full bg-cyanaccent rounded-full" />
              </div>

              {/* Question Statement */}
              <span className="text-xs font-mono text-cyanaccent tracking-wider uppercase font-semibold block mb-2">Subjective Focus Metric</span>
              <h3 className="font-serif text-xl text-deepnavy font-bold mb-6 leading-snug">
                "When experiencing persistent cognitive fatigue on a Canadian highway, what is your primary response pattern?"
              </h3>

              {/* Multiple Choice Options */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3.5 border border-deepnavy/10 rounded-xl bg-slate-50/50">
                  <div className="h-5 w-5 rounded-full border-2 border-deepnavy/20 flex items-center justify-center shrink-0">
                    <div className="h-2.5 w-2.5 rounded-full bg-transparent" />
                  </div>
                  <span className="text-xs font-medium text-deepnavy/80 font-sans">I rely heavily on radio/audio stimulation to force focus (Active Compensation).</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 border border-cyanaccent/30 rounded-xl bg-cyanaccent/[0.02]">
                  <div className="h-5 w-5 rounded-full border-2 border-cyanaccent flex items-center justify-center shrink-0">
                    <div className="h-2.5 w-2.5 rounded-full bg-cyanaccent" />
                  </div>
                  <span className="text-xs font-semibold text-deepnavy font-sans">I attempt to accelerate slightly to heighten adrenaline (Aggressive Risk).</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 border border-deepnavy/10 rounded-xl bg-slate-50/50">
                  <div className="h-5 w-5 rounded-full border-2 border-deepnavy/20 flex items-center justify-center shrink-0">
                    <div className="h-2.5 w-2.5 rounded-full bg-transparent" />
                  </div>
                  <span className="text-xs font-medium text-deepnavy/80 font-sans">I seek a designated rest stop or pull over immediately (Safe Baseline).</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-deepnavy/5 flex items-center justify-between text-[10px] text-deepnavy/40 font-mono">
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
                  <div className="absolute inset-2 rounded-full bg-cyan-500/10 blur-md" />
                  
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="44" stroke="#0e172a" strokeWidth="6" fill="transparent" />
                    <circle cx="50" cy="50" r="44" stroke="#102a45" strokeWidth="5" fill="transparent" />
                    
                    {/* Active neon arc */}
                    <circle 
                      cx="50" cy="50" r="44" 
                      stroke="#06b6d4" 
                      strokeWidth="5.5" 
                      strokeDasharray="276" 
                      strokeDashoffset="52" /* (1 - 0.81) * 276 */
                      strokeLinecap="round" 
                      fill="transparent" 
                      className="drop-shadow-[0_0_6px_rgba(6,182,212,0.6)]"
                    />
                  </svg>
                  
                  <div className="text-center z-10">
                    <span className="block font-serif text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-50 to-cyan-100 drop-shadow-[0_2px_10px_rgba(6,182,212,0.5)] leading-none">81</span>
                    <span className="inline-block px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[8px] font-extrabold uppercase tracking-widest mt-1.5 shadow-[0_0_8px_rgba(16,185,129,0.25)]">
                      Good
                    </span>
                  </div>
                </div>
                
                <h4 className="font-serif text-base font-bold text-white tracking-wide">Driver Awareness Profile</h4>
                <p className="text-[10.5px] text-slate-300 font-sans text-center mt-2 max-w-xs leading-relaxed">
                  Calculated using custom on-device algorithms simulating regional fatigue risk and temporal focus indexes.
                </p>
              </div>

              {/* Awareness Graph Visual */}
              <div className="bg-slate-950/40 backdrop-blur-md border border-white/[0.06] rounded-xl p-4 mb-4">
                <div className="flex items-center justify-between mb-2 text-[9px] font-mono tracking-wider text-slate-400">
                  <span>COGNITIVE STABILITY GRAPH</span>
                  <span className="text-cyanaccent font-bold">STABLE // 81%</span>
                </div>
                {/* Simulated Sparkline Graph with SVG */}
                <svg className="w-full h-8 stroke-cyanaccent fill-none" viewBox="0 0 100 20">
                  <path d="M0,15 L10,12 L20,18 L30,5 L40,8 L50,14 L60,10 L70,3 L80,12 L90,14 L100,6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M0,15 L10,12 L20,18 L30,5 L40,8 L50,14 L60,10 L70,3 L80,12 L90,14 L100,6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-30 blur-[2px]" />
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
                  const el = document.getElementById("hero");
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                    setTimeout(() => {
                      const cta = document.getElementById("hero-cta-btn");
                      if (cta) cta.click();
                    }, 800);
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
