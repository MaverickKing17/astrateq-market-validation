/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Check, X, ShieldAlert } from "lucide-react";

export default function DataHandling() {
  return (
    <section className="bg-white border-y border-deepnavy/10 py-20 px-6" id="data-handling">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-cyanaccent uppercase tracking-widest font-bold">
            Transparency
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-deepnavy font-bold mt-2">
            Our Data Handling Principles
          </h2>
          <p className="text-deepnavy/70 mt-3 font-sans">
            Since Astrateq Gadgets is built from the ground up as a privacy-first research initiative, we are completely transparent about what information is processed in this validation funnel:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" id="data-handling-grid">
          
          {/* Column 1: What we collect */}
          <div className="bg-[#FAF9F6] border border-cyanaccent/20 rounded-2xl p-10 hover:shadow-md transition-all duration-300" id="collect-box">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-cyanaccent/10 text-cyanaccent rounded-xl">
                <Check className="h-6 w-6 stroke-[3]" />
              </div>
              <h3 className="font-serif text-2xl text-deepnavy font-bold">What we intentionally collect</h3>
            </div>
            
            <ul className="space-y-6 font-sans text-sm text-deepnavy/80">
              <li className="flex items-start gap-4">
                <div className="h-5 w-5 rounded-full bg-cyanaccent/10 text-cyanaccent flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-deepnavy block text-base font-semibold mb-1">Simulation Answers</strong>
                  <span className="text-deepnavy/70 leading-relaxed block text-xs">We process your multiple-choice selections in local storage to compute your simulated score and understand participant driving stress patterns.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-5 w-5 rounded-full bg-cyanaccent/10 text-cyanaccent flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-deepnavy block text-base font-semibold mb-1">Optional Email Address</strong>
                  <span className="text-deepnavy/70 leading-relaxed block text-xs">Only if you choose to join the National Research Cohort. This is used solely to contact you about upcoming exploratory pilot updates.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-5 w-5 rounded-full bg-cyanaccent/10 text-cyanaccent flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-deepnavy block text-base font-semibold mb-1">Referral Action Tags</strong>
                  <span className="text-deepnavy/70 leading-relaxed block text-xs">A randomly generated alphanumeric code string (e.g., ASTQ-XXXXXX) containing zero connections to real personal identifiers.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 2: What we don't collect */}
          <div className="bg-[#FAF9F6] border border-red-500/10 rounded-2xl p-10 hover:shadow-md transition-all duration-300" id="dont-collect-box">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-red-500/10 text-red-600 rounded-xl">
                <X className="h-6 w-6 stroke-[3]" />
              </div>
              <h3 className="font-serif text-2xl text-deepnavy font-bold">What we intentionally never collect</h3>
            </div>
            
            <ul className="space-y-6 font-sans text-sm text-deepnavy/80">
              <li className="flex items-start gap-4">
                <div className="h-5 w-5 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="h-3 w-3 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-deepnavy block text-base font-semibold mb-1">Real Driving Data & Telemetry</strong>
                  <span className="text-deepnavy/70 leading-relaxed block text-xs">We never collect, track, or capture live vehicle speeds, acceleration profiles, steering angles, or braking activities.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-5 w-5 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="h-3 w-3 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-deepnavy block text-base font-semibold mb-1">Location & GPS Histories</strong>
                  <span className="text-deepnavy/70 leading-relaxed block text-xs">We do not request, read, or stream actual GPS coordinates, destination addresses, or maps routing logs.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-5 w-5 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="h-3 w-3 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-deepnavy block text-base font-semibold mb-1">Vehicle Identifiers (VIN)</strong>
                  <span className="text-deepnavy/70 leading-relaxed block text-xs">Our concept remains fully hardware-agnostic and does not associate with your specific vehicle identifiers or license plates.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-5 w-5 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="h-3 w-3 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-deepnavy block text-base font-semibold mb-1">Insurance Syncing or Shares</strong>
                  <span className="text-deepnavy/70 leading-relaxed block text-xs">Zero data is shared, sold, or synced with commercial auto insurance companies, licensing bureaus, or external trackers.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 p-5 bg-deepnavy/[0.02] border border-deepnavy/5 rounded-xl text-center max-w-4xl mx-auto">
          <p className="text-xs text-deepnavy/60 font-sans">
            Astrateq Gadgets' compliance standards respect CASL (Canada's Anti-Spam Legislation) and PIPEDA guidelines. 
            All sharing is strictly user-initiated. No data is harvested invisibly.
          </p>
        </div>

      </div>
    </section>
  );
}
