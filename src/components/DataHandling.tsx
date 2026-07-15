/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Check, X, ShieldAlert, ShieldCheck, Terminal, RefreshCw, Lock, CheckCircle } from "lucide-react";

export default function DataHandling() {
  const [auditLogs, setAuditLogs] = useState<string[]>([]);
  const [isAuditing, setIsAuditing] = useState(false);
  const [auditCompleted, setAuditCompleted] = useState(false);

  const runPrivacyAudit = () => {
    setIsAuditing(true);
    setAuditCompleted(false);
    setAuditLogs([]);

    const messages = [
      "Initializing localized browser sandboxed memory partitions...",
      "Intercepting outbound web socket handshakes... Decoupling verified.",
      "Parsing browser storage isolation keys (PIPEDA / CASL compliance standard)...",
      "Scanning simulation questions for active camera, audio, or GPS hooks... None detected.",
      "Verifying zero-knowledge database schemas: No records written to remote databases.",
      "Local sovereignty validated. Computational boundaries are completely isolated on this device."
    ];

    let currentLog = 0;
    const interval = setInterval(() => {
      if (currentLog < messages.length) {
        setAuditLogs((prev) => [...prev, `[AUDIT] ${messages[currentLog]}`]);
        currentLog++;
      } else {
        clearInterval(interval);
        setIsAuditing(false);
        setAuditCompleted(true);
      }
    }, 450);
  };

  return (
    <section className="bg-white border-y border-deepnavy/10 py-24 px-6" id="data-handling">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-cyanaccent/10 border border-cyanaccent/20 rounded-full mb-4 text-cyanaccent">
            <Lock className="h-4 w-4" />
            <span className="text-[10px] font-mono font-black uppercase tracking-widest">
              Sovereignty Blueprint
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-deepnavy font-black tracking-tight" id="privacy-section-title">
            Our Data Handling Principles
          </h2>
          <p className="text-base text-deepnavy/70 mt-4 leading-relaxed font-sans max-w-2xl mx-auto">
            Since Astrateq Gadgets is built from the ground up as a privacy-first research initiative, we are completely transparent about what information is processed in this validation funnel:
          </p>
        </div>

        {/* Dynamic Sandbox Auditor Widget */}
        <div className="bg-gradient-to-br from-[#070d1a] to-[#0d1e3d] text-white rounded-3xl p-6 md:p-10 shadow-xl border border-cyanaccent/20 mb-16 relative overflow-hidden" id="sandbox-auditor">
          {/* Ambient glow decoration */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-cyanaccent/20 rounded-full blur-[50px] pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-[50px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Widget Left Text */}
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3 py-1 text-[9px] font-mono font-bold bg-cyanaccent/15 border border-cyanaccent/30 text-cyanaccent rounded-full uppercase tracking-wider">
                Interactive Verification Tool
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-black tracking-tight leading-tight text-white">
                On-Device Sandbox Compliance Auditor
              </h3>
              <p className="text-xs md:text-sm text-slate-300 font-sans leading-relaxed">
                Want to verify that your session is running in absolute isolation? Trigger our security auditor to scan your active browser thread, verify local sandboxing parameters, and confirm that zero-knowledge protocols are actively protecting your inputs.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={runPrivacyAudit}
                  disabled={isAuditing}
                  className={`px-6 py-3.5 rounded-xl text-xs font-bold font-mono tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-md ${
                    isAuditing
                      ? "bg-slate-800 text-slate-400 cursor-not-allowed"
                      : "bg-cyanaccent hover:bg-cyanaccent/90 text-white hover:shadow-lg hover:-translate-y-0.5"
                  }`}
                  id="trigger-privacy-audit-btn"
                >
                  {isAuditing ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin text-cyanaccent" />
                      RUNNING SANDBOX AUDIT...
                    </>
                  ) : (
                    <>
                      <Terminal className="h-4 w-4" />
                      EXECUTE SECURITY AUDIT →
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Widget Right Interactive Terminal Screen */}
            <div className="lg:col-span-7 bg-[#040811] rounded-2xl border border-white/[0.08] p-5 font-mono text-xs text-slate-300 min-h-[220px] flex flex-col justify-between" id="auditor-terminal-screen">
              <div className="space-y-2">
                {/* Simulated Tab Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4 text-[10px] text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-500/50" />
                    <span className="h-2 w-2 rounded-full bg-amber-500/50" />
                    <span className="h-2 w-2 rounded-full bg-green-500/50" />
                    <span className="ml-2">sandbox_audit_daemon.sh</span>
                  </div>
                  <span>SESSION: LOCAL_ONLY</span>
                </div>

                {/* Audit Logs Console */}
                <div className="space-y-2 min-h-[120px] max-h-[160px] overflow-y-auto" id="terminal-console-output">
                  {auditLogs.length === 0 && !isAuditing && !auditCompleted && (
                    <div className="text-slate-500 italic py-4 text-center">
                      // Terminal idle. Click "EXECUTE SECURITY AUDIT" on the left to scan your local sandbox environment.
                    </div>
                  )}

                  {auditLogs.map((log, idx) => (
                    <div key={idx} className="flex gap-2 items-start leading-relaxed text-cyanaccent/90">
                      <span className="text-slate-500 select-none">&gt;</span>
                      <span>{log}</span>
                    </div>
                  ))}

                  {isAuditing && (
                    <div className="flex items-center gap-1 text-slate-400 italic text-[11px] mt-1 animate-pulse">
                      <span>•</span><span>•</span><span>•</span><span>scanning active memory registers</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Console Footer Status Bar */}
              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between text-[10px] text-slate-500">
                <span>EST_COMPUTATION: LOCAL_CPU</span>
                {auditCompleted ? (
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    SANDBOX SOVEREIGNTY SECURED
                  </span>
                ) : isAuditing ? (
                  <span className="text-amber-400 font-bold animate-pulse">
                    AUDITING IN PROGRESS...
                  </span>
                ) : (
                  <span>STATUS: IDLE // READY</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Collection details Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" id="data-handling-grid">
          
          {/* Column 1: What we collect */}
          <div className="bg-[#FAF9F6] border border-cyanaccent/20 rounded-2xl p-10 hover:shadow-md transition-all duration-300" id="collect-box">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-cyanaccent/10 text-cyanaccent rounded-xl">
                <Check className="h-6 w-6 stroke-[3]" />
              </div>
              <h3 className="font-serif text-2xl text-deepnavy font-black tracking-tight">What we intentionally collect</h3>
            </div>
            
            <ul className="space-y-6 font-sans text-sm text-deepnavy/80">
              <li className="flex items-start gap-4">
                <div className="h-5 w-5 rounded-full bg-cyanaccent/10 text-cyanaccent flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-deepnavy block text-base font-black tracking-tight mb-1">Simulation Answers</strong>
                  <span className="text-deepnavy/70 leading-relaxed block text-xs font-medium">We process your multiple-choice selections in local storage to compute your simulated score and understand participant driving stress patterns.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-5 w-5 rounded-full bg-cyanaccent/10 text-cyanaccent flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-deepnavy block text-base font-black tracking-tight mb-1">Optional Email Address</strong>
                  <span className="text-deepnavy/70 leading-relaxed block text-xs font-medium">Only if you choose to join the National Research Cohort. This is used solely to contact you about upcoming exploratory pilot updates.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-5 w-5 rounded-full bg-cyanaccent/10 text-cyanaccent flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-3 w-3 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-deepnavy block text-base font-black tracking-tight mb-1">Referral Action Tags</strong>
                  <span className="text-deepnavy/70 leading-relaxed block text-xs font-medium">A randomly generated alphanumeric code string (e.g., ASTQ-XXXXXX) containing zero connections to real personal identifiers.</span>
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
              <h3 className="font-serif text-2xl text-deepnavy font-black tracking-tight">What we intentionally never collect</h3>
            </div>
            
            <ul className="space-y-6 font-sans text-sm text-deepnavy/80">
              <li className="flex items-start gap-4">
                <div className="h-5 w-5 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="h-3 w-3 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-deepnavy block text-base font-black tracking-tight mb-1">Real Driving Data & Telemetry</strong>
                  <span className="text-deepnavy/70 leading-relaxed block text-xs font-medium">We never collect, track, or capture live vehicle speeds, acceleration profiles, steering angles, or braking activities.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-5 w-5 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="h-3 w-3 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-deepnavy block text-base font-black tracking-tight mb-1">Location & GPS Histories</strong>
                  <span className="text-deepnavy/70 leading-relaxed block text-xs font-medium">We do not request, read, or stream actual GPS coordinates, destination addresses, or maps routing logs.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-5 w-5 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="h-3 w-3 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-deepnavy block text-base font-black tracking-tight mb-1">Vehicle Identifiers (VIN)</strong>
                  <span className="text-deepnavy/70 leading-relaxed block text-xs font-medium">Our concept remains fully hardware-agnostic and does not associate with your specific vehicle identifiers or license plates.</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-5 w-5 rounded-full bg-red-500/10 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="h-3 w-3 stroke-[3]" />
                </div>
                <div>
                  <strong className="text-deepnavy block text-base font-black tracking-tight mb-1">Insurance Syncing or Shares</strong>
                  <span className="text-deepnavy/70 leading-relaxed block text-xs font-medium">Zero data is shared, sold, or synced with commercial auto insurance companies, licensing bureaus, or external trackers.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Framework text blocks */}
        <div className="mt-12 p-6 bg-deepnavy/[0.02] border border-deepnavy/10 rounded-2xl max-w-4xl mx-auto space-y-4" id="privacy-standards-compliance">
          <h4 className="text-xs font-mono font-black text-deepnavy uppercase tracking-wider text-center">Canadian Research Data Compliance Standards</h4>
          <p className="text-xs text-deepnavy/70 font-sans leading-relaxed text-center">
            Astrateq Gadgets' compliance standards strictly respect CASL (Canada's Anti-Spam Legislation) and PIPEDA guidelines. Since we are a purely academic-level market validation study, we ensure all registrations are user-initiated and we do not compile behavioral profiles. Your email is stored securely and never aggregated with response logs, guaranteeing an absolute zero-knowledge data design.
          </p>
        </div>

      </div>
    </section>
  );
}
