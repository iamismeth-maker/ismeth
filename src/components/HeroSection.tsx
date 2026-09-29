import React from 'react';
import { ANALYST_INFO } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';

interface HeroSectionProps {
  onViewProjects: () => void;
  onContactMe: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onViewProjects,
  onContactMe
}) => {
  return (
    <section className="flex flex-col w-full pt-4">
      {/* Telemetry status chip */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#222a3d] border border-[#3c4a42]/50 w-fit mb-4 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-ping"></span>
        <span className="font-label-caps text-[11px] text-[#4edea3] tracking-wider uppercase font-semibold">
          CII DEFENSE ACTIVE // DHAKA NODE
        </span>
      </div>

      {/* Portrait Card with glowing cyber depth */}
      <div className="relative w-full rounded-2xl bg-[#131b2e] border border-[#222a3d] p-2 mb-6 shadow-xl overflow-hidden">
        {/* Glow ambient backdrops */}
        <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#4edea3]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-[#4cd7f6]/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative flex flex-col items-center">
          {/* Analyst Portrait */}
          <div className="relative w-full aspect-square max-w-[280px] rounded-xl overflow-hidden bg-[#2d3449] shadow-md border border-[#3c4a42]/40">
            <img
              alt="Tanvir Ahmed - Cybersecurity Analyst & Incident Response Specialist"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              src={ANALYST_INFO.avatarUrl}
              referrerPolicy="no-referrer"
            />
            {/* Glass overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1326] via-transparent to-transparent opacity-80" />

            {/* Live Telemetry Pill Overlaid */}
            <div className="absolute bottom-3 inset-x-3 flex items-center justify-between px-3 py-1.5 rounded-lg bg-[#171f33]/90 backdrop-blur-md border border-[#3c4a42]/60 shadow-md">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#4edea3] animate-pulse shadow-[0_0_6px_#4edea3]" />
                <span className="font-label-badge text-xs text-[#dae2fd] font-medium font-mono">
                  Dhaka, BD
                </span>
              </div>
              <span className="font-label-caps text-[11px] text-[#4edea3] uppercase tracking-wider font-semibold">
                Active Defense
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Headline & Subtitle */}
      <div className="flex flex-col space-y-2">
        <h1 className="font-headline-display-mobile text-[32px] sm:text-[36px] font-bold tracking-tight text-[#dae2fd] leading-[1.2]">
          Building Resilient <span className="text-[#4edea3]">Digital Defenses</span> in Bangladesh
        </h1>
        <p className="font-headline-sm text-base sm:text-lg text-[#4cd7f6] font-medium tracking-tight">
          {ANALYST_INFO.subheadline}
        </p>
        <p className="font-body-md text-[15px] text-[#bbcabf] leading-relaxed pt-1">
          {ANALYST_INFO.bio}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2.5 pt-4">
        <button
          onClick={() => {
            cyberAudio.playSuccess();
            onViewProjects();
          }}
          className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-lg bg-[#10b981] hover:bg-[#059669] text-[#003824] font-body-md font-bold tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_24px_rgba(16,185,129,0.4)] transition-all cursor-pointer active:scale-[0.99]"
        >
          <span className="material-symbols-outlined text-[20px]">terminal</span>
          <span>View Projects</span>
        </button>

        <button
          onClick={() => {
            cyberAudio.playBlip(700);
            onContactMe();
          }}
          className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-lg bg-[#222a3d] hover:bg-[#31394d] border border-[#3c4a42]/50 text-[#dae2fd] font-body-md font-semibold transition-colors shadow-sm cursor-pointer active:scale-[0.99]"
        >
          <span className="material-symbols-outlined text-[20px] text-[#00dce6]">
            lock_open
          </span>
          <span>Contact Me</span>
        </button>
      </div>
    </section>
  );
};
