'use client';

import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';
import { GithubIcon, HuggingFaceIcon, TwitterXIcon, LinkedinIcon, ArxivIcon } from './SocialIcons';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05060a] border-t border-white/10 py-12 text-zinc-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Live Cluster Health HUD */}
        <div className="p-4 rounded-xl bg-black/40 border border-white/5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-zinc-300 font-semibold">vLLM Inference Daemon:</span>
              <span className="text-emerald-400">99.98% Uptime</span>
            </div>
            <div className="hidden sm:inline-block text-zinc-600">|</div>
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-500">KV Cache:</span>
              <span className="text-cyan-300">PagedAttention v3 (32k ctx)</span>
            </div>
            <div className="hidden sm:inline-block text-zinc-600">|</div>
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-500">Weights:</span>
              <span className="text-violet-300">AWQ 4-Bit Verified</span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-zinc-300 transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Brand & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 border-t border-white/5">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-bold text-white tracking-wider flex items-center justify-center md:justify-start gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>ABHISHEK GANGWAR</span>
              <span className="text-[10px] text-zinc-500">// LEAD AI ARCHITECT</span>
            </div>
            <p className="text-[11px] text-zinc-500">
              Specialized in LLM fine-tuning, speculative inference kernels, and agentic workflows.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 text-zinc-400 hover:text-white rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://huggingface.co"
              target="_blank"
              rel="noreferrer"
              aria-label="Hugging Face"
              className="p-2 text-zinc-400 hover:text-white rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors"
            >
              <HuggingFaceIcon className="w-4 h-4" />
            </a>
            <a
              href="https://arxiv.org"
              target="_blank"
              rel="noreferrer"
              aria-label="ArXiv Publications"
              className="p-2 text-zinc-400 hover:text-white rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors"
            >
              <ArxivIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-zinc-400 hover:text-white rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="p-2 text-zinc-400 hover:text-white rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors"
            >
              <TwitterXIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-[11px] text-zinc-600">
          &copy; {new Date().getFullYear()} Abhishek Gangwar. Built with Next.js 16, TypeScript &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}
