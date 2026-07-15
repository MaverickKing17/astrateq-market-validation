/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { UserCheck, ShieldCheck, Cpu, Play } from "lucide-react";

export default function AfterSimulation() {
  return (
    <section className="bg-pearl py-16 px-6 border-b border-deepnavy/10" id="validation-roadmap">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0B1526] to-[#12233F] rounded-3xl border border-[#20314d] p-8 md:p-12 relative overflow-hidden shadow-lg">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyanaccent/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="max-w-4xl relative">
            <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-black block mb-2" id="roadmap-tag">
              The Validation Roadmap
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white font-bold mb-4 tracking-tight" id="roadmap-heading">
              Our Research Timeline & Milestones
            </h2>
            <p className="text-sm md:text-base text-slate-200 max-w-2xl font-sans mb-10 leading-relaxed" id="roadmap-description">
              Our research timeline is structured around transparent, non-commercial validation milestones. We are actively progressing through these structured phases to investigate privacy-first driving intelligence:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Step 1 */}
              <div className="flex gap-4 p-5 bg-[#12233F] rounded-2xl border border-cyan-400/40" id="roadmap-step-1">
                <div className="p-3 bg-cyan-400 text-slate-950 rounded-xl h-fit shrink-0 shadow-sm font-bold">
                  <span className="font-mono text-xs font-black">ST-1</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white font-black tracking-tight">Step 1: Concept Validation</h4>
                  <p className="text-xs text-cyan-400 font-semibold mt-1">Current Phase</p>
                  <p className="text-xs text-slate-200 font-sans mt-2 leading-relaxed">
                    We are collecting simulation feedback from Canadian drivers to gauge real-world interest in decentralized, offline-first safety concepts.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4 p-5 bg-[#09101c] rounded-2xl border border-[#20314d]" id="roadmap-step-2">
                <div className="p-3 bg-slate-800 text-slate-300 border border-slate-700 rounded-xl h-fit shrink-0 shadow-sm font-bold">
                  <span className="font-mono text-xs font-black">ST-2</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white font-black tracking-tight">Step 2: Simulation Analytics</h4>
                  <p className="text-xs text-slate-400 font-semibold mt-1">Analytical Aggregation</p>
                  <p className="text-xs text-slate-300 font-sans mt-2 leading-relaxed">
                    Aggregating anonymous driver attention data to construct realistic, localized environmental risk profiles and commuter baseline fatigue patterns.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4 p-5 bg-[#09101c] rounded-2xl border border-[#20314d]" id="roadmap-step-3">
                <div className="p-3 bg-slate-800 text-slate-300 border border-slate-700 rounded-xl h-fit shrink-0 shadow-sm font-bold">
                  <span className="font-mono text-xs font-black">ST-3</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white font-black tracking-tight">Step 3: Prototype Exploration</h4>
                  <p className="text-xs text-slate-400 font-semibold mt-1">Edge Framework R&D</p>
                  <p className="text-xs text-slate-300 font-sans mt-2 leading-relaxed">
                    Investigating low-overhead edge computing frameworks that run localized fatigue heuristic algorithms completely on consumer mobile phones with zero-cloud dependencies.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4 p-5 bg-[#09101c] rounded-2xl border border-[#20314d] md:col-span-1" id="roadmap-step-4">
                <div className="p-3 bg-slate-800 text-slate-300 border border-slate-700 rounded-xl h-fit shrink-0 shadow-sm font-bold">
                  <span className="font-mono text-xs font-black">ST-4</span>
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white font-black tracking-tight">Step 4: Pilot Program</h4>
                  <p className="text-xs text-slate-400 font-semibold mt-1">Localized Evaluation</p>
                  <p className="text-xs text-slate-300 font-sans mt-2 leading-relaxed">
                    Deploying early-stage test applications to a select group of registered research cohort members once initial validation metrics and offline reliability standards are met.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-cyan-950/40 border border-cyan-800/40 rounded-xl">
              <p className="text-xs font-sans text-slate-300 leading-relaxed font-medium">
                *Expectation Transparency: Astrateq Gadgets is in an exploratory pre-launch research stage. Participation is entirely free, strictly non-commercial, and focused on validating scientific hypotheses around offline driving attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
