import React, { useState, useRef, useEffect } from 'react';
import { TERMINAL_COMMANDS, SIMULATED_IOC_DATABASE } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  id: string;
  cmd: string;
  output: string;
  isError?: boolean;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 'init-1',
      cmd: 'init-session --node dhaka-ap-south',
      output: `[+] AUTHENTICATED: Guest Security Analyst
[+] CONNECTED TO: BGD-CIRT-PROXY // DHAKA-DEFENSE-NODE-01
[+] TYPE 'help' TO VIEW COMMAND MATRIX OR TAP QUICK CHIPS BELOW.`
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const executeCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    cyberAudio.playBlip(620);
    const parts = trimmed.split(' ');
    const mainCmd = parts[0].toLowerCase();

    if (mainCmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let output = '';
    let isError = false;

    if (mainCmd === 'scan') {
      const target = parts[1];
      if (!target) {
        output = 'Error: Missing target parameter. Usage: scan <ip-or-domain>\nExample: scan 103.20.15.44';
        isError = true;
      } else {
        const match = SIMULATED_IOC_DATABASE.find(
          (i) => i.target.toLowerCase() === target.toLowerCase()
        );
        if (match) {
          output = `[+] SCAN COMPLETED FOR: ${target}
STATUS: [${match.status}] (${match.confidence} CONFIDENCE)
CLASSIFICATION: ${match.category}
TELEMETRY: ${match.details}`;
        } else {
          output = `[+] SCAN COMPLETED FOR: ${target}
STATUS: [CLEAN] (95% CONFIDENCE)
CLASSIFICATION: Neutral Telemetry Endpoint
TELEMETRY: Checked against BGD e-GOV CIRT and MISP feed indexes. No known exploit beacons active.`;
        }
      }
    } else if (TERMINAL_COMMANDS[mainCmd]) {
      output = TERMINAL_COMMANDS[mainCmd];
    } else {
      output = `Command not recognized: '${mainCmd}'. Type 'help' for available defense commands.`;
      isError = true;
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        cmd: trimmed,
        output,
        isError
      }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal);
    }
  };

  const quickCommands = ['status', 'cirt-feed', 'audit-summary', 'skills', 'scan 103.20.15.44', 'pgp-key'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-[#060e20] border border-[#3c4a42] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Terminal Titlebar */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-[#171f33] border-b border-[#222a3d]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/70 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/70 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/70 inline-block"></span>
            <span className="font-mono text-xs text-[#bbcabf] ml-2">
              analyst@dhaka-node-01:~ (CII Terminal)
            </span>
          </div>

          <button
            onClick={() => {
              cyberAudio.playBlip(500);
              onClose();
            }}
            className="text-[#86948a] hover:text-[#dae2fd] text-xs font-mono px-2 py-1 rounded hover:bg-[#222a3d] transition-colors"
          >
            [ESC / CLOSE]
          </button>
        </div>

        {/* Quick Command Action Chips */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#0b1326] border-b border-[#222a3d] overflow-x-auto cyber-scrollbar">
          <span className="text-[10px] text-[#86948a] font-mono whitespace-nowrap">
            Quick run:
          </span>
          {quickCommands.map((q) => (
            <button
              key={q}
              onClick={() => executeCommand(q)}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#171f33] hover:bg-[#222a3d] text-[#4edea3] border border-[#3c4a42]/60 whitespace-nowrap transition-colors"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Output Screen */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs cyber-scrollbar">
          {history.map((log) => (
            <div key={log.id} className="space-y-1">
              <div className="flex items-center gap-2 text-[#4cd7f6]">
                <span className="text-[#4edea3]">analyst@dhaka-node:~$</span>
                <span>{log.cmd}</span>
              </div>
              <pre
                className={`whitespace-pre-wrap leading-relaxed ${
                  log.isError ? 'text-[#ffb4ab]' : 'text-[#dae2fd]/90'
                }`}
              >
                {log.output}
              </pre>
            </div>
          ))}
          <div ref={terminalEndRef} />
        </div>

        {/* Input Bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#131b2e] border-t border-[#222a3d]">
          <span className="text-[#4edea3] font-mono text-xs font-bold whitespace-nowrap">
            analyst@dhaka-node:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command ('help', 'cirt-feed', 'scan <ip>')..."
            className="flex-1 bg-transparent text-[#dae2fd] font-mono text-xs focus:outline-none placeholder-[#86948a]"
          />
          <button
            onClick={() => executeCommand(inputVal)}
            className="px-2.5 py-1 rounded bg-[#10b981] hover:bg-[#059669] text-[#003824] font-bold text-xs font-mono"
          >
            EXEC
          </button>
        </div>
      </div>
    </div>
  );
};
