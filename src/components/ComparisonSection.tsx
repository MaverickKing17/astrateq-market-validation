/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Milestone, Snowflake, Moon, TrafficCone, ShieldCheck, HelpCircle } from "lucide-react";
import { CANADIAN_REALITIES, APPROACHES } from "../data";

export default function ComparisonSection() {
  return (
    <div className="bg-pearl space-y-24 py-16 border-t border-deepnavy/10">
      
      {/* ---------------- SECTION 9: Built around Canadian driving realities ---------------- */}
      <section className="max-w-7xl mx-auto px-6 animate-fade-in" id="canadian-realities">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full mb-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-700">
              National Context
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-deepnavy font-bold">
            Built around Canadian driving realities
          </h2>
          <p className="text-deepnavy/70 mt-3 font-sans">
            Canadian roads demand specialized attention models. We base our exploration on the actual environmental, geographic, and seasonal patterns experienced across Canada:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CANADIAN_REALITIES.map((reality, idx) => {
            // Pick corresponding icon
            let IconComponent = Milestone;
            if (reality.icon === "Snowflake") IconComponent = Snowflake;
            if (reality.icon === "Moon") IconComponent = Moon;
            if (reality.icon === "TrafficCone") IconComponent = TrafficCone;

            const isEven = idx % 2 === 0;

            return (
              <div 
                key={idx} 
                className={`border rounded-3xl p-6 hover:shadow-lg transition-all flex flex-col justify-between bg-gradient-to-br from-[#0B1526] to-[#12233F] border-[#20314d] ${
                  isEven 
                    ? "hover:border-cyanaccent/50" 
                    : "hover:border-amberaccent/50"
                }`}
                id={`reality-card-${idx}`}
              >
                <div>
                  <div className={`p-3.5 border w-fit rounded-2xl mb-6 ${
                    isEven 
                      ? "bg-cyan-950/40 border-cyan-800/40 text-cyan-400" 
                      : "bg-amber-950/40 border-amber-800/40 text-amber-400"
                  }`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg text-white font-black tracking-tight mb-2">{reality.title}</h3>
                  <p className="text-xs text-slate-200 leading-relaxed font-sans font-semibold">{reality.description}</p>
                </div>
                <div className={`border-t pt-3 mt-4 text-[10px] font-mono font-black uppercase tracking-wider ${
                  isEven ? "border-white/10 text-cyan-400" : "border-white/10 text-amber-400"
                }`}>
                  Canada localized
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- SECTION 10: Philosophical Comparison ---------------- */}
      <section className="max-w-7xl mx-auto px-6 border-t border-deepnavy/10 pt-24" id="philosophy-comparison">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-cyanaccent uppercase tracking-widest font-black block mb-2" id="philosophy-tag">
            Design Philosophy
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-deepnavy font-bold mt-2 tracking-tight" id="philosophy-heading">
            Contrasting Driver Awareness Philosophies
          </h2>
          <p className="text-base text-deepnavy/70 mt-4 leading-relaxed font-sans max-w-2xl mx-auto" id="philosophy-desc">
            How does our exploratory validation concept differ from conventional market models? We comparison-test the fundamental design pillars of our architecture against legacy industry approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch" id="philosophy-columns-container">
          {/* Left Column: Traditional Approach */}
          <div className="bg-gradient-to-br from-[#0B1526] to-[#12233F] border border-red-500/30 rounded-3xl p-8 hover:border-red-500/50 hover:shadow-lg transition-all flex flex-col justify-between" id="traditional-philosophy-card">
            <div>
              <div className="flex items-center gap-2 pb-4 border-b border-white/10 mb-6">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
                <h3 className="font-serif text-2xl font-black text-white">Traditional Approach</h3>
              </div>
              
              <ul className="space-y-5 font-sans text-sm">
                <li className="flex gap-3 items-start">
                  <div className="h-5.5 w-5.5 rounded-full bg-red-950/40 text-red-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-red-800/40">✕</div>
                  <div>
                    <strong className="text-white block font-black">Continuous tracking</strong>
                    <span className="text-slate-300 font-medium text-xs leading-relaxed">Constant stream of visual monitoring, sensor logs, and location metrics.</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="h-5.5 w-5.5 rounded-full bg-red-950/40 text-red-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-red-800/40">✕</div>
                  <div>
                    <strong className="text-white block font-black">Cloud-dependent storage</strong>
                    <span className="text-slate-300 font-medium text-xs leading-relaxed">Biometric face, eye, and route telemetry continuously synchronized to central cloud nodes.</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="h-5.5 w-5.5 rounded-full bg-red-950/40 text-red-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-red-800/40">✕</div>
                  <div>
                    <strong className="text-white block font-black">Third-party data monetization</strong>
                    <span className="text-slate-300 font-medium text-xs leading-relaxed">Integration of behavioral patterns into commercial telemetry and profiling systems.</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="h-5.5 w-5.5 rounded-full bg-red-950/40 text-red-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-red-800/40">✕</div>
                  <div>
                    <strong className="text-white block font-black">Hardware-locked requirements</strong>
                    <span className="text-slate-300 font-medium text-xs leading-relaxed">Mandatory hardware integration with proprietary cabin cameras and vehicle ports.</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 pt-4 border-t border-white/10 text-[10px] text-red-400 font-mono font-bold tracking-wider">
              PARADIGM: CENTRALIZED TRACKING
            </div>
          </div>

          {/* Right Column: Astrateq Concept */}
          <div className="bg-gradient-to-br from-[#0B1526] to-[#12233F] border border-[#20314d] hover:border-cyanaccent/50 hover:shadow-lg transition-all flex flex-col justify-between" id="astrateq-philosophy-card">
            <div>
              <div className="flex items-center gap-2 pb-4 border-b border-white/10 mb-6">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <h3 className="font-serif text-2xl font-black text-white">Astrateq Concept</h3>
              </div>

              <ul className="space-y-5 font-sans text-sm">
                <li className="flex gap-3 items-start">
                  <div className="h-5.5 w-5.5 rounded-full bg-cyan-950/40 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-cyan-800/40">✓</div>
                  <div>
                    <strong className="text-white block font-black">User-controlled simulation</strong>
                    <span className="text-slate-300 font-semibold text-xs leading-relaxed">Subjective, voluntary inputs that generate localized behavioral metrics on-demand.</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="h-5.5 w-5.5 rounded-full bg-cyan-950/40 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-cyan-800/40">✓</div>
                  <div>
                    <strong className="text-white block font-black">100% Offline processing</strong>
                    <span className="text-slate-300 font-semibold text-xs leading-relaxed">Complete computational sandboxing. No data leaves the user's mobile environment.</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="h-5.5 w-5.5 rounded-full bg-cyan-950/40 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-cyan-800/40">✓</div>
                  <div>
                    <strong className="text-white block font-black">Zero-knowledge data design</strong>
                    <span className="text-slate-300 font-semibold text-xs leading-relaxed">Absolute decoupling of driving logs from central databases, insurance companies, and advertisers.</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="h-5.5 w-5.5 rounded-full bg-cyan-950/40 text-cyan-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 border border-cyan-800/40">✓</div>
                  <div>
                    <strong className="text-white block font-black">Software-first validation model</strong>
                    <span className="text-slate-300 font-semibold text-xs leading-relaxed">Designed entirely around standard smartphone hardware to bypass expensive visual accessories.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-[10px] text-cyan-400 font-mono font-bold tracking-wider">
              PARADIGM: SOVEREIGN EDGE MODEL
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-deepnavy/50 font-sans mt-8 italic">
          *Astrateq represents a speculative pre-launch validation concept being evaluated for feasibility. This comparison is for research purposes only.
        </p>
      </section>

    </div>
  );
}
