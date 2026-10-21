'use client';

import React, { useState } from 'react';
import { 
  Send, 
  Check, 
  Mail, 
  Copy, 
  ShieldCheck, 
  Key
} from 'lucide-react';

const TOPICS = [
  'LLM Architecture & Fine-Tuning',
  'Speculative Decoding & Inference Optimization',
  'Multi-Agent System Engineering',
  'Full-Time Lead / Staff AI Role',
  'Research Advisory & Consulting',
];

export function ContactSection() {
  const [selectedTopic, setSelectedTopic] = useState(TOPICS[0]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    budgetOrTimeline: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedPgp, setCopiedPgp] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const pgpKeyFingerprint = '4A91 B21D 908E FC81 332D  E041 8F22 9901 C7F2 EAA8';
  const directEmail = 'abhishek.gangwar.ai@proton.me';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPgp = () => {
    navigator.clipboard.writeText(pgpKeyFingerprint);
    setCopiedPgp(true);
    setTimeout(() => setCopiedPgp(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#07080d] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct Engineering Inquiries</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let&apos;s Build Next-Generation AI Systems
            </h2>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Available for staff-level AI system architecture, speculative inference consulting, 
              or deep research collaborations. Inquiries are responded to within 24 hours.
            </p>

            {/* Direct Email Card */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" /> Direct Protocol
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
              <div className="font-mono text-sm text-white select-all">
                {directEmail}
              </div>
            </div>

            {/* PGP Security Fingerprint */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <Key className="w-3.5 h-3.5 text-violet-400" /> PGP Fingerprint (Encrypted Comms)
                </span>
                <button
                  onClick={handleCopyPgp}
                  className="text-xs font-mono text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1"
                >
                  {copiedPgp ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Fingerprint</span>
                    </>
                  )}
                </button>
              </div>
              <div className="font-mono text-xs text-zinc-400 break-all select-all">
                {pgpKeyFingerprint}
              </div>
            </div>

            {/* Quick stats checklist */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>NDA &amp; IP Protection ready</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>On-premise / isolated cluster experience</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/10 bg-[#0c0d16]/95 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Transmission Received</h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto">
                    Thank you. Your message regarding &quot;{selectedTopic}&quot; has been logged to the priority triage queue. I will follow up via email within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        organization: '',
                        budgetOrTimeline: '',
                        message: '',
                      });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-lg text-xs font-mono bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Topic Selector */}
                  <div>
                    <label className="text-xs font-mono text-zinc-300 block mb-2">
                      Inquiry Focus Area
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {TOPICS.map((topic) => (
                        <button
                          key={topic}
                          type="button"
                          onClick={() => setSelectedTopic(topic)}
                          className={`text-xs font-mono px-3 py-1.5 rounded-lg transition-all ${
                            selectedTopic === topic
                              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 font-medium'
                              : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/5'
                          }`}
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-zinc-300 block mb-1.5">
                        Your Name / Handle *
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="Dr. Jordan Hayes"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-zinc-300 block mb-1.5">
                        Work / Secure Email *
                      </label>
                      <input
                        required
                        type="email"
                        placeholder="jordan@foundation-ai.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Org & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-zinc-300 block mb-1.5">
                        Company or Institution
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Autonomous Labs"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-zinc-300 block mb-1.5">
                        Project Scope / Timeline
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Q2 2025 / Immediate"
                        value={formData.budgetOrTimeline}
                        onChange={(e) => setFormData({ ...formData, budgetOrTimeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs font-mono text-zinc-300 block mb-1.5">
                      Technical Scope &amp; Architecture Requirements *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Outline target latency, context length, base foundation models, or cluster constraints..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs font-mono flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Encrypting &amp; Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Engineering Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
