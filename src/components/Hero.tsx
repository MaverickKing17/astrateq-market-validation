/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldAlert, ShieldCheck, Cpu, Clock, Smartphone, ChevronRight, Zap, Eye, Brain, Activity, ChevronDown } from "lucide-react";

interface HeroProps {
  onStartSimulation: () => void;
}

export default function Hero({ onStartSimulation }: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 px-6 bg-pearl border-b border-deepnavy/10" id="hero">
      {/* Decorative background accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyanaccent/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-amberaccent/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Headings and CTAs */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyanaccent/10 border border-cyanaccent/20 rounded-full">
            <span className="h-1.5 w-1.5 rounded-full bg-cyanaccent animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-wider text-cyanaccent uppercase">
              Research Initiative — Not a Product
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl tracking-tight leading-tight text-deepnavy font-bold">
            Check your Driver Awareness Readiness in <span className="text-cyanaccent">60 seconds.</span>
          </h1>

          <p className="text-lg text-deepnavy/80 leading-relaxed max-w-2xl font-sans">
            This simulation explores a privacy-first approach to understanding driver awareness in Canada. 
            No tracking. No hardware. No insurance scoring. No vehicle connection. 
            Complete a short, 60-second exploratory assessment to see your simulated score and potential eligibility to join our national cohort.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onStartSimulation}
              className="group relative flex items-center justify-center gap-2 bg-cyanaccent hover:bg-cyanaccent/90 text-white font-medium text-base px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              id="hero-cta-btn"
            >
              Start Driver Awareness Simulation
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("why-research");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center justify-center gap-1 text-deepnavy/80 hover:text-cyanaccent font-medium text-base px-6 py-4 rounded-xl border border-deepnavy/10 hover:border-cyanaccent/30 transition-all cursor-pointer bg-white"
              id="hero-secondary-btn"
            >
              Learn About The Research
            </button>
          </div>

            {/* Trust badge row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-deepnavy/10 text-xs font-medium text-deepnavy/70">
              <div className="flex items-center gap-2" id="badge-no-vehicle">
                <ShieldAlert className="h-4 w-4 text-cyanaccent shrink-0" />
                <span>No vehicle connection</span>
              </div>
              <div className="flex items-center gap-2" id="badge-no-insurance">
                <ShieldCheck className="h-4 w-4 text-cyanaccent shrink-0" />
                <span>No insurance sharing</span>
              </div>
              <div className="flex items-center gap-2" id="badge-no-hardware">
                <Cpu className="h-4 w-4 text-cyanaccent shrink-0" />
                <span>No hardware required</span>
              </div>
              <div className="flex items-center gap-2" id="badge-takes-60">
                <Clock className="h-4 w-4 text-cyanaccent shrink-0" />
                <span>Takes about 60s</span>
              </div>
            </div>

            {/* Built in Canada banner */}
            <div className="flex items-center gap-2 text-sm font-medium text-deepnavy/60 pt-2" id="built-in-canada-indicator">
              <svg className="h-5 w-5 text-red-600 fill-current shrink-0" viewBox="0 0 24 24" aria-label="Maple Leaf">
                <path d="M12,2L13.5,6.5L18,6L16,10.5L21,11L18.5,14L21,18L15.5,17L14,21.5L12,18L10,21.5L8.5,17L3,18L5.5,14L3,11L8,10.5L6,6L10.5,6.5L12,2Z" />
              </svg>
              <span>Built in Canada <span className="mx-1.5 text-deepnavy/20">|</span> For Canadian Drivers</span>
            </div>
          </div>

        {/* Right column: Interactive illustrative dark phone mockup */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center lg:items-end">
          <div className="relative w-full max-w-[340px] mt-8 lg:mt-0" id="phone-mockup-wrapper">
            
            {/* 5-Second Clarity Badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
              <div className="bg-deepnavy border border-cyanaccent/30 rounded-full px-3 py-1 shadow-md text-white text-[10px] font-mono tracking-wider uppercase flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyanaccent animate-pulse" />
                Speculative Software Concept
              </div>
            </div>

            {/* Phone Outer Shadow Accent */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyanaccent/20 to-amberaccent/20 rounded-[50px] blur-xl opacity-80" />
            
            {/* Phone Hardware Case */}
            <div className="relative w-full aspect-[9/19] bg-slate-950 border-[10px] border-slate-900 rounded-[48px] shadow-[0_25px_60px_-15px_rgba(3,7,18,0.7)] overflow-hidden flex flex-col p-1.5 ring-1 ring-white/10">
              
              {/* Dynamic Island / Speaker notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-900/80 ml-auto mr-4" />
              </div>

              {/* Screen Content - Dark UI Representing App State */}
              <div className="flex-1 bg-gradient-to-b from-[#070d1a] via-[#09152b] to-[#040811] rounded-[38px] overflow-hidden flex flex-col pt-8 px-4 pb-4 text-slate-100 select-none relative">
                
                {/* Tech background grid and glows */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                <div className="absolute top-1/4 -left-12 w-48 h-48 bg-cyanaccent/80 rounded-full blur-[70px] opacity-10 pointer-events-none" />
                <div className="absolute bottom-1/4 -right-12 w-48 h-48 bg-emerald-500/80 rounded-full blur-[70px] opacity-10 pointer-events-none" />
                
                {/* Embedded Waveform Graphic in Background layer (behind cards) */}
                <div className="absolute inset-x-0 bottom-24 h-24 opacity-15 pointer-events-none mix-blend-screen filter blur-[0.5px]">
                  <svg className="w-full h-full stroke-cyanaccent fill-none" viewBox="0 0 100 40" preserveAspectRatio="none">
                    <path d="M0,25 Q10,15 20,30 T40,10 T60,35 T80,15 T100,25" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M0,25 Q10,15 20,30 T40,10 T60,35 T80,15 T100,25" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 blur-[2px]" />
                  </svg>
                </div>

                {/* Mock App Header */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.06] relative z-10">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-cyanaccent animate-pulse" />
                    <span className="font-serif text-xs font-black tracking-tight text-white">Astrateq Gadgets <span className="text-[8px] uppercase tracking-wider font-sans font-extrabold text-cyanaccent">Driver</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-mono font-bold text-cyanaccent bg-cyanaccent/15 px-1.5 py-0.5 rounded uppercase tracking-widest border border-cyanaccent/30">Offline</span>
                    <div className="flex flex-col gap-0.5 items-end opacity-60">
                      <div className="w-3.5 h-0.5 bg-white rounded-full" />
                      <div className="w-3.5 h-0.5 bg-white rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Score Circular Dial Section */}
                <div className="flex-1 flex flex-col items-center justify-center py-4 relative z-10">
                  <span className="text-[11.5px] font-mono tracking-[0.18em] text-slate-200 uppercase mb-3.5 font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                    YOUR DRIVER AWARENESS SCORE
                  </span>
                  
                  {/* Gauge Ring Visual */}
                  <div className="relative w-36 h-36 flex items-center justify-center">
                    {/* Background Soft Glow */}
                    <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 blur-xl pointer-events-none" />
                    
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 160 160">
                      {/* Trail path (3D deep channel slot) */}
                      <circle cx="80" cy="80" r="68" stroke="#0a1224" strokeWidth="10" fill="transparent" />
                      <circle cx="80" cy="80" r="68" stroke="#121f38" strokeWidth="8" fill="transparent" />
                      
                      {/* Blur Glow behind the active indicator for neon effect */}
                      <circle 
                        cx="80" cy="80" r="68" 
                        stroke="url(#cyan-glow-gradient)" 
                        strokeWidth="14" 
                        strokeDasharray="427" 
                        strokeDashoffset="81" /* (1 - 0.81) * 427 */
                        strokeLinecap="round" 
                        fill="transparent" 
                        className="opacity-50 blur-[6px]"
                      />

                      {/* Crisp Active path with gradient fill */}
                      <circle 
                        cx="80" cy="80" r="68" 
                        stroke="url(#cyan-glow-gradient)" 
                        strokeWidth="8" 
                        strokeDasharray="427" 
                        strokeDashoffset="81" 
                        strokeLinecap="round" 
                        fill="transparent" 
                        className="drop-shadow-[0_0_4px_rgba(6,182,212,0.5)]"
                      />

                      <defs>
                        <linearGradient id="cyan-glow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="60%" stopColor="#0ea5e9" />
                          <stop offset="100%" stopColor="#10b981" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Inner Content */}
                    <div className="text-center z-10">
                      <span className="block font-serif text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-50 to-cyan-200 drop-shadow-[0_4px_16px_rgba(6,182,212,0.6)] leading-none select-none">
                        81
                      </span>
                      <span className="inline-flex mt-2.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(16,185,129,0.4)] backdrop-blur-sm">
                        ● Good
                      </span>
                    </div>
                  </div>

                  <p className="text-[12px] text-slate-100 text-center mt-3.5 max-w-[190px] font-sans font-bold tracking-wide">
                    Keep it up. Stay consistent.
                  </p>
                </div>

                {/* Simulated Metrics Column - Premium Glassmorphism UI cards */}
                <div className="space-y-2.5 pb-4 relative z-10">
                  
                  {/* Card 1 */}
                  <div className="flex items-center justify-between p-3 backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-t border-l border-cyanaccent/30 border-r border-b border-white/[0.05] rounded-xl shadow-[0_8px_32px_0_rgba(2,10,25,0.55)] transition-all duration-300 hover:border-cyanaccent/50 hover:bg-white/[0.1]">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-cyanaccent/20 text-cyanaccent rounded-lg border border-cyanaccent/35 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] shrink-0">
                        <Zap className="h-4 w-4 drop-shadow-[0_0_2px_rgba(14,124,158,0.6)]" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[12.5px] font-extrabold text-white font-sans tracking-wide leading-tight">FATIGUE RISK</span>
                        <span className="text-[10.5px] text-slate-200 font-sans font-semibold leading-normal mt-0.5">Physical & mental fatigue index</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)] font-mono">Low</span>
                      <ChevronDown className="h-3.5 w-3.5 text-slate-300" />
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex items-center justify-between p-3 backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-t border-l border-cyanaccent/30 border-r border-b border-white/[0.05] rounded-xl shadow-[0_8px_32px_0_rgba(2,10,25,0.55)] transition-all duration-300 hover:border-cyanaccent/50 hover:bg-white/[0.1]">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-cyanaccent/20 text-cyanaccent rounded-lg border border-cyanaccent/35 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] shrink-0">
                        <Eye className="h-4 w-4 drop-shadow-[0_0_2px_rgba(14,124,158,0.6)]" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[12.5px] font-extrabold text-white font-sans tracking-wide leading-tight">ATTENTION STABILITY</span>
                        <span className="text-[10.5px] text-slate-200 font-sans font-semibold leading-normal mt-0.5">Focus persistence scale</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)] font-mono">Good</span>
                      <ChevronDown className="h-3.5 w-3.5 text-slate-300" />
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="flex items-center justify-between p-3 backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-t border-l border-cyanaccent/30 border-r border-b border-white/[0.05] rounded-xl shadow-[0_8px_32px_0_rgba(2,10,25,0.55)] transition-all duration-300 hover:border-cyanaccent/50 hover:bg-white/[0.1]">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-amber-500/20 text-amberaccent rounded-lg border border-amberaccent/35 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] shrink-0">
                        <Brain className="h-4 w-4 drop-shadow-[0_0_2px_rgba(184,134,11,0.6)]" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[12.5px] font-extrabold text-white font-sans tracking-wide leading-tight">COGNITIVE LOAD</span>
                        <span className="text-[10.5px] text-slate-200 font-sans font-semibold leading-normal mt-0.5">Heuristic task stress load</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 border border-amberaccent/40 px-2.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(184,134,11,0.3)] font-mono">Moderate</span>
                      <ChevronDown className="h-3.5 w-3.5 text-slate-300" />
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="flex items-center justify-between p-3 backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-t border-l border-cyanaccent/30 border-r border-b border-white/[0.05] rounded-xl shadow-[0_8px_32px_0_rgba(2,10,25,0.55)] transition-all duration-300 hover:border-cyanaccent/50 hover:bg-white/[0.1]">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-cyanaccent/20 text-cyanaccent rounded-lg border border-cyanaccent/35 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] shrink-0">
                        <Activity className="h-4 w-4 drop-shadow-[0_0_2px_rgba(14,124,158,0.6)]" />
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-[12.5px] font-extrabold text-white font-sans tracking-wide leading-tight">ENVIRONMENTAL FACTOR</span>
                        <span className="text-[10.5px] text-slate-200 font-sans font-semibold leading-normal mt-0.5">Contextual difficulty multiplier</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-[10px] font-bold text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.3)] font-mono">Low</span>
                      <ChevronDown className="h-3.5 w-3.5 text-slate-300" />
                    </div>
                  </div>

                </div>

                {/* Simulated output disclaimer locked strictly inside screen visual */}
                <div className="border-t border-white/[0.06] pt-3.5 text-center relative z-10">
                  <p className="text-[7.5px] uppercase tracking-widest text-slate-500 font-bold font-mono leading-normal">
                    SIMULATED CONCEPTUAL INTERFACE — 100% OFFLINE
                  </p>
                </div>

              </div>
            </div>
            
            {/* Highly Structured 5-Second Clarity & Concept Panel */}
            <div className="mt-6 bg-white border border-deepnavy/10 rounded-2xl p-5 shadow-sm text-left max-w-[340px]" id="mockup-clarity-panel">
              <span className="font-mono text-[9px] text-cyanaccent uppercase tracking-widest font-bold block mb-1">
                Concept Annotation
              </span>
              <h4 className="font-serif text-sm font-bold text-deepnavy mb-2">
                What is shown in this mockup?
              </h4>
              <p className="text-xs text-deepnavy/80 leading-relaxed font-sans mb-3">
                This is a <strong>speculative interface design</strong> for the proposed Astrateq Gadgets mobile application. It illustrates our core research objective:
              </p>
              
              <ul className="space-y-2 text-xs font-sans text-deepnavy/75 mb-3.5 border-t border-deepnavy/5 pt-3">
                <li className="flex items-start gap-1.5">
                  <span className="text-cyanaccent font-bold">•</span>
                  <span><strong>Proposed Score (81)</strong>: An estimate of cognitive alertness based on subjective habit inputs.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyanaccent font-bold">•</span>
                  <span><strong>100% Offline Heuristics</strong>: Runs entirely local to your phone. No physical cameras or vehicle telemetry.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-cyanaccent font-bold">•</span>
                  <span><strong>The 60s Simulation</strong>: The tool on this site allows you to generate your own simulated results and explore this concept today.</span>
                </li>
              </ul>

              <div className="bg-cyanaccent/5 border border-cyanaccent/15 rounded-lg p-2.5 text-[10px] text-deepnavy/80 font-sans">
                <strong>Platform Goal:</strong> We are validating whether enough interest exists for this privacy-first model before committing engineering resources to build it.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
