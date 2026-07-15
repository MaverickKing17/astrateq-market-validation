/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldCheck } from "lucide-react";

interface HeaderProps {
  onStartSimulation: () => void;
}

export default function Header({ onStartSimulation }: HeaderProps) {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-pearl/90 backdrop-blur-md border-b border-deepnavy/10 px-6 py-4 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center cursor-pointer"
          id="header-logo"
        >
          <img 
            src="https://i.ibb.co/JwX5p0gG/Astrateq.png" 
            alt="Astrateq Gadgets Logo" 
            className="h-10 w-auto object-contain" 
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Simple Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-deepnavy/70">
          <button 
            onClick={() => handleScroll("how-it-works")} 
            className="hover:text-cyanaccent transition-colors cursor-pointer"
            id="nav-how-it-works"
          >
            How It Works
          </button>
          <button 
            onClick={() => handleScroll("what-you-receive")} 
            className="hover:text-cyanaccent transition-colors cursor-pointer"
            id="nav-what-you-receive"
          >
            What You'll Receive
          </button>
          <button 
            onClick={() => handleScroll("canadian-realities")} 
            className="hover:text-cyanaccent transition-colors cursor-pointer"
            id="nav-canadian-realities"
          >
            Why We're Exploring This
          </button>
          <button 
            onClick={() => handleScroll("data-handling")} 
            className="hover:text-cyanaccent transition-colors cursor-pointer"
            id="nav-privacy"
          >
            Privacy
          </button>
          <button 
            onClick={() => handleScroll("faq")} 
            className="hover:text-cyanaccent transition-colors cursor-pointer"
            id="nav-faq"
          >
            FAQ
          </button>
        </nav>

        {/* Primary Header CTA */}
        <button
          onClick={onStartSimulation}
          className="bg-cyanaccent hover:bg-cyanaccent/90 text-white font-medium text-sm px-5 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200"
          id="header-cta-btn"
        >
          Start Driver Awareness Simulation
        </button>
      </div>
    </header>
  );
}
