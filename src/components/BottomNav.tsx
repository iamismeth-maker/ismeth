import React from 'react';
import { NavTab } from '../types';
import { cyberAudio } from '../utils/audio';

interface BottomNavProps {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs: { id: NavTab; label: string; icon: string }[] = [
    { id: 'overview', label: 'Overview', icon: 'dashboard' },
    { id: 'expertise', label: 'Expertise', icon: 'shield' },
    { id: 'projects', label: 'Projects', icon: 'terminal' },
    { id: 'contact', label: 'Contact', icon: 'alternate_email' }
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 pb-safe bg-[#0b1326]/90 backdrop-blur-xl border-t border-[#222a3d] shadow-[0_-2px_12px_rgba(0,0,0,0.4)]"
      data-active-classes="text-primary font-semibold"
    >
      <div className="max-w-md mx-auto flex items-center justify-around h-16 px-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                cyberAudio.playBlip(isActive ? 600 : 750);
                onTabChange(tab.id);
              }}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] transition-colors ${
                isActive
                  ? 'text-[#4edea3] font-semibold'
                  : 'text-[#bbcabf] hover:text-[#dae2fd]'
              }`}
            >
              <div className="relative">
                <span className="material-symbols-outlined text-[22px]">
                  {tab.icon}
                </span>
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4edea3] shadow-[0_0_6px_#4edea3]" />
                )}
              </div>
              <span className="font-label-caps text-[11px] mt-0.5 tracking-wider">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
