/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Milestone, Snowflake, Moon, TrafficCone, ShieldCheck, HelpCircle } from "lucide-react";
import { CANADIAN_REALITIES, APPROACHES } from "../data";

export default function ComparisonSection() {
  return (
    <div className="bg-pearl space-y-24 py-16 border-t border-deepnavy/10">
      
      {/* ---------------- SECTION 9: Built around Canadian driving realities ---------------- */}
      <section className="max-w-7xl mx-auto px-6 animate-fade-in" id="canadian-realities">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full mb-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-red-700">
              National Context
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl text-deepnavy font-bold">
            Built around Canadian driving realities
          </h2>
          <p className="text-deepnavy/70 mt-3 font-sans">
            Canadian roads demand specialized attention models. We base our exploration on the actual environmental, geographic, and seasonal patterns experienced across Canada:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CANADIAN_REALITIES.map((reality, idx) => {
            // Pick corresponding icon
            let IconComponent = Milestone;
            if (reality.icon === "Snowflake") IconComponent = Snowflake;
            if (reality.icon === "Moon") IconComponent = Moon;
            if (reality.icon === "TrafficCone") IconComponent = TrafficCone;

            return (
              <div 
                key={idx} 
                className="bg-white border border-deepnavy/10 rounded-2xl p-6 hover:border-cyanaccent/30 transition-all shadow-sm flex flex-col justify-between"
                id={`reality-card-${idx}`}
              >
                <div>
                  <div className="p-3 bg-cyanaccent/10 w-fit rounded-xl mb-6 text-cyanaccent">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg text-deepnavy font-bold mb-2">{reality.title}</h3>
                  <p className="text-xs text-deepnavy/80 leading-relaxed font-sans">{reality.description}</p>
                </div>
                <div className="border-t border-deepnavy/5 pt-3 mt-4 text-[10px] font-mono text-cyanaccent font-semibold uppercase">
                  Canada localized
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------------- SECTION 9: Different approaches to improving driver awareness ---------------- */}
      <section className="max-w-7xl mx-auto px-6 border-t border-deepnavy/10 pt-24" id="approaches">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs text-cyanaccent uppercase tracking-widest font-bold">
            Philosophy comparison
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-deepnavy font-bold mt-2">
            Different approaches to improving driver awareness
          </h2>
          <p className="text-deepnavy/70 mt-3 font-sans">
            How does our conceptual edge-based software model contrast with general alternative categories of driver attention tracking?
          </p>
        </div>

        {/* Comparison Table / Cards for desktop & mobile */}
        <div className="overflow-x-auto border border-deepnavy/10 rounded-2xl bg-white shadow-sm" id="approaches-table-wrapper">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-deepnavy/5 border-b border-deepnavy/10">
                <th className="p-4 text-xs font-mono text-deepnavy uppercase tracking-wider font-bold">Approach</th>
                <th className="p-4 text-xs font-mono text-deepnavy uppercase tracking-wider font-bold">Data Transmission</th>
                <th className="p-4 text-xs font-mono text-deepnavy uppercase tracking-wider font-bold">Hardware Requirement</th>
                <th className="p-4 text-xs font-mono text-deepnavy uppercase tracking-wider font-bold">Privacy Standing</th>
                <th className="p-4 text-xs font-mono text-deepnavy uppercase tracking-wider font-bold">Insurance Security</th>
              </tr>
            </thead>
            <tbody>
              {APPROACHES.map((approach, index) => (
                <tr 
                  key={index}
                  className={`border-b border-deepnavy/5 last:border-0 transition-colors ${
                    approach.astrateq 
                      ? "bg-cyanaccent/5 hover:bg-cyanaccent/10 font-medium" 
                      : "hover:bg-deepnavy/5"
                  }`}
                  id={`approach-row-${index}`}
                >
                  <td className="p-4 flex items-center gap-2">
                    {approach.astrateq && <ShieldCheck className="h-4 w-4 text-cyanaccent shrink-0" />}
                    <span className={`text-sm ${approach.astrateq ? "font-bold text-cyanaccent" : "text-deepnavy font-semibold"}`}>
                      {approach.name}
                    </span>
                  </td>
                  <td className="p-4 text-xs text-deepnavy/80 font-sans">{approach.dataTransmission}</td>
                  <td className="p-4 text-xs text-deepnavy/80 font-sans">{approach.hardware}</td>
                  <td className="p-4 text-xs text-deepnavy/80 font-sans">{approach.privacy}</td>
                  <td className="p-4 text-xs text-deepnavy/80 font-sans">{approach.insurance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-xs text-deepnavy/50 font-sans mt-4 italic">
          *Alternative approaches represent generalized categories. Astrateq Gadgets represents an exploratory software concept currently undergoing market research.
        </p>
      </section>

    </div>
  );
}
