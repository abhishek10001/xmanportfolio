'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProjectsShowcase } from '@/components/ProjectsShowcase';
import { SkillsSandbox } from '@/components/SkillsSandbox';
import { ResearchTimeline } from '@/components/ResearchTimeline';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ResumeModal } from '@/components/ResumeModal';

export default function Home() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSandbox = () => {
    const el = document.getElementById('sandbox');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      <header className="py-2.5 px-4 text-center text-cyan-400 text-xs font-mono uppercase tracking-widest bg-[#06070a] border-b border-white/5">
        Abhishek Gangwar &bull; AI Engineering &amp; Research Portfolio
      </header>
      {/* Sticky frosted glass navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero
          onExploreProjects={scrollToProjects}
          onLaunchSandbox={scrollToSandbox}
        />

        {/* 3-Card Featured AI Projects */}
        <ProjectsShowcase />

        {/* Interactive Skills Matrix & LLM Prompt Evaluator Sandbox */}
        <SkillsSandbox />

        {/* Publications & System Benchmarks Timeline */}
        <ResearchTimeline />

        {/* Interactive Contact & Transmission Form */}
        <ContactSection />
      </main>

      {/* Footer with telemetry HUD & Socials */}
      <Footer />

      {/* CV / Resume Drawer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
