import React, { useState } from 'react';
import { ANALYST_INFO } from '../data/portfolioData';
import { cyberAudio } from '../utils/audio';

interface ContactSectionProps {
  onOpenPgp: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPgp }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    inquiryType: 'audit',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [transmissionReceipt, setTransmissionReceipt] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;

    cyberAudio.playBlip(480);
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomHex = Math.random().toString(16).substring(2, 10).toUpperCase();
      setTransmissionReceipt(`TX-${randomHex}-DHAKA`);
      cyberAudio.playSuccess();
    }, 800);
  };

  const handleCopyEmail = () => {
    cyberAudio.playBlip(750);
    navigator.clipboard.writeText(ANALYST_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="flex flex-col w-full space-y-4 pt-2" id="contact">
      {/* Header */}
      <div className="flex flex-col space-y-1">
        <span className="font-label-caps text-[11px] text-[#4edea3] tracking-widest uppercase font-semibold">
          // 04. SECURE TRANSMISSION
        </span>
        <h2 className="font-headline-lg-mobile text-[26px] font-bold text-[#dae2fd]">
          Get In Touch
        </h2>
        <p className="font-body-md text-[15px] text-[#bbcabf] leading-relaxed">
          Need assistance with a security assessment, incident recovery, or consulting? Reach out directly.
        </p>
      </div>

      {/* Contact Form Card matching screenshot */}
      <div className="p-4 rounded-xl bg-[#171f33] border border-[#222a3d] shadow-md flex flex-col space-y-3">
        <form className="flex flex-col space-y-3" onSubmit={handleSubmit}>
          {/* Full Name Input */}
          <div className="flex flex-col space-y-1">
            <label className="font-label-caps text-[11px] text-[#bbcabf] uppercase font-semibold font-mono">
              Full Name
            </label>
            <div className="relative">
              <input
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#060e20] text-[#dae2fd] font-body-md placeholder-[#86948a] border border-[#222a3d] focus:border-[#4edea3] focus:outline-none focus:bg-[#222a3d]/50 transition-colors text-sm"
                placeholder="e.g. S. M. Rahman"
                required
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>
          </div>

          {/* Email Address Input */}
          <div className="flex flex-col space-y-1">
            <label className="font-label-caps text-[11px] text-[#bbcabf] uppercase font-semibold font-mono">
              Work Email Address
            </label>
            <div className="relative">
              <input
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#060e20] text-[#dae2fd] font-body-md placeholder-[#86948a] border border-[#222a3d] focus:border-[#4edea3] focus:outline-none focus:bg-[#222a3d]/50 transition-colors text-sm"
                placeholder="name@organization.com.bd"
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          {/* Inquiry Type Dropdown */}
          <div className="flex flex-col space-y-1">
            <label className="font-label-caps text-[11px] text-[#bbcabf] uppercase font-semibold font-mono">
              Inquiry Type
            </label>
            <div className="relative">
              <select
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#060e20] text-[#dae2fd] font-body-md border border-[#222a3d] focus:border-[#4edea3] focus:outline-none focus:bg-[#222a3d]/50 transition-colors appearance-none text-sm cursor-pointer pr-10"
              >
                <option value="audit">VAPT &amp; Security Audit</option>
                <option value="ir">Immediate Incident Response</option>
                <option value="cii">CII Protection Advisory</option>
                <option value="general">Consulting Inquiry</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-3 text-[#86948a] pointer-events-none text-[20px]">
                expand_more
              </span>
            </div>
          </div>

          {/* Message Field */}
          <div className="flex flex-col space-y-1">
            <label className="font-label-caps text-[11px] text-[#bbcabf] uppercase font-semibold font-mono">
              Transmission Message
            </label>
            <textarea
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#060e20] text-[#dae2fd] font-body-md placeholder-[#86948a] border border-[#222a3d] focus:border-[#4edea3] focus:outline-none focus:bg-[#222a3d]/50 transition-colors text-sm resize-none"
              placeholder="Provide system scope, vulnerability context, or timeline requirements..."
              required
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          {/* Encrypted Send Action */}
          <button
            className="flex items-center justify-center gap-2 w-full py-3.5 mt-2 rounded-lg bg-[#10b981] hover:bg-[#059669] text-[#003824] font-body-md font-bold shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-50 active:scale-[0.99]"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="animate-spin material-symbols-outlined text-[18px]">
                sync
              </span>
            ) : (
              <span className="material-symbols-outlined text-[18px]">lock</span>
            )}
            <span>
              {isSubmitting ? 'Performing Cryptographic Handshake...' : 'Send Encrypted Message'}
            </span>
          </button>

          {/* Feedback Alert matching screenshot */}
          {isSubmitted && (
            <div
              className="p-3.5 rounded-lg bg-[#4edea3]/10 border border-[#4edea3]/30 text-[#4edea3] font-body-sm text-center space-y-1 animate-fadeIn"
              id="msg-sent"
            >
              <div className="font-semibold flex items-center justify-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">check_circle</span>
                <span>Handshake successful. Message dispatched to secure endpoint.</span>
              </div>
              {transmissionReceipt && (
                <div className="text-[11px] font-mono text-[#bbcabf]">
                  Transmission Receipt ID: <span className="text-[#dae2fd] font-bold">{transmissionReceipt}</span> · AES-256 GCM
                </div>
              )}
            </div>
          )}
        </form>
      </div>

      {/* Direct Contact Details matching screenshot */}
      <div className="p-4 rounded-xl bg-[#131b2e] border border-[#222a3d] shadow-sm flex flex-col space-y-3">
        {/* Location Base */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#171f33] flex items-center justify-center text-[#4edea3] flex-shrink-0">
            <span className="material-symbols-outlined text-[18px]">location_on</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-label-caps text-[11px] text-[#86948a] uppercase font-mono">
              Location Base
            </span>
            <span className="font-body-md text-[15px] text-[#dae2fd] font-medium truncate">
              {ANALYST_INFO.location}
            </span>
          </div>
        </div>

        {/* Official Contact */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-8 h-8 rounded-lg bg-[#171f33] flex items-center justify-center text-[#4cd7f6] flex-shrink-0">
              <span className="material-symbols-outlined text-[18px]">mail</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-caps text-[11px] text-[#86948a] uppercase font-mono">
                Official Contact
              </span>
              <a
                href={`mailto:${ANALYST_INFO.email}`}
                className="font-code-md text-[14px] text-[#dae2fd] hover:text-[#4cd7f6] font-medium truncate font-mono transition-colors"
              >
                {ANALYST_INFO.email}
              </a>
            </div>
          </div>
          <button
            onClick={handleCopyEmail}
            title="Copy email to clipboard"
            className="p-1.5 rounded bg-[#171f33] hover:bg-[#222a3d] text-xs font-mono text-[#bbcabf] hover:text-[#4edea3] transition-colors flex items-center gap-1"
          >
            <span className="material-symbols-outlined text-[16px]">
              {copiedEmail ? 'done' : 'content_copy'}
            </span>
            <span className="text-[10px] hidden sm:inline">
              {copiedEmail ? 'Copied' : 'Copy'}
            </span>
          </button>
        </div>

        {/* LinkedIn Profile */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#171f33] flex items-center justify-center text-[#00dce6] flex-shrink-0">
            <span className="material-symbols-outlined text-[18px]">link</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-label-caps text-[11px] text-[#86948a] uppercase font-mono">
              LinkedIn Profile
            </span>
            <a
              className="font-code-md text-[14px] text-[#00dce6] truncate hover:underline font-mono"
              href="https://linkedin.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              {ANALYST_INFO.linkedin}
            </a>
          </div>
        </div>

        {/* GitHub Repository */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#171f33] flex items-center justify-center text-[#4edea3] flex-shrink-0">
            <span className="material-symbols-outlined text-[18px]">code</span>
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-label-caps text-[11px] text-[#86948a] uppercase font-mono">
              GitHub Repository
            </span>
            <a
              className="font-code-md text-[14px] text-[#4edea3] truncate hover:underline font-mono"
              href="https://github.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              {ANALYST_INFO.github}
            </a>
          </div>
        </div>
      </div>

      {/* Status Indicator / Compliance Footer matching screenshot */}
      <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#222a3d] border border-[#3c4a42]/50 shadow-inner">
        <button
          onClick={() => {
            cyberAudio.playBlip(750);
            onOpenPgp();
          }}
          className="flex items-center gap-1.5 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <span className="material-symbols-outlined text-[#4edea3] text-[18px]">
            verified_user
          </span>
          <span className="font-label-caps text-[11px] text-[#dae2fd] font-semibold font-mono">
            PGP Key Verified
          </span>
        </button>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00dce6] animate-pulse"></span>
          <span className="font-label-caps text-[11px] text-[#dae2fd] font-semibold font-mono">
            CII Compliant
          </span>
        </div>
      </div>
    </section>
  );
};
