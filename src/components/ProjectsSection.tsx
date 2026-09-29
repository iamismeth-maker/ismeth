import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/portfolioData';
import { CaseStudy } from '../types';
import { cyberAudio } from '../utils/audio';

interface ProjectsSectionProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectCaseStudy }) => {
  const [filter, setFilter] = useState<'all' | 'financial' | 'intel' | 'infrastructure'>('all');

  const filteredStudies = CASE_STUDIES.filter((study) => {
    if (filter === 'all') return true;
    return study.category === filter;
  });

  return (
    <section className="flex flex-col w-full space-y-4 pt-2" id="projects">
      {/* Header */}
      <div className="flex flex-col space-y-1">
        <span className="font-label-caps text-[11px] text-[#4cd7f6] tracking-widest uppercase font-semibold">
          // 03. DEFENSE MISSIONS
        </span>
        <h2 className="font-headline-lg-mobile text-[26px] font-bold text-[#dae2fd]">
          Case Studies &amp; Projects
        </h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-[#131b2e] rounded-lg border border-[#222a3d] overflow-x-auto cyber-scrollbar">
        <button
          onClick={() => {
            cyberAudio.playBlip(650);
            setFilter('all');
          }}
          className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
            filter === 'all'
              ? 'bg-[#10b981] text-[#003824] font-bold shadow-sm'
              : 'text-[#bbcabf] hover:text-[#dae2fd]'
          }`}
        >
          All Missions
        </button>
        <button
          onClick={() => {
            cyberAudio.playBlip(700);
            setFilter('financial');
          }}
          className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
            filter === 'financial'
              ? 'bg-[#10b981] text-[#003824] font-bold shadow-sm'
              : 'text-[#bbcabf] hover:text-[#dae2fd]'
          }`}
        >
          Financial
        </button>
        <button
          onClick={() => {
            cyberAudio.playBlip(750);
            setFilter('intel');
          }}
          className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
            filter === 'intel'
              ? 'bg-[#10b981] text-[#003824] font-bold shadow-sm'
              : 'text-[#bbcabf] hover:text-[#dae2fd]'
          }`}
        >
          Threat Intel
        </button>
        <button
          onClick={() => {
            cyberAudio.playBlip(800);
            setFilter('infrastructure');
          }}
          className={`px-3 py-1.5 text-xs font-mono font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
            filter === 'infrastructure'
              ? 'bg-[#10b981] text-[#003824] font-bold shadow-sm'
              : 'text-[#bbcabf] hover:text-[#dae2fd]'
          }`}
        >
          CII Infra
        </button>
      </div>

      {/* Case Study Cards */}
      <div className="flex flex-col space-y-3">
        {filteredStudies.map((study) => (
          <div
            key={study.id}
            onClick={() => {
              cyberAudio.playBlip(820);
              onSelectCaseStudy(study);
            }}
            className="p-4 rounded-xl bg-[#171f33] border border-[#222a3d] shadow-md flex flex-col space-y-2.5 hover:border-[#4edea3]/40 transition-all cursor-pointer group hover:bg-[#1a2339]"
          >
            {/* Breadcrumb meta matching screenshot */}
            <div className="flex items-center justify-between pb-1">
              <span className="font-code-md text-[11px] text-[#4cd7f6] font-semibold font-mono">
                {study.code}
              </span>
              <span className="px-2 py-0.5 rounded bg-[#4edea3]/10 text-[#4edea3] font-label-badge text-[12px] font-semibold font-mono border border-[#4edea3]/20">
                {study.badge}
              </span>
            </div>

            <div className="flex items-start justify-between gap-2">
              <h3 className="font-headline-md text-base sm:text-lg font-bold text-[#dae2fd] group-hover:text-[#4edea3] transition-colors">
                {study.title}
              </h3>
              <span className="material-symbols-outlined text-[#86948a] group-hover:text-[#4edea3] text-[20px] transition-transform group-hover:translate-x-0.5">
                arrow_forward
              </span>
            </div>

            <p className="font-body-md text-[15px] text-[#bbcabf] leading-relaxed">
              {study.summary}
            </p>

            {/* Key Result Pill matching screenshot */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-[#131b2e] mt-1 border border-[#222a3d]/80">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  study.outcomeType === 'Hardened Outcome'
                    ? 'bg-[#4edea3]/20 text-[#4edea3]'
                    : study.outcomeType === 'Performance Impact'
                    ? 'bg-[#4cd7f6]/20 text-[#4cd7f6]'
                    : 'bg-[#00dce6]/20 text-[#00dce6]'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {study.outcomeIcon}
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <span
                  className={`font-label-caps text-[11px] uppercase font-bold font-mono ${
                    study.outcomeType === 'Hardened Outcome'
                      ? 'text-[#4edea3]'
                      : 'text-[#4cd7f6]'
                  }`}
                >
                  {study.outcomeType}
                </span>
                <span className="font-body-sm text-[13px] text-[#dae2fd] font-semibold truncate">
                  {study.outcomeValue}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
