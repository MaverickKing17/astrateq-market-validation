/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { UserCheck, ShieldCheck, Mail } from "lucide-react";

export default function AfterSimulation() {
  return (
    <section className="bg-pearl py-16 px-6 border-b border-deepnavy/10" id="what-happens-after">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl border border-deepnavy/10 p-8 md:p-12 relative overflow-hidden shadow-md">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-amberaccent/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="max-w-3xl relative">
            <span className="font-mono text-xs text-amberaccent uppercase tracking-widest font-bold">
              Next Steps
            </span>
            <h2 className="font-serif text-3xl text-deepnavy font-bold mt-2 mb-8">
              What happens after your simulation
            </h2>

            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex gap-4" id="after-step-1">
                <div className="p-2 bg-amberaccent/10 rounded-lg h-fit text-amberaccent shrink-0">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-deepnavy font-bold">Receive your profile</h4>
                  <p className="text-sm text-deepnavy/70 font-sans">
                    Your answers instantly translate into a simulated score report. No delays, no email gates required for baseline results.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4" id="after-step-2">
                <div className="p-2 bg-amberaccent/10 rounded-lg h-fit text-amberaccent shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-deepnavy font-bold">Learn about the Research Cohort</h4>
                  <p className="text-sm text-deepnavy/70 font-sans">
                    Read the detailed research priorities for our privacy-first on-device software explore initiative.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4" id="after-step-3">
                <div className="p-2 bg-amberaccent/10 rounded-lg h-fit text-amberaccent shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-deepnavy font-bold">Choose whether to join</h4>
                  <p className="text-sm text-deepnavy/70 font-sans">
                    Opt-in to get your custom unique referral code. This grants status badges on our validation ledger completely free, with no obligation.
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
