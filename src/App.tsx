/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { NavTab, CaseStudy } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HeroSection } from './components/HeroSection';
import { ProfileSection } from './components/ProfileSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { TerminalModal } from './components/TerminalModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { PgpModal } from './components/PgpModal';
import { cyberAudio } from './utils/audio';

export default function App() {
  const [activeTab, setActiveTab] = useState<NavTab>('overview');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isPgpOpen, setIsPgpOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [isWorkstationView, setIsWorkstationView] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Scroll to section when tab changes
  const handleTabChange = (tab: NavTab) => {
    setActiveTab(tab);
    if (tab === 'overview') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(tab);
      if (el) {
        const yOffset = -70; // Header offset
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  // Sync scroll position with active tab (scroll spy)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      const contactEl = document.getElementById('contact');
      const projectsEl = document.getElementById('projects');
      const expertiseEl = document.getElementById('expertise');

      if (contactEl && scrollPos >= contactEl.offsetTop) {
        setActiveTab('contact');
      } else if (projectsEl && scrollPos >= projectsEl.offsetTop) {
        setActiveTab('projects');
      } else if (expertiseEl && scrollPos >= expertiseEl.offsetTop) {
        setActiveTab('expertise');
      } else {
        setActiveTab('overview');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    cyberAudio.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
  };

  return (
    <div className="min-h-screen bg-[#0b1326] text-[#dae2fd] font-body-md flex flex-col selection:bg-[#4edea3]/30 selection:text-[#4edea3]">
      {/* Top Fixed Header */}
      <Header
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenPgp={() => setIsPgpOpen(true)}
        isDesktopWorkstation={isWorkstationView}
        onToggleWorkstation={() => setIsWorkstationView(!isWorkstationView)}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Main Container Wrapper */}
      <div className="flex-1 flex justify-center w-full pt-16 pb-24">
        {/* Device frame container (Mobile phone simulation on desktop OR full-width workstation) */}
        <main
          className={`w-full transition-all duration-300 ${
            isWorkstationView
              ? 'max-w-5xl px-4 md:px-8 py-4 space-y-12'
              : 'max-w-[430px] px-margin-mobile space-y-space-xl'
          }`}
        >
          {/* Hero Section */}
          <HeroSection
            onViewProjects={() => handleTabChange('projects')}
            onContactMe={() => handleTabChange('contact')}
          />

          {/* Section 01: Profile */}
          <ProfileSection
            onFocusClick={(area) => {
              if (area === 'VAPT' || area === 'Threat Intelligence' || area === 'Incident Response') {
                handleTabChange('expertise');
              }
            }}
          />

          {/* Section 02: Competencies & Technical Expertise */}
          <ExpertiseSection
            onSelectCompetency={() => {
              setIsTerminalOpen(true);
            }}
          />

          {/* Section 03: Projects & Case Studies */}
          <ProjectsSection
            onSelectCaseStudy={(study) => setSelectedCaseStudy(study)}
          />

          {/* Section 04: Secure Transmission Contact */}
          <ContactSection onOpenPgp={() => setIsPgpOpen(true)} />
        </main>
      </div>

      {/* Fixed Bottom Navigation matching screenshot */}
      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Interactive Cyber Terminal Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* Interactive Case Study Deep-Dive Dossier Modal */}
      <ProjectDetailModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* PGP Public Key Credentials Modal */}
      <PgpModal
        isOpen={isPgpOpen}
        onClose={() => setIsPgpOpen(false)}
      />
    </div>
  );
}
