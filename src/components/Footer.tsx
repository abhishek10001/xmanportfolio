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
        {/* Brand, Socials & Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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

          <div className="flex items-center gap-4">
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

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 transition-colors cursor-pointer border border-white/5"
              aria-label="Scroll to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
