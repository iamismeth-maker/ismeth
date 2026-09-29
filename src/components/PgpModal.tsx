import React, { useState } from 'react';
import { ANALYST_INFO } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';

interface PgpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PgpModal: React.FC<PgpModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyKey = () => {
    cyberAudio.playSuccess();
    navigator.clipboard.writeText(ANALYST_INFO.pgpPublicKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg bg-[#060e20] border border-[#3c4a42] rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-4 bg-[#171f33] border-b border-[#222a3d] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#4edea3] text-[22px]">
              verified_user
            </span>
            <div>
              <h3 className="font-mono text-sm font-bold text-[#dae2fd]">
                PGP Security Credentials
              </h3>
              <p className="text-[10px] font-mono text-[#4edea3]">
                CII DEFENSE NODE // VERIFIED KEYRING
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              cyberAudio.playBlip(500);
              onClose();
            }}
            className="text-[#86948a] hover:text-[#dae2fd] text-xs font-mono px-2 py-1 rounded hover:bg-[#222a3d]"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3 overflow-y-auto cyber-scrollbar">
          {/* Key metadata */}
          <div className="p-3 rounded-lg bg-[#131b2e] border border-[#222a3d] space-y-2 text-xs font-mono">
            <div>
              <span className="text-[#86948a] block text-[10px]">OWNER ID:</span>
              <span className="text-[#dae2fd] font-semibold">
                Tanvir Ahmed &lt;{ANALYST_INFO.email}&gt;
              </span>
            </div>
            <div>
              <span className="text-[#86948a] block text-[10px]">KEY ID:</span>
              <span className="text-[#4cd7f6] font-bold">{ANALYST_INFO.pgpKeyId}</span>
            </div>
            <div>
              <span className="text-[#86948a] block text-[10px]">FINGERPRINT:</span>
              <span className="text-[#4edea3] break-all select-all font-mono">
                {ANALYST_INFO.pgpFingerprint}
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px] pt-1 border-t border-[#222a3d]">
              <span className="text-[#bbcabf]">Cipher: RSA 4096-bit</span>
              <span className="text-[#00dce6]">Compliance: BGD-CIRT Verified</span>
            </div>
          </div>

          {/* Key Block */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#bbcabf]">
                Public Key ASCII Armor:
              </span>
              <button
                onClick={handleCopyKey}
                className="text-[11px] font-mono text-[#4edea3] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">
                  {copied ? 'done' : 'content_copy'}
                </span>
                <span>{copied ? 'Copied' : 'Copy Key'}</span>
              </button>
            </div>
            <pre className="p-3 rounded-lg bg-[#0b1326] border border-[#222a3d] text-[10px] font-mono text-[#bbcabf] overflow-x-auto select-all leading-tight cyber-scrollbar">
              {ANALYST_INFO.pgpPublicKey}
            </pre>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#171f33] border-t border-[#222a3d] flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#86948a]">
            Encrypted messages via transmission form
          </span>
          <button
            onClick={() => {
              cyberAudio.playBlip(500);
              onClose();
            }}
            className="px-3 py-1.5 rounded bg-[#222a3d] hover:bg-[#31394d] text-xs font-mono text-[#dae2fd]"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};
