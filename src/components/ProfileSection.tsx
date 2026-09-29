import React from 'react';
import { ANALYST_INFO, STATS, CORE_FOCUS_AREAS } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';

interface ProfileSectionProps {
  onFocusClick?: (area: string) => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ onFocusClick }) => {
  return (
    <section className="flex flex-col w-full space-y-4 pt-2">
      {/* Header with cyber prefix */}
      <div className="flex flex-col space-y-1">
        <span className="font-label-caps text-[11px] text-[#00dce6] tracking-widest uppercase font-semibold">
          // 01. PROFILE
        </span>
        <h2 className="font-headline-lg-mobile text-[26px] font-bold text-[#dae2fd]">
          About Me
        </h2>
      </div>

      {/* Profile Narrative */}
      <div className="p-4 rounded-xl bg-[#171f33] border border-[#222a3d] space-y-3 shadow-md">
        <p className="font-body-md text-[15px] text-[#bbcabf] leading-relaxed">
          {ANALYST_INFO.profileNarrative1}
        </p>
        <p className="font-body-md text-[15px] text-[#bbcabf] leading-relaxed">
          My work bridges technical analysis with national security compliance, leveraging frameworks from <span className="text-[#dae2fd] font-medium underline decoration-[#4edea3]/40 underline-offset-2">BGD e-GOV CIRT</span> and international standards to build proactive defense mechanisms.
        </p>
      </div>

      {/* Quick Stats Cards (High-impact monospace metric grid) */}
      <div className="grid grid-cols-2 gap-2.5 pt-1">
        {/* Stat 1: 40+ Security Audits */}
        <div className="p-4 rounded-xl bg-[#131b2e] border border-[#222a3d] shadow-sm flex flex-col justify-between hover:border-[#4edea3]/40 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="material-symbols-outlined text-[#4edea3] text-[24px]">
              {STATS[0].icon}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3]/60"></span>
          </div>
          <div>
            <div className="font-code-md text-[28px] font-bold text-[#4edea3] leading-tight font-mono tabular-nums">
              {STATS[0].value}
            </div>
            <p className="font-body-sm text-[13px] text-[#bbcabf] mt-1">
              {STATS[0].label}
            </p>
          </div>
        </div>

        {/* Stat 2: 150+ Vulnerabilities */}
        <div className="p-4 rounded-xl bg-[#131b2e] border border-[#222a3d] shadow-sm flex flex-col justify-between hover:border-[#4cd7f6]/40 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <span className="material-symbols-outlined text-[#4cd7f6] text-[24px]">
              {STATS[1].icon}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4cd7f6]/60"></span>
          </div>
          <div>
            <div className="font-code-md text-[28px] font-bold text-[#4cd7f6] leading-tight font-mono tabular-nums">
              {STATS[1].value}
            </div>
            <p className="font-body-sm text-[13px] text-[#bbcabf] mt-1">
              {STATS[1].label}
            </p>
          </div>
        </div>

        {/* Stat 3: Primary Core Focus */}
        <div className="col-span-2 p-4 rounded-xl bg-[#131b2e] border border-[#222a3d] shadow-sm flex flex-col space-y-1">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#00dce6] text-[20px]">
              radar
            </span>
            <span className="font-label-caps text-[11px] uppercase text-[#00dce6] font-semibold tracking-wider font-mono">
              Primary Core Focus
            </span>
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {CORE_FOCUS_AREAS.map((focus) => (
              <button
                key={focus}
                onClick={() => {
                  cyberAudio.playBlip(750);
                  if (onFocusClick) onFocusClick(focus);
                }}
                className="px-2.5 py-1 rounded bg-[#171f33] hover:bg-[#222a3d] border border-[#222a3d] hover:border-[#4edea3]/40 text-[#dae2fd] font-code-md text-[12px] font-medium font-mono transition-colors cursor-pointer"
              >
                {focus}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
