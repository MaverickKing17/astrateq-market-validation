/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { ChevronDown, HelpCircle, Search, Filter, MessageSquare, Info } from "lucide-react";
import { FAQS } from "../data";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Get unique categories
  const categories = useMemo(() => {
    const list = new Set<string>();
    FAQS.forEach((item) => {
      if (item.category) list.add(item.category);
    });
    return ["All", ...Array.from(list)];
  }, []);

  // Filtered FAQs
  const filteredFAQS = useMemo(() => {
    return FAQS.filter((item) => {
      const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section className="bg-pearl py-24 px-6 border-b border-deepnavy/10" id="faq">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-cyanaccent/10 border border-cyanaccent/20 rounded-full mb-4 text-cyanaccent">
            <HelpCircle className="h-4 w-4" />
            <span className="text-[10px] font-mono font-black uppercase tracking-widest">
              Research Inquiry Registry
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-deepnavy font-black tracking-tight" id="faq-section-title">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-deepnavy/70 mt-4 leading-relaxed font-sans max-w-2xl mx-auto">
            Get transparent, academic-level answers to your questions regarding our privacy sandboxing, mathematical simulation algorithms, and the active participant cohort.
          </p>
        </div>

        {/* Search & Categories Bar */}
        <div className="bg-white rounded-3xl border border-deepnavy/10 p-6 md:p-8 shadow-sm mb-10 space-y-6" id="faq-filters-container">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            {/* Search Input */}
            <div className="relative md:col-span-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-deepnavy/40" />
              <input
                type="text"
                placeholder="Search research questions or topics..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setOpenIndex(null); // Reset accordions on search
                }}
                className="w-full bg-slate-50 border border-deepnavy/10 hover:border-deepnavy/20 focus:border-cyanaccent focus:ring-1 focus:ring-cyanaccent rounded-xl pl-12 pr-4 py-3 text-sm text-deepnavy placeholder:text-deepnavy/45 outline-none transition-all"
                id="faq-search-input"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono font-bold text-deepnavy/40 hover:text-cyanaccent bg-slate-200/50 hover:bg-slate-200 px-2 py-0.5 rounded"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Label */}
            <div className="md:col-span-6 flex items-center md:justify-end gap-2 text-xs font-mono font-bold text-deepnavy/50">
              <Filter className="h-4 w-4 text-cyanaccent" />
              <span>FILTER BY TOPIC:</span>
            </div>
          </div>

          {/* Categories Horizontal Scroller */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-deepnavy/5" id="faq-categories">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setOpenIndex(null); // Reset accordions
                  }}
                  className={`text-xs font-sans px-4 py-2 rounded-xl transition-all cursor-pointer font-semibold ${
                    isSelected
                      ? "bg-cyanaccent text-white shadow-sm"
                      : "bg-slate-100 text-deepnavy/70 hover:bg-slate-200/70"
                  }`}
                  id={`faq-cat-btn-${category.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Accordions List */}
        <div className="space-y-4" id="faq-accordions">
          {filteredFAQS.length > 0 ? (
            filteredFAQS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md ${
                    isOpen ? "border-cyanaccent ring-1 ring-cyanaccent/20" : "border-deepnavy/10"
                  }`}
                  id={`faq-item-${index}`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50/50 transition-colors focus:outline-none cursor-pointer group"
                    id={`faq-btn-${index}`}
                    aria-expanded={isOpen}
                  >
                    <div className="flex gap-4 items-start pr-4">
                      <span className="inline-block mt-1 font-mono text-xs text-cyanaccent font-black bg-cyanaccent/5 px-2 py-1 rounded-md uppercase shrink-0">
                        {item.category || "General"}
                      </span>
                      <span className="font-serif font-black text-base md:text-lg text-deepnavy group-hover:text-cyanaccent transition-colors leading-snug">
                        {item.question}
                      </span>
                    </div>
                    <div className={`p-2 rounded-xl transition-all shrink-0 ${isOpen ? "bg-cyanaccent text-white" : "bg-slate-100 text-deepnavy/50"}`}>
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`} 
                      />
                    </div>
                  </button>
                  
                  {/* Accordion Panel Content */}
                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[300px] border-t border-deepnavy/5" : "max-h-0"
                    }`}
                    id={`faq-panel-${index}`}
                  >
                    <div className="p-6 text-sm md:text-base text-deepnavy/80 font-sans leading-relaxed bg-[#FAF9F6]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-16 bg-white border border-deepnavy/10 rounded-2xl p-8" id="faq-empty-state">
              <HelpCircle className="h-10 w-10 text-deepnavy/30 mx-auto mb-4" />
              <h4 className="font-serif text-lg font-bold text-deepnavy">No research questions match your query</h4>
              <p className="text-xs text-deepnavy/60 font-sans mt-2">
                Try checking another category or adjusting your search keyword (e.g., "privacy", "cohort", "edge").
              </p>
            </div>
          )}
        </div>

        {/* Trust Bottom Notice */}
        <div className="mt-12 bg-white/50 border border-deepnavy/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-xs font-sans text-deepnavy/70" id="faq-help-notice">
          <Info className="h-6 w-6 text-cyanaccent shrink-0" />
          <p className="leading-relaxed">
            Have a research inquiry not answered in our registry? We provide transparent updates and respond to cohort participant feedback directly via quarterly cohort findings reports.
          </p>
        </div>

      </div>
    </section>
  );
}
