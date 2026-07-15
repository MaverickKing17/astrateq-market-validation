/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InfoSections from "./components/InfoSections";
import SimulationFlow from "./components/SimulationFlow";
import AfterSimulation from "./components/AfterSimulation";
import ComparisonSection from "./components/ComparisonSection";
import DataHandling from "./components/DataHandling";
import FAQSection from "./components/FAQSection";
import FooterAndCTA from "./components/FooterAndCTA";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollToSimulation = () => {
    const element = document.getElementById("live-simulation");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-pearl text-deepnavy selection:bg-cyanaccent/20 selection:text-cyanaccent flex flex-col font-sans antialiased">
      {/* 1. Header — logo, simple nav, primary CTA */}
      <Header onStartSimulation={handleScrollToSimulation} />

      {/* 2. Hero — headline, subhead, primary CTA, trust-badge row, maple leaf, app mockup */}
      <Hero onStartSimulation={handleScrollToSimulation} />

      {/* 3, 4, 5, 6. Info Sections (What simulation does, What you'll receive, How it works, Validation themes) */}
      <InfoSections />

      {/* 7. Live simulation — functional multi-question flow & results (score 81) & Research Cohort signup form & native referral system */}
      <SimulationFlow />

      {/* 8. What happens after your simulation — standalone section following simulation */}
      <AfterSimulation />

      {/* 9, 10. Canadian driving realities & approaches table comparison */}
      <ComparisonSection />

      {/* 11. Data handling — transparency What We Collect vs What We Do Not Collect */}
      <DataHandling />

      {/* 12. FAQ — interactive accordion answering key validation queries */}
      <FAQSection />

      {/* 13. Bottom CTA — repeat primary CTA with a short closing line */}
      <FooterAndCTA onStartSimulation={handleScrollToSimulation} />

      {/* Floating Scroll to Top Button (Bright Blue Up Arrow) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-to-top"
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center justify-center border border-white/25 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Scroll to top"
            id="scroll-to-top-btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-6 w-6 stroke-[3]" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

