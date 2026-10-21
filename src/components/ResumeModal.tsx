'use client';

import React, { useState } from 'react';
import { X as CloseIcon, Download, FileText, Check, Sparkles, Award, Briefcase, GraduationCap } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto rounded-2xl bg-[#0c0d16] border border-cyan-500/30 p-6 sm:p-8 text-zinc-200 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white font-mono">
              ABHISHEK GANGWAR — CURRICULUM VITAE
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg bg-white/5"
            aria-label="Close CV modal"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* CV Summary Content */}
        <div className="py-6 space-y-6 font-mono text-xs">
          {/* Executive Summary */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="text-cyan-400 font-semibold uppercase tracking-wider text-[11px]">
              Profile Summary
            </div>
            <p className="text-zinc-300 leading-relaxed font-sans text-sm">
              Lead AI Engineer with 6+ years specializing in distributed inference systems,
              custom Triton CUDA kernels for speculative decoding, multi-agent RAG pipelines,
              and domain-specific LLM fine-tuning (QLoRA, DPO). Deployed models supporting &gt;10M monthly inferences.
            </p>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-zinc-400 uppercase tracking-widest text-[11px] font-bold">
              <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
              <span>Production Experience</span>
            </div>

            <div className="border-l-2 border-cyan-500/40 pl-4 space-y-4">
              <div>
                <div className="flex justify-between items-center text-white font-bold">
                  <span>Lead AI Inference Engineer — Synapse AI Labs</span>
                  <span className="text-zinc-500 text-[11px]">2022 — Present</span>
                </div>
                <div className="text-cyan-300 text-[11px]">TensorRT-LLM, vLLM, CUDA, Triton, Ray</div>
                <p className="text-zinc-400 mt-1 font-sans text-xs">
                  • Architected speculative decoding runtime achieving 2.8x speedup on Llama-3-70B on single H100s.<br />
                  • Maintained 99.98% SLA for cluster of 64x NVIDIA H100/A100 instances handling 180+ tokens/second.
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center text-white font-bold">
                  <span>Senior ML Engineer (LLMs &amp; RAG) — CogniScale Inc</span>
                  <span className="text-zinc-500 text-[11px]">2020 — 2022</span>
                </div>
                <div className="text-cyan-300 text-[11px]">LangGraph, Qdrant, PyTorch, DeepSpeed</div>
                <p className="text-zinc-400 mt-1 font-sans text-xs">
                  • Designed enterprise hierarchical multi-agent RAG orchestrator indexing 4M+ vectorized corporate docs.<br />
                  • Decreased token cost by 48% via dynamic semantic KV-caching.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-zinc-400 uppercase tracking-widest text-[11px] font-bold">
              <GraduationCap className="w-3.5 h-3.5 text-violet-400" />
              <span>Education</span>
            </div>
            <div className="border-l-2 border-violet-500/40 pl-4">
              <div className="text-white font-bold">M.S. in Computer Science (Artificial Intelligence)</div>
              <div className="text-zinc-400">Stanford University • GPA 3.94</div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-zinc-500 text-xs font-mono">
            Document verified • PDF SHA-256: e82b...910c
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all font-mono"
            >
              {downloaded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Downloaded PDF</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Full PDF</span>
                </>
              )}
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-2 rounded-lg text-xs font-mono text-zinc-400 hover:text-white bg-white/5"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
