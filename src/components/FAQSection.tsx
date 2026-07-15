/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "../data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-pearl py-20 px-6 border-b border-deepnavy/10" id="faq">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyanaccent/10 rounded-full mb-3 text-cyanaccent">
            <HelpCircle className="h-4 w-4" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider">
              Frequently Asked Questions
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-deepnavy font-bold">
            Got Questions? We have answers.
          </h2>
          <p className="text-deepnavy/70 mt-3 font-sans">
            Learn more about the scope, intent, and parameters of the Astrateq market-validation study.
          </p>
        </div>

        {/* Accordions List */}
        <div className="space-y-4" id="faq-accordions">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white border border-deepnavy/10 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
                id={`faq-item-${index}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left font-serif font-bold text-lg text-deepnavy hover:bg-deepnavy/[0.01] transition-colors focus:outline-none cursor-pointer"
                  id={`faq-btn-${index}`}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-cyanaccent transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`} 
                  />
                </button>
                
                {/* Accordion Panel Content */}
                <div 
                  className={`transition-all duration-200 overflow-hidden ${
                    isOpen ? "max-h-96 border-t border-deepnavy/5" : "max-h-0"
                  }`}
                  id={`faq-panel-${index}`}
                >
                  <div className="p-6 text-sm text-deepnavy/80 font-sans leading-relaxed bg-[#FAF9F6]">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
