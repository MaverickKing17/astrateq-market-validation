/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldAlert, ShieldCheck, Cpu, Clock, Smartphone, ChevronRight } from "lucide-react";

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
            Help Astrateq explore whether a privacy-first driver awareness concept should exist. 
            Complete a short simulation to see your Driver Awareness Score, Fatigue Risk Profile, 
            and eligibility to join our Research Cohort.
          </p>

          <div className="space-y-4">
            <button
              onClick={onStartSimulation}
              className="group relative flex items-center justify-center gap-2 bg-cyanaccent hover:bg-cyanaccent/90 text-white font-medium text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto cursor-pointer"
              id="hero-cta-btn"
            >
              Start Driver Awareness Simulation
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

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
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[340px]" id="phone-mockup-wrapper">
            {/* Phone Outer Shadow Accent */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-cyanaccent/20 to-amberaccent/20 rounded-[50px] blur-xl opacity-80" />
            
            {/* Phone Hardware Case */}
            <div className="relative w-full aspect-[9/19] bg-slate-950 border-[10px] border-slate-900 rounded-[48px] shadow-2xl overflow-hidden flex flex-col p-1">
              
              {/* Dynamic Island / Speaker notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-black rounded-full z-30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-900/60 ml-auto mr-4" />
              </div>

              {/* Screen Content - Dark UI Representing App State */}
              <div className="flex-1 bg-[#0B1525] rounded-[38px] overflow-hidden flex flex-col pt-7 px-5 pb-5 text-slate-100 select-none">
                
                {/* Mock App Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/60">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-cyanaccent" />
                    <span className="font-serif text-xs font-bold tracking-tight text-white">Astrateq <span className="text-[8px] uppercase tracking-wider font-sans font-medium text-cyanaccent">Driver</span></span>
                  </div>
                  <div className="flex flex-col gap-0.5 items-end">
                    <div className="w-3.5 h-0.5 bg-slate-400 rounded-full" />
                    <div className="w-3.5 h-0.5 bg-slate-400 rounded-full" />
                  </div>
                </div>

                {/* Score Circular Dial Section */}
                <div className="flex-1 flex flex-col items-center justify-center py-6">
                  <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase mb-2">
                    Your Driver Awareness Score
                  </span>
                  
                  {/* Gauge Ring Visual */}
                  <div className="relative w-40 h-40 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      {/* Trail path */}
                      <circle cx="80" cy="80" r="70" stroke="#1E293B" strokeWidth="8" fill="transparent" />
                      {/* Active path */}
                      <circle 
                        cx="80" cy="80" r="70" 
                        stroke="url(#cyan-gradient)" 
                        strokeWidth="8" 
                        strokeDasharray="440" 
                        strokeDashoffset="84" /* (1 - 0.81) * 440 */
                        strokeLinecap="round" 
                        fill="transparent" 
                      />
                      <defs>
                        <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0E7C9E" />
                          <stop offset="100%" stopColor="#10B981" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    {/* Inner Content */}
                    <div className="text-center">
                      <span className="block font-serif text-5xl font-black text-white leading-none">81</span>
                      <span className="inline-block mt-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                        Good
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-300 text-center mt-3 max-w-[180px] font-sans">
                    Keep it up. Stay consistent.
                  </p>
                </div>

                {/* Simulated Metrics Column */}
                <div className="space-y-2 pb-4">
                  <div className="flex items-center justify-between p-2.5 bg-slate-900/50 rounded-xl border border-slate-800/40">
                    <span className="text-xs font-medium text-slate-400">Fatigue Risk</span>
                    <span className="text-xs font-bold text-emerald-400">Low</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-900/50 rounded-xl border border-slate-800/40">
                    <span className="text-xs font-medium text-slate-400">Attention Stability</span>
                    <span className="text-xs font-bold text-emerald-400">Good</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-900/50 rounded-xl border border-slate-800/40">
                    <span className="text-xs font-medium text-slate-400">Cognitive Load</span>
                    <span className="text-xs font-bold text-amberaccent">Moderate</span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-900/50 rounded-xl border border-slate-800/40">
                    <span className="text-xs font-medium text-slate-400">Environmental Complexity</span>
                    <span className="text-xs font-bold text-emerald-400">Low</span>
                  </div>
                </div>

                {/* Simulated output disclaimer locked strictly inside screen visual */}
                <div className="border-t border-slate-800/60 pt-3 text-center">
                  <p className="text-[8px] uppercase tracking-widest text-slate-500 font-semibold font-mono leading-normal">
                    Simulated Output — Conceptual Behavioral Model, Not Real-World Measurement
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
