/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldCheck, Heart, AlertCircle, FileText } from "lucide-react";

interface FooterAndCTAProps {
  onStartSimulation: () => void;
}

export default function FooterAndCTA({ onStartSimulation }: FooterAndCTAProps) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-pearl text-deepnavy font-sans">
      
      {/* ---------------- SECTION 13: Bottom CTA ---------------- */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-deepnavy/10" id="bottom-cta">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-deepnavy">
            Help shape the future of driver awareness research in Canada.
          </h2>
          <p className="text-deepnavy/70 text-sm max-w-xl mx-auto">
            We're inviting early participants to help validate an entirely new approach to understanding driver awareness. Join the research cohort by completing the 60-second simulation.
          </p>
          
          <div className="pt-2">
            <button
              onClick={onStartSimulation}
              className="bg-cyanaccent hover:bg-cyanaccent/90 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2"
              id="bottom-cta-btn"
            >
              Start Driver Awareness Simulation
            </button>
          </div>

          {/* Small trust row */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-semibold text-deepnavy/50" id="bottom-trust-row">
            <span>No payment required</span>
            <span className="h-1.5 w-1.5 bg-deepnavy/20 rounded-full" />
            <span>Privacy-first</span>
            <span className="h-1.5 w-1.5 bg-deepnavy/20 rounded-full" />
            <button 
              onClick={() => handleScrollTo("data-handling")} 
              className="text-cyanaccent hover:underline font-bold cursor-pointer"
              id="bottom-data-notice-btn"
            >
              Data & Usage Notice
            </button>
          </div>
        </div>
      </section>

      {/* ---------------- SECTION 14: Footer ---------------- */}
      <footer className="bg-white border-t border-deepnavy/10 pt-16 pb-12 px-6" id="footer">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-deepnavy/10">
          
          {/* Column 1: Brand & Blurb */}
          <div className="md:col-span-5 space-y-4">
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center cursor-pointer"
              id="footer-logo"
            >
              <img 
                src="https://i.ibb.co/JwX5p0gG/Astrateq.png" 
                alt="Astrateq Gadgets Logo" 
                className="h-10 w-auto object-contain" 
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-xs text-deepnavy/70 leading-relaxed max-w-sm">
              Exploring whether Canadian drivers value a local, on-device awareness model that operates with zero cloud surveillance or external tracking. Built entirely by Canadian technology researchers.
            </p>
            <div className="text-[10px] text-deepnavy/40 font-mono">
              INITIATIVE ID: bc23eb44-7b98-4a62-bb5a-8fc0c9a2474c
            </div>
          </div>

          {/* Column 2: Privacy & Trust column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-deepnavy/40">Privacy & Trust</h4>
            <ul className="space-y-2 text-xs text-deepnavy/80">
              <li className="flex items-start gap-1.5">
                <span className="text-cyanaccent">•</span>
                <span>Complete offline sandboxing — no GPS coordinates or route data are ever written to remote servers.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-cyanaccent">•</span>
                <span>Zero links to insurance — completely decoupled from any third-party premium profiling databases.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-cyanaccent">•</span>
                <span>No required hardware — designed as a software-only edge component to preserve flexibility.</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-deepnavy/40">Resources</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button onClick={() => handleScrollTo("hero")} className="text-deepnavy/70 hover:text-cyanaccent transition-colors text-left cursor-pointer">
                  About Astrateq Gadgets
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("how-it-works")} className="text-deepnavy/70 hover:text-cyanaccent transition-colors text-left cursor-pointer">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("data-handling")} className="text-deepnavy/70 hover:text-cyanaccent transition-colors text-left cursor-pointer">
                  Privacy Approach
                </button>
              </li>
              <li>
                <button onClick={() => handleScrollTo("faq")} className="text-deepnavy/70 hover:text-cyanaccent transition-colors text-left cursor-pointer">
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower footer row */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-deepnavy/50">
          
          {/* Copyright Line */}
          <div>
            &copy; {new Date().getFullYear()} Astrateq Gadgets. All rights reserved. Made in Canada for nationwide validation.
          </div>

          {/* Mandatory disclaimer paragraph stating clearly this is an independent pre-launch market validation site */}
          <div className="md:max-w-xl text-right md:text-right text-[10px] leading-relaxed font-sans" id="footer-legal-disclaimer">
            <span className="font-semibold block text-deepnavy/70 mb-1">Legal Disclaimer Notice</span>
            Astrateq Gadgets is an independent pre-launch market validation site. No physical product exists yet, there is no hardware, no software is for sale, and participation is completely free. Information provided is for research purposes only.
          </div>

        </div>
      </footer>

    </div>
  );
}
