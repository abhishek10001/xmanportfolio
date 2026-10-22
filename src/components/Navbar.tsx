'use client';

import React, { useState, useEffect } from 'react';
import { Menu, FileText, X } from 'lucide-react';
import { GithubIcon, HuggingFaceIcon, TwitterXIcon, LinkedinIcon } from './SocialIcons';

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#projects' },
    { name: 'Skills & Sandbox', href: '#skills' },
    { name: 'Research & Benchmarks', href: '#research' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0f]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-950/40 py-2.5'
          : 'bg-[#08090d]/80 backdrop-blur-md py-3.5 sm:py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-6">
          {/* Logo / Name & Callout */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="flex flex-col">
                <div className="font-mono text-xs sm:text-sm font-bold tracking-wider text-zinc-100 flex items-center gap-2 whitespace-nowrap">
                  ABHISHEK GANGWAR
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-cyan-950/90 text-cyan-300 border border-cyan-800/80 font-semibold tracking-wide">
                    AI ENG
                  </span>
                </div>
                <span className="text-[11px] text-zinc-400 font-mono hidden sm:inline-block mt-0.5">
                  Lead Inference &amp; Systems Architect
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-1.5 shadow-inner backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1 text-xs font-medium text-zinc-300 hover:text-white rounded-full transition-all hover:bg-white/[0.08] hover:shadow-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & Status */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Live Availability Status */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Architecture</span>
            </div>

            {/* Social quick icons */}
            <div className="flex items-center gap-2 border-l border-white/10 pl-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-white/10 rounded-lg transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://huggingface.co"
                target="_blank"
                rel="noreferrer"
                aria-label="Hugging Face"
                className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-white/10 rounded-lg transition-colors"
              >
                <HuggingFaceIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-white/10 rounded-lg transition-colors"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Resume button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border border-cyan-400/40 shadow-lg shadow-cyan-900/30 transition-all hover:scale-[1.02] active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 text-xs rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium flex items-center gap-1.5 transition-colors border border-white/10"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-cyan-400" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#090b14]/98 backdrop-blur-2xl px-5 py-6 space-y-5 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs font-mono text-emerald-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span>Available for AI Architecture &amp; Research</span>
          </div>
          <div className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 text-sm text-zinc-200 hover:text-white hover:bg-white/10 rounded-xl font-medium transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-cyan-400/80 font-mono text-xs">&rarr;</span>
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 text-zinc-400">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-xl hover:text-white transition-colors" aria-label="GitHub">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href="https://huggingface.co" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-xl hover:text-white transition-colors" aria-label="Hugging Face">
                <HuggingFaceIcon className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-xl hover:text-white transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="p-2 bg-white/5 hover:bg-white/10 rounded-xl hover:text-white transition-colors" aria-label="X">
                <TwitterXIcon className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-xs px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl text-white font-semibold shadow-md shadow-cyan-950/50"
            >
              View CV Dossier
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
