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
            Since Astrateq is built from the ground up as a privacy-first research initiative, we are completely transparent about what information is processed in this validation funnel:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" id="data-handling-grid">
          
          {/* Column 1: What we collect */}
          <div className="bg-[#FAF9F6] border border-cyanaccent/20 rounded-2xl p-8" id="collect-box">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-cyanaccent/10 text-cyanaccent rounded-lg">
                <Check className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl text-deepnavy font-bold">What we collect</h3>
            </div>
            
            <ul className="space-y-4 font-sans text-sm text-deepnavy/80">
              <li className="flex items-start gap-3">
                <span className="text-cyanaccent font-bold mt-0.5">•</span>
                <div>
                  <strong className="text-deepnavy block">Simulation Answers</strong>
                  We store your multiple-choice selections in local storage and batch-aggregate the responses to understand user demographics and habits.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyanaccent font-bold mt-0.5">•</span>
                <div>
                  <strong className="text-deepnavy block">Optional Email Address</strong>
                  Only if you choose to join the Research Cohort. This is used solely to contact you about exploratory pilot updates.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyanaccent font-bold mt-0.5">•</span>
                <div>
                  <strong className="text-deepnavy block">Referral Action Tags</strong>
                  A randomly generated alphanumeric code string (e.g. ASTQ-XXXXXX) containing no connection to real personal parameters.
                </div>
              </li>
            </ul>
          </div>

          {/* Column 2: What we don't collect */}
          <div className="bg-[#FAF9F6] border border-red-500/10 rounded-2xl p-8" id="dont-collect-box">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-500/10 text-red-600 rounded-lg">
                <X className="h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl text-deepnavy font-bold">What we do NOT collect</h3>
            </div>
            
            <ul className="space-y-4 font-sans text-sm text-deepnavy/80">
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <div>
                  <strong className="text-deepnavy block">Real Driving Data & Telemetry</strong>
                  We never collect, track, or capture live speed, acceleration profiles, steering angles, or braking activities.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <div>
                  <strong className="text-deepnavy block">Location & GPS Histories</strong>
                  We do not ask for, read, or stream GPS coordinates, destination addresses, or maps routing logs.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <div>
                  <strong className="text-deepnavy block">Vehicle Identifiers (VIN)</strong>
                  Our concept remains fully hardware-agnostic and does not associate with your specific vehicle identifier or license numbers.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 font-bold mt-0.5">•</span>
                <div>
                  <strong className="text-deepnavy block">Insurance Syncing or Shares</strong>
                  Zero data is shared, sold, or synced with commercial auto insurance companies, licensing bureaus, or external trackers.
                </div>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 p-5 bg-deepnavy/[0.02] border border-deepnavy/5 rounded-xl text-center max-w-4xl mx-auto">
          <p className="text-xs text-deepnavy/60 font-sans">
            Astrateq's compliance standards respect CASL (Canada's Anti-Spam Legislation) and PIPEDA guidelines. 
            All sharing is strictly user-initiated. No data is harvested invisibly.
          </p>
        </div>

      </div>
    </section>
  );
}
