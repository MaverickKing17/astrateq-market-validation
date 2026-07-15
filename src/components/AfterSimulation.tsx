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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {/* Step 1 */}
              <div className="flex gap-4" id="after-step-1">
                <div className="p-2 bg-amberaccent/10 rounded-lg h-fit text-amberaccent shrink-0">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-deepnavy font-bold">1. Immediate Score Diagnostics</h4>
                  <p className="text-xs text-deepnavy/70 font-sans mt-1">
                    Your answers instantly generate a simulated score report demonstrating baseline attention indicators. No email wall required.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4" id="after-step-2">
                <div className="p-2 bg-amberaccent/10 rounded-lg h-fit text-amberaccent shrink-0">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-deepnavy font-bold">2. Simulated Awareness Profile</h4>
                  <p className="text-xs text-deepnavy/70 font-sans mt-1">
                    Review a conceptual behavioral profile depicting high-risk driving environments and individual fatigue stress-triggers.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4" id="after-step-3">
                <div className="p-2 bg-amberaccent/10 rounded-lg h-fit text-amberaccent shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-deepnavy font-bold">3. Optional Research Updates</h4>
                  <p className="text-xs text-deepnavy/70 font-sans mt-1">
                    Elect to receive quarterly whitepapers and aggregated statistical insights detailing driver habits mapped in this Canadian study.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4" id="after-step-4">
                <div className="p-2 bg-amberaccent/10 rounded-lg h-fit text-amberaccent shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-deepnavy font-bold">4. Early Prototype Invitations</h4>
                  <p className="text-xs text-deepnavy/70 font-sans mt-1">
                    Cohort participants receive early invitations to download, test, and critique offline, on-device mobile software prototypes.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex gap-4 md:col-span-2" id="after-step-5">
                <div className="p-2 bg-amberaccent/10 rounded-lg h-fit text-amberaccent shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-deepnavy font-bold">5. Future Pilot Opportunities</h4>
                  <p className="text-xs text-deepnavy/70 font-sans mt-1">
                    When we transition to closed, localized physical field studies in targeted Canadian municipalities, Cohort members will be selected first.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-amberaccent/5 border border-amberaccent/10 rounded-xl">
              <p className="text-xs font-sans text-deepnavy/60 italic leading-relaxed">
                *Expectation Transparency: Astrateq Gadgets is in an exploratory pre-launch stage. No physical software packages or hardware devices currently exist. We commit to keeping our timelines realistic, transparent, and completely free of false marketing promises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
