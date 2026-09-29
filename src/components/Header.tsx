import React from 'react';
import { ANALYST_INFO } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';

interface HeaderProps {
  onOpenTerminal: () => void;
  onOpenPgp: () => void;
  isDesktopWorkstation: boolean;
  onToggleWorkstation: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenTerminal,
  onOpenPgp,
  isDesktopWorkstation,
  onToggleWorkstation,
  soundEnabled,
  onToggleSound
}) => {
  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-[#0b1326]/85 backdrop-blur-xl border-b border-[#222a3d]/80 shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
      <div className="max-w-6xl mx-auto h-16 px-4 md:px-6 flex items-center justify-between gap-2">
        {/* Left: Logo & Status matching screenshot */}
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            alt="Cyber Sentinel Shield Logo"
            className="h-8 w-auto object-contain flex-shrink-0"
            src={ANALYST_INFO.logoUrl}
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1">
              <span className="font-headline-sm text-base md:text-lg font-bold tracking-tight text-[#dae2fd] truncate">
                {ANALYST_INFO.handle}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-pulse shadow-[0_0_8px_rgba(78,222,163,0.8)]"></span>
              <span className="font-label-caps text-[10px] md:text-[11px] text-[#4edea3] font-semibold tracking-wider uppercase">
                SYSTEM DEFENSE ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* Right: Quick actions & Profile avatar matching screenshot */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Quick Terminal Trigger Button */}
          <button
            onClick={() => {
              cyberAudio.playBlip(720);
              onOpenTerminal();
            }}
            title="Open Interactive Cyber Terminal"
            className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#171f33] hover:bg-[#222a3d] border border-[#3c4a42] text-[#dae2fd] hover:text-[#4edea3] transition-colors text-xs font-mono"
          >
            <span className="text-[#4edea3] font-bold">&gt;_</span>
            <span className="hidden md:inline font-semibold">Terminal</span>
          </button>

          {/* Sound FX Toggle */}
          <button
            onClick={() => {
              onToggleSound();
              if (!soundEnabled) cyberAudio.playSuccess();
            }}
            title={soundEnabled ? 'Mute Cyber Audio FX' : 'Enable Cyber Audio FX'}
            className="w-8 h-8 rounded-lg bg-[#171f33] hover:bg-[#222a3d] border border-[#222a3d] text-[#bbcabf] hover:text-[#dae2fd] flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">
              {soundEnabled ? 'volume_up' : 'volume_off'}
            </span>
          </button>

          {/* Viewport Width Mode Switcher (Visible on desktop screens >= 1024px) */}
          <button
            onClick={() => {
              cyberAudio.playBlip();
              onToggleWorkstation();
            }}
            title={isDesktopWorkstation ? 'Switch to Mobile Device Frame View' : 'Switch to Expanded Workstation View'}
            className="hidden lg:flex items-center gap-1 px-2.5 py-1 rounded bg-[#171f33] hover:bg-[#222a3d] border border-[#222a3d] text-[#bbcabf] hover:text-[#4edea3] text-xs font-mono transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">
              {isDesktopWorkstation ? 'smartphone' : 'desktop_windows'}
            </span>
            <span>{isDesktopWorkstation ? 'Device' : 'Workstation'}</span>
          </button>

          {/* Profile Avatar with primary ring matching screenshot */}
          <button
            onClick={() => {
              cyberAudio.playBlip();
              onOpenPgp();
            }}
            title="View PGP Cryptographic Credentials"
            className="relative focus:outline-none"
          >
            <img
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover ring-1 ring-[#4edea3]/60 hover:ring-[#4edea3] transition-all cursor-pointer"
              src={ANALYST_INFO.avatarUrl}
              referrerPolicy="no-referrer"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#4edea3] border border-[#0b1326]"></span>
          </button>
        </div>
      </div>
    </header>
  );
};
