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
      
      {/* ---------------- SECTION 3: What this simulation does ---------------- */}
      <section className="max-w-7xl mx-auto px-6" id="what-simulation-does">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs text-cyanaccent uppercase tracking-widest font-bold">
            Methodology
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-deepnavy font-bold mt-2">
            What this simulation does
          </h2>
          <p className="text-deepnavy/70 mt-3 font-sans">
            Astrateq leverages structured research responses to explore driver focus, habits, and situational stressors. Here is how the mock feedback loop operates:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Input */}
          <div className="bg-white border border-deepnavy/10 rounded-2xl p-8 hover:border-cyanaccent/30 transition-all shadow-sm" id="sim-does-card-1">
            <div className="p-3 bg-cyanaccent/10 w-fit rounded-xl mb-6">
              <ClipboardList className="h-6 w-6 text-cyanaccent" />
            </div>
            <h3 className="font-serif text-xl text-deepnavy font-bold mb-3">1. You Answer Questions</h3>
            <p className="text-sm text-deepnavy/80 leading-relaxed font-sans">
              Provide response details on typical commute lengths, focus levels, fatigue triggers, and winter driving conditions.
            </p>
          </div>

          {/* Card 2: Analysis */}
          <div className="bg-white border border-deepnavy/10 rounded-2xl p-8 hover:border-cyanaccent/30 transition-all shadow-sm" id="sim-does-card-2">
            <div className="p-3 bg-cyanaccent/10 w-fit rounded-xl mb-6">
              <Cpu className="h-6 w-6 text-cyanaccent" />
            </div>
            <h3 className="font-serif text-xl text-deepnavy font-bold mb-3">2. We Run a Simulation</h3>
            <p className="text-sm text-deepnavy/80 leading-relaxed font-sans">
              Our conceptual model evaluates behavioral and temporal variables to simulate driver readiness profiles offline.
            </p>
          </div>

          {/* Card 3: Output */}
          <div className="bg-white border border-deepnavy/10 rounded-2xl p-8 hover:border-cyanaccent/30 transition-all shadow-sm" id="sim-does-card-3">
            <div className="p-3 bg-cyanaccent/10 w-fit rounded-xl mb-6">
              <BarChart3 className="h-6 w-6 text-cyanaccent" />
            </div>
            <h3 className="font-serif text-xl text-deepnavy font-bold mb-3">3. You Get Insights</h3>
            <p className="text-sm text-deepnavy/80 leading-relaxed font-sans">
              Review a simulated score report representing cognitive load, tiredness risk tiers, and potential mitigation strategies.
            </p>
          </div>
        </div>

        {/* Mandatory simulation disclaimer line */}
        <div className="flex items-center gap-3 mt-8 p-4 bg-cyanaccent/5 border border-cyanaccent/10 rounded-xl justify-center text-center" id="sim-disclaimer-banner">
          <Info className="h-5 w-5 text-cyanaccent shrink-0" />
          <p className="text-xs font-sans text-deepnavy/80">
            Results are <strong className="text-cyanaccent">simulated for validation purposes</strong>, not a real-world measurement of driving ability.
          </p>
        </div>
      </section>

      {/* ---------------- SECTION 4: What you'll receive ---------------- */}
      <section className="max-w-7xl mx-auto px-6 border-t border-deepnavy/10 pt-24" id="what-you-receive">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs text-cyanaccent uppercase tracking-widest font-bold">
            Deliverables
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-deepnavy font-bold mt-2">
            What you'll receive
          </h2>
          <p className="text-deepnavy/70 mt-3 font-sans">
            By engaging with this conceptual model, you will unlock structured insights showing what our on-device edge application will yield:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Deliverable 1 */}
          <div className="bg-white border border-deepnavy/10 rounded-2xl p-8 hover:border-cyanaccent/30 transition-all shadow-sm" id="receive-card-1">
            <div className="p-3 bg-amberaccent/10 w-fit rounded-xl mb-6">
              <Activity className="h-6 w-6 text-amberaccent" />
            </div>
            <h3 className="font-serif text-xl text-deepnavy font-bold mb-3">Driver Awareness Score</h3>
            <p className="text-sm text-deepnavy/80 leading-relaxed font-sans">
              A hardcoded, simulated numerical representation mapping your inputs to attention readiness indicators.
            </p>
          </div>

          {/* Deliverable 2 */}
          <div className="bg-white border border-deepnavy/10 rounded-2xl p-8 hover:border-cyanaccent/30 transition-all shadow-sm" id="receive-card-2">
            <div className="p-3 bg-amberaccent/10 w-fit rounded-xl mb-6">
              <Sparkles className="h-6 w-6 text-amberaccent" />
            </div>
            <h3 className="font-serif text-xl text-deepnavy font-bold mb-3">Fatigue Risk Profile</h3>
            <p className="text-sm text-deepnavy/80 leading-relaxed font-sans">
              An assessment of fatigue levels, analyzing how specific winter, city, or night commutes influence drive safety.
            </p>
          </div>

          {/* Deliverable 3 */}
          <div className="bg-white border border-deepnavy/10 rounded-2xl p-8 hover:border-cyanaccent/30 transition-all shadow-sm" id="receive-card-3">
            <div className="p-3 bg-amberaccent/10 w-fit rounded-xl mb-6">
              <Award className="h-6 w-6 text-amberaccent" />
            </div>
            <h3 className="font-serif text-xl text-deepnavy font-bold mb-3">Research Cohort Eligibility</h3>
            <p className="text-sm text-deepnavy/80 leading-relaxed font-sans">
              The option to join our pre-launch Canadian validation panel to influence features, layouts, and priority studies.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 5: How it works ---------------- */}
      <section className="max-w-7xl mx-auto px-6 border-t border-deepnavy/10 pt-24" id="how-it-works">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-cyanaccent uppercase tracking-widest font-bold">
            Execution
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-deepnavy font-bold mt-2">
            How it works
          </h2>
          <p className="text-deepnavy/70 mt-3 font-sans">
            Participating in the Astrateq validation study is completely free, secure, and straightforward:
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12" id="how-it-works-flow">
          {/* Connector line for large screens */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-cyanaccent/30 via-amberaccent/30 to-cyanaccent/30 -z-10" />

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center space-y-4" id="work-step-1">
            <div className="h-12 w-12 rounded-full bg-cyanaccent text-white flex items-center justify-center font-bold text-lg shadow-md">
              1
            </div>
            <h3 className="font-serif text-lg text-deepnavy font-bold">Answer Questions</h3>
            <p className="text-sm text-deepnavy/70 max-w-xs font-sans">
              Takes about 60 seconds. Complete five multiple-choice questions assessing typical commutes and alertness.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center space-y-4" id="work-step-2">
            <div className="h-12 w-12 rounded-full bg-deepnavy text-white flex items-center justify-center font-bold text-lg shadow-md">
              2
            </div>
            <h3 className="font-serif text-lg text-deepnavy font-bold">Get Your Simulated Profile</h3>
            <p className="text-sm text-deepnavy/70 max-w-xs font-sans">
              Immediately review your simulated Driver Awareness Score, Fatigue Risk Profile, and attention insights.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center space-y-4" id="work-step-3">
            <div className="h-12 w-12 rounded-full bg-cyanaccent text-white flex items-center justify-center font-bold text-lg shadow-md">
              3
            </div>
            <h3 className="font-serif text-lg text-deepnavy font-bold">See Research Cohort Info</h3>
            <p className="text-sm text-deepnavy/70 max-w-xs font-sans">
              Learn about our Canadian pilot initiative, then optionally join the Cohort with no cost or obligation.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 6: What Astrateq is validating first ---------------- */}
      <section className="max-w-7xl mx-auto px-6 border-t border-deepnavy/10 pt-24" id="validation-goals">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-mono text-xs text-cyanaccent uppercase tracking-widest font-bold">
            Research Scope
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-deepnavy font-bold mt-2">
            What Astrateq is validating first
          </h2>
          <p className="text-deepnavy/70 mt-3 font-sans">
            This pre-launch instrument gathers driver intent signals around three speculative research themes:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white border border-deepnavy/5 rounded-2xl p-8 shadow-sm flex flex-col justify-between" id="val-card-1">
            <div>
              <div className="h-2 w-12 bg-cyanaccent rounded-full mb-6" />
              <h3 className="font-serif text-xl text-deepnavy font-bold mb-3">
                Can lightweight, on-device awareness detection be useful?
              </h3>
              <p className="text-sm text-deepnavy/70 leading-relaxed font-sans">
                We are exploring if meaningful, real-time driver alert models can be run purely inside standard consumer smartphones without utilizing heavy constant video feeds.
              </p>
            </div>
            <span className="text-xs font-mono text-deepnavy/40 uppercase tracking-widest mt-6 block">Theme 01 // Efficiency</span>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-deepnavy/5 rounded-2xl p-8 shadow-sm flex flex-col justify-between" id="val-card-2">
            <div>
              <div className="h-2 w-12 bg-amberaccent rounded-full mb-6" />
              <h3 className="font-serif text-xl text-deepnavy font-bold mb-3">
                Do Canadian driving conditions warrant a Canada-specific approach?
              </h3>
              <p className="text-sm text-deepnavy/70 leading-relaxed font-sans">
                From sub-zero winter commutes in Edmonton to massive traffic congestion corridors on the QEW, Canadian climates require a specific model built for high seasonal fatigue.
              </p>
            </div>
            <span className="text-xs font-mono text-deepnavy/40 uppercase tracking-widest mt-6 block">Theme 02 // Localization</span>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-deepnavy/5 rounded-2xl p-8 shadow-sm flex flex-col justify-between" id="val-card-3">
            <div>
              <div className="h-2 w-12 bg-cyanaccent rounded-full mb-6" />
              <h3 className="font-serif text-xl text-deepnavy font-bold mb-3">
                What would make this worth using day to day?
              </h3>
              <p className="text-sm text-deepnavy/70 leading-relaxed font-sans">
                We are collecting user expectations regarding alerts, stats frequency, and interface preferences to construct an application that serves the driver rather than distracts.
              </p>
            </div>
            <span className="text-xs font-mono text-deepnavy/40 uppercase tracking-widest mt-6 block">Theme 03 // Usability</span>
          </div>
        </div>
      </section>

    </div>
  );
}
