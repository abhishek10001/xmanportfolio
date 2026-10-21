'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X as CloseIcon, FileText } from 'lucide-react';
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
    { name: 'Skills &amp; Sandbox', href: '#skills' },
    { name: 'Research &amp; Benchmarks', href: '#research' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 {
        scrolled
          ? 'bg-[#090a0f]/80 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-cyan-950/20 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Callout */}
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="relative flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500/20 via-blue-600/30 to-violet-600/20 border border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors shrink-0">
                <span className="font-mono text-xs font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  AG
                </span>
                <div className="absolute inset-0 rounded-lg bg-cyan-400/10 blur-sm group-hover:opacity-100 opacity-50 transition-opacity" />
              </div>
              <div>
                <div className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-zinc-100 flex items-center gap-1.5 whitespace-nowrap">
                  ABHISHEK GANGWAR
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/40 font-normal">
                <div className="font-mono text-sm font-semibold tracking-wider text-zinc-100 flex items-center gap-1.5">
                  ABHISHEK GANGWAR
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/40 font-normal">
                    AI ENG
                  </span>
                </div>
                <div className="text-[11px] text-zinc-400 font-mono tracking-tight flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                  inference &amp; agents
                </div>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] rounded-full px-3 py-1 shadow-inner backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white rounded-full transition-colors hover:bg-white/[0.06]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions & Status */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Live Availability Status */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for AI Architecture</span>
            </div>

            {/* Social quick icons */}
            <div className="flex items-center gap-1.5 border-l border-white/10 pl-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://huggingface.co"
                target="_blank"
                rel="noreferrer"
                aria-label="Hugging Face"
                className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-colors"
              >
                <HuggingFaceIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="p-1.5 text-zinc-400 hover:text-zinc-100 hover:bg-white/5 rounded-md transition-colors"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Resume button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border border-cyan-400/30 shadow-md shadow-cyan-900/30 transition-all active:scale-95"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-2.5 py-1 text-xs rounded-md bg-white/10 text-white font-medium flex items-center gap-1"
            >
              <FileText className="w-3 h-3" />
              Resume
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <CloseIcon className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0c0d14]/95 backdrop-blur-xl px-4 py-4 space-y-3">
          <div className="flex items-center gap-2 py-1 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for AI Architecture &amp; Research</span>
          </div>
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-md font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3 text-zinc-400">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href="https://huggingface.co" target="_blank" rel="noreferrer" className="hover:text-white">
                <HuggingFaceIcon className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-white">
                <TwitterXIcon className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="text-xs px-3 py-1.5 bg-cyan-600 rounded-md text-white font-medium"
            >
              View CV Dossier
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
