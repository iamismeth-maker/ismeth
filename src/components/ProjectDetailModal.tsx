import React from 'react';
import { CaseStudy } from '../types';
import { cyberAudio } from '../utils/audio';

interface ProjectDetailModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ caseStudy, onClose }) => {
  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-[#0b1326] border border-[#3c4a42] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-4 bg-[#171f33] border-b border-[#222a3d] flex items-start justify-between gap-3">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#4cd7f6] font-semibold">
                {caseStudy.code}
              </span>
              <span className="px-2 py-0.5 rounded bg-[#4edea3]/10 text-[#4edea3] font-mono text-[11px] font-semibold">
                {caseStudy.badge}
              </span>
            </div>
            <h3 className="font-headline-md text-lg font-bold text-[#dae2fd]">
              {caseStudy.title}
            </h3>
          </div>

          <button
            onClick={() => {
              cyberAudio.playBlip(500);
              onClose();
            }}
            className="p-1 rounded text-[#86948a] hover:text-[#dae2fd] hover:bg-[#222a3d] transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 overflow-y-auto space-y-4 text-sm cyber-scrollbar">
          {/* Key Outcome Banner */}
          <div className="flex items-center gap-3 p-3.5 rounded-lg bg-[#131b2e] border border-[#222a3d]">
            <div className="w-9 h-9 rounded-full bg-[#4edea3]/20 flex items-center justify-center text-[#4edea3] flex-shrink-0">
              <span className="material-symbols-outlined text-[20px]">
                {caseStudy.outcomeIcon}
              </span>
            </div>
            <div>
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#4edea3] font-bold block">
                {caseStudy.outcomeType}
              </span>
              <span className="text-sm font-semibold text-[#dae2fd]">
                {caseStudy.outcomeValue}
              </span>
            </div>
          </div>

          {/* Background */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#4cd7f6] font-bold">
              Background &amp; Threat Context
            </h4>
            <p className="text-xs sm:text-sm text-[#bbcabf] leading-relaxed">
              {caseStudy.fullWriteup.background}
            </p>
          </div>

          {/* Attack Vector */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#ffb4ab] font-bold">
              Attack Surface &amp; Vulnerability Path
            </h4>
            <p className="text-xs sm:text-sm text-[#bbcabf] leading-relaxed">
              {caseStudy.fullWriteup.attackVector}
            </p>
          </div>

          {/* Technical Execution */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#4edea3] font-bold">
              Technical Execution &amp; Testing Methodology
            </h4>
            <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-[#dae2fd]">
              {caseStudy.fullWriteup.technicalExecution.map((step, idx) => (
                <li key={idx} className="leading-relaxed">
                  {step}
                </li>
              ))}
            </ul>
          </div>

          {/* Vulnerabilities Remediated */}
          <div className="space-y-1.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#00dce6] font-bold">
              Patched Findings
            </h4>
            <div className="grid grid-cols-1 gap-1.5">
              {caseStudy.vulnerabilitiesPatched.map((vuln, idx) => (
                <div
                  key={idx}
                  className="px-2.5 py-1.5 rounded bg-[#131b2e] border border-[#222a3d] text-xs font-mono text-[#dae2fd] flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[#4edea3] text-[16px]">
                    check_circle
                  </span>
                  <span>{vuln}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Artifacts */}
          <div className="space-y-1.5 pt-1">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#bbcabf] font-bold">
              Forensic &amp; Audit Toolchain
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {caseStudy.toolsUsed.map((tool) => (
                <span
                  key={tool}
                  className="px-2 py-0.5 rounded bg-[#171f33] border border-[#3c4a42] text-xs font-mono text-[#4cd7f6]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#171f33] border-t border-[#222a3d] flex items-center justify-end">
          <button
            onClick={() => {
              cyberAudio.playBlip(500);
              onClose();
            }}
            className="px-4 py-2 rounded-lg bg-[#222a3d] hover:bg-[#31394d] text-xs font-mono text-[#dae2fd] font-semibold transition-colors"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};
