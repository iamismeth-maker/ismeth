import React, { useState } from 'react';
import { COMPETENCIES, FRAMEWORKS, SIMULATED_IOC_DATABASE } from '../data/portfolioData';
import { Competency } from '../types';
import { cyberAudio } from '../utils/audio';

interface ExpertiseSectionProps {
  onSelectCompetency?: (comp: Competency) => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ onSelectCompetency }) => {
  const [selectedFramework, setSelectedFramework] = useState<string | null>(null);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);

  // IOC Sandbox State
  const [iocInput, setIocInput] = useState('');
  const [iocResult, setIocResult] = useState<typeof SIMULATED_IOC_DATABASE[0] | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  const handleScanIoc = (targetToScan?: string) => {
    const query = (targetToScan || iocInput).trim();
    if (!query) return;

    cyberAudio.playBlip(550);
    setIsScanning(true);
    setIocResult(null);

    setTimeout(() => {
      const match = SIMULATED_IOC_DATABASE.find(
        (item) => item.target.toLowerCase() === query.toLowerCase()
      );

      if (match) {
        setIocResult(match);
      } else {
        // Dynamic simulated classification for custom user inputs
        const isIp = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(query);
        setIocResult({
          target: query,
          type: isIp ? 'IPv4 Address' : 'Domain / String',
          status: 'CLEAN',
          category: 'Neutral Telemetry Object',
          details: 'Queried through MISP Threat Feeds & BGD e-GOV CIRT Advisory databases. No active malicious indicators logged in Dhaka node telemetry.',
          confidence: '95%'
        });
      }
      setIsScanning(false);
      cyberAudio.playSuccess();
    }, 600);
  };

  const getCardIconColor = (variant: 'primary' | 'secondary' | 'tertiary') => {
    switch (variant) {
      case 'primary': return 'text-[#4edea3]';
      case 'secondary': return 'text-[#4cd7f6]';
      case 'tertiary': return 'text-[#00dce6]';
      default: return 'text-[#4edea3]';
    }
  };

  return (
    <section className="flex flex-col w-full space-y-4 pt-2" id="expertise">
      {/* Header */}
      <div className="flex flex-col space-y-1">
        <span className="font-label-caps text-[11px] text-[#4edea3] tracking-widest uppercase font-semibold">
          // 02. COMPETENCIES
        </span>
        <h2 className="font-headline-lg-mobile text-[26px] font-bold text-[#dae2fd]">
          Technical Expertise
        </h2>
      </div>

      {/* Security Framework Badges */}
      <div className="flex flex-wrap gap-2">
        {FRAMEWORKS.map((fw) => {
          const isSelected = selectedFramework === fw.name;
          return (
            <button
              key={fw.name}
              onClick={() => {
                cyberAudio.playBlip(700);
                setSelectedFramework(isSelected ? null : fw.name);
              }}
              className={`px-2.5 py-1 rounded-md text-[12px] font-mono font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-[#4edea3] text-[#003824] ring-1 ring-[#4edea3]'
                  : 'bg-[#222a3d] hover:bg-[#31394d] ' + fw.color
              }`}
            >
              {fw.name}
            </button>
          );
        })}
      </div>

      {/* Selected Framework Info Drawer if active */}
      {selectedFramework && (
        <div className="p-3.5 rounded-lg bg-[#171f33] border border-[#4edea3]/40 text-xs text-[#bbcabf] font-mono space-y-1 animate-fadeIn">
          <div className="flex items-center justify-between text-[#4edea3] font-bold">
            <span>[FRAMEWORK MAPPING] {selectedFramework}</span>
            <button
              onClick={() => setSelectedFramework(null)}
              className="text-[#86948a] hover:text-[#dae2fd]"
            >
              ✕
            </button>
          </div>
          <p className="text-xs text-[#dae2fd] font-sans">
            {selectedFramework === 'OWASP Top 10' && 'Standard testing methodology applied across web application security testing, API authorization flaw detection, and serverless architectures.'}
            {selectedFramework === 'MITRE ATT&CK' && 'Matrix used for threat hunting, adversary behavior emulation, and mapping APT tactics, techniques, and procedures against regional financial institutions.'}
            {selectedFramework === 'BGD e-GOV CIRT' && 'National security compliance baseline aligned with critical information infrastructure directives and incident reporting standards in Bangladesh.'}
            {selectedFramework === 'NIST CSF' && 'Core functions (Identify, Protect, Detect, Respond, Recover) structured for institutional cybersecurity governance and enterprise maturity.'}
          </p>
        </div>
      )}

      {/* 4 Skill Cards matching screenshot */}
      <div className="flex flex-col space-y-2.5">
        {COMPETENCIES.map((comp) => {
          const isExpanded = expandedCardId === comp.id;
          return (
            <div
              key={comp.id}
              className="p-4 rounded-xl bg-[#171f33] border border-[#222a3d] shadow-md flex flex-col space-y-2 hover:border-[#3c4a42] transition-colors"
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#222a3d] flex items-center justify-center flex-shrink-0">
                    <span className={`material-symbols-outlined text-[24px] ${getCardIconColor(comp.colorVariant)}`}>
                      {comp.icon}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-base sm:text-lg font-semibold text-[#dae2fd]">
                    {comp.title}
                  </h3>
                </div>

                <button
                  onClick={() => {
                    cyberAudio.playBlip();
                    setExpandedCardId(isExpanded ? null : comp.id);
                  }}
                  className="p-1 rounded text-[#bbcabf] hover:text-[#dae2fd] text-xs font-mono"
                  title={isExpanded ? 'Collapse details' : 'Expand full methodology'}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {isExpanded ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
              </div>

              {/* Description */}
              <p className="font-body-md text-[15px] text-[#bbcabf] pt-0.5 leading-relaxed">
                {comp.description}
              </p>

              {/* Tool Badges matching screenshot */}
              <div className="flex items-center gap-2 pt-1 flex-wrap">
                {comp.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2 py-0.5 rounded bg-[#060e20] text-[#dae2fd] font-label-caps text-[11px] font-mono border border-[#222a3d]/50"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Expandable Deep-Dive Details */}
              {isExpanded && (
                <div className="mt-3 pt-3 border-t border-[#222a3d] space-y-2.5 text-xs text-[#bbcabf] font-mono animate-fadeIn">
                  <div>
                    <span className="text-[#4edea3] font-bold block mb-1 uppercase tracking-wider">
                      Methodology & Attack Simulation:
                    </span>
                    <ul className="list-disc list-inside space-y-1 text-[#dae2fd] font-sans">
                      {comp.methodologies.map((m, idx) => (
                        <li key={idx}>{m}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[#4cd7f6] font-bold block mb-1 uppercase tracking-wider">
                      Verified Client Deliverables:
                    </span>
                    <ul className="list-disc list-inside space-y-1 text-[#dae2fd] font-sans">
                      {comp.deliverables.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  </div>

                  {onSelectCompetency && (
                    <button
                      onClick={() => onSelectCompetency(comp)}
                      className="w-full mt-2 py-1.5 px-3 rounded bg-[#222a3d] hover:bg-[#31394d] text-[#dae2fd] text-xs font-mono font-medium flex items-center justify-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-[16px] text-[#4edea3]">
                        terminal
                      </span>
                      <span>Launch Incident Simulation Brief</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Interactive Cyber Defense Sandbox: Threat Intelligence Triage */}
      <div className="p-4 rounded-xl bg-[#131b2e] border border-[#222a3d] shadow-sm space-y-3 mt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#00dce6] text-[20px]">
              hub
            </span>
            <span className="font-label-caps text-[11px] uppercase text-[#00dce6] font-semibold tracking-wider font-mono">
              Live IOC Triage Simulator
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#4edea3] bg-[#003824] px-2 py-0.5 rounded">
            NODE 01 ACTIVE
          </span>
        </div>

        <p className="text-xs text-[#bbcabf] leading-relaxed">
          Test simulated threat correlation against Bangladesh national indicators, ransomware C2 nodes, and MISP threat databases.
        </p>

        {/* Input & Scan Button */}
        <div className="flex gap-2">
          <input
            type="text"
            value={iocInput}
            onChange={(e) => setIocInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleScanIoc()}
            placeholder="e.g. 103.20.15.44 or invoice_march_cirt.exe"
            className="flex-1 px-3 py-2 rounded-lg bg-[#060e20] border border-[#222a3d] text-xs text-[#dae2fd] font-mono placeholder-[#86948a] focus:outline-none focus:border-[#4edea3]"
          />
          <button
            onClick={() => handleScanIoc()}
            disabled={isScanning}
            className="px-3 py-2 rounded-lg bg-[#10b981] hover:bg-[#059669] text-[#003824] font-bold text-xs font-mono flex items-center gap-1 cursor-pointer disabled:opacity-50"
          >
            {isScanning ? (
              <span className="animate-spin text-sm">⟳</span>
            ) : (
              <span className="material-symbols-outlined text-[16px]">radar</span>
            )}
            <span>{isScanning ? 'Triage...' : 'Analyze'}</span>
          </button>
        </div>

        {/* Quick Sample Chips */}
        <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
          <span className="text-[11px] text-[#86948a] font-mono">Quick test:</span>
          {SIMULATED_IOC_DATABASE.slice(0, 3).map((item) => (
            <button
              key={item.target}
              onClick={() => {
                setIocInput(item.target);
                handleScanIoc(item.target);
              }}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171f33] hover:bg-[#222a3d] text-[#dae2fd] border border-[#3c4a42]/60 transition-colors"
            >
              {item.target}
            </button>
          ))}
        </div>

        {/* Scan Result Box */}
        {iocResult && (
          <div className="p-3 rounded-lg bg-[#060e20] border border-[#3c4a42] space-y-1.5 text-xs font-mono animate-fadeIn">
            <div className="flex items-center justify-between">
              <span className="text-[#dae2fd] font-bold">{iocResult.target}</span>
              <span
                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  iocResult.status === 'MALICIOUS'
                    ? 'bg-[#93000a] text-[#ffb4ab]'
                    : iocResult.status === 'SUSPICIOUS'
                    ? 'bg-amber-900/40 text-amber-300'
                    : 'bg-[#003824] text-[#4edea3]'
                }`}
              >
                {iocResult.status} // {iocResult.confidence} CONFIDENCE
              </span>
            </div>
            <div className="text-[#4cd7f6] text-[11px] font-semibold">
              Category: {iocResult.category}
            </div>
            <p className="text-[#bbcabf] font-sans text-xs">
              {iocResult.details}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
