'use client';

import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Cpu, 
  Activity, 
  Copy, 
  Check, 
  Play, 
  RefreshCw,
  Server
} from 'lucide-react';

const ROLES = [
  'LLM Fine-Tuning & Quantization Specialist',
  'Multi-Agent RAG Systems Architect',
  'Sub-15ms Speculative Decoding Engineer',
  'Distributed GPU Cluster Optimizer',
  'Zero-Shot Multi-Modal AI Researcher',
];

interface HeroProps {
  onExploreProjects: () => void;
  onLaunchSandbox: () => void;
}

export function Hero({ onExploreProjects, onLaunchSandbox }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [copiedCurl, setCopiedCurl] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    '[INIT] Connecting to vLLM 0.6.2 cluster (4x NVIDIA H100 80GB SXM5)... OK',
    '[CACHE] PagedAttention v3 initialized. KV Cache footprint: 24.6 GB (32K ctx)',
    '[MODEL] Synapse-70B-AWQ loaded via TensorRT-LLM pipeline.',
    '[READY] Inference daemon online. TTFT benchmark: 14.2ms | Draft accept rate: 78.4%',
  ]);
  const [isSimulating, setIsSimulating] = useState(false);

  // Role ticker rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const curlCommand = `curl -X POST https://api.synapse-inference.ai/v1/chat/completions \\
  -H "Authorization: Bearer sk-live_prod_8829" \\
  -d '{"model": "synapse-70b-speculative", "spec_draft": "qwen2.5-1.5b", "temperature": 0.2}'`;

  const handleCopyCurl = () => {
    navigator.clipboard.writeText(curlCommand);
    setCopiedCurl(true);
    setTimeout(() => setCopiedCurl(false), 2000);
  };

  const handleRunSimulatedBenchmark = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setTerminalOutput((prev) => [
      ...prev,
      `> exec benchmark_stream(batch_size=8, prompt_len=1024, max_new_tokens=256)...`,
    ]);

    setTimeout(() => {
      setTerminalOutput((prev) => [
        ...prev,
        `[BENCH] Speculative draft accepted: 82.1% (target 70B, draft 1.5B AWQ)`,
        `[BENCH] Output throughput: 168.4 tokens/sec | Avg TTFT: 12.8ms`,
        `[BENCH] Status: PASS (0 hallucinated tokens, memory headroom: 42.1GB)`,
      ]);
      setIsSimulating(false);
    }, 1100);
  };

  return (
    <section className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 lg:pt-52 lg:pb-36 overflow-hidden">
      {/* Background radial glows & mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[650px] bg-gradient-to-b from-cyan-500/10 via-blue-600/10 to-transparent blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-60 -left-32 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Headline and Pitch */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Pulsing Identity Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono shadow-sm shadow-cyan-950/50">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Abhishek Gangwar &bull; Lead AI &amp; Inference Engineer</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </div>

            {/* Dynamic Role Ticker */}
            <div className="min-h-[32px] text-xs sm:text-sm font-mono tracking-widest uppercase text-zinc-400 flex items-center justify-center lg:justify-start gap-3">
              <span className="text-zinc-500">//</span>
              <span className="text-cyan-400 font-semibold transition-all duration-300">
                {ROLES[roleIndex]}
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Architecting{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                Autonomous Intelligence
              </span>{' '}
              &amp; Sub-Millisecond Inference
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              I&apos;m <span className="text-white font-semibold">Abhishek Gangwar</span> &mdash; Lead AI Engineer engineering high-throughput distributed systems, 
              quantized speculative decoding (TensorRT-LLM, vLLM), hierarchical multi-agent workflows, 
              and domain-adapted foundation models with verified zero-shot reasoning.
            </p>

            {/* Key Engineering Metrics strip */}
            <div className="grid grid-cols-3 gap-4 pt-2 max-w-lg mx-auto lg:mx-0">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">14.2ms</div>
                <div className="text-[11px] text-zinc-400 font-mono mt-1">TTFT Latency</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-indigo-400">168 t/s</div>
                <div className="text-[11px] text-zinc-400 font-mono mt-1">Token Throughput</div>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm shadow-sm">
                <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">99.4%</div>
                <div className="text-[11px] text-zinc-400 font-mono mt-1">RAG Factuality</div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button
                onClick={onExploreProjects}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-xl shadow-cyan-500/25 border border-cyan-300/30 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Featured Architectures</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onLaunchSandbox}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl text-sm font-medium text-zinc-200 bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 hover:border-zinc-500 transition-all hover:scale-[1.02] active:scale-95 backdrop-blur-sm shadow-sm"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Launch Neural Sandbox</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Neural Terminal Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-cyan-500/30 bg-[#0c0e17]/90 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/10 bg-white/[0.02]">
                <div className="flex items-center gap-2.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-zinc-400 flex items-center gap-2 truncate">
                    <Server className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="truncate">abhishek@h100-primary-node:~/synapse-daemon</span>
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-700/50">
                    <Activity className="w-2.5 h-2.5 animate-spin" /> LIVE
                  </span>
                </div>
              </div>

              {/* Hardware / Latency HUD */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-black/40 border-b border-white/5 text-xs font-mono">
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-zinc-500 block mb-1">GPU VRAM</span>
                  <span className="text-cyan-300 font-semibold">32.4 / 80 GB</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-zinc-500 block mb-1">DRAFT RATIO</span>
                  <span className="text-emerald-300 font-semibold">78.4% Acc.</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-zinc-500 block mb-1">ENGINE</span>
                  <span className="text-violet-300 font-semibold">vLLM 0.6.2</span>
                </div>
                <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
                  <span className="text-[10px] text-zinc-500 block mb-1">QUANT</span>
                  <span className="text-amber-300 font-semibold">AWQ 4-Bit</span>
                </div>
              </div>

              {/* Terminal Logs Window */}
              <div className="p-5 font-mono text-xs text-zinc-300 space-y-3 max-h-72 overflow-y-auto bg-[#07080d]/80">
                {terminalOutput.map((line, idx) => (
                  <div
                    key={idx}
                    className={`leading-relaxed ${
                      line.startsWith('>')
                        ? 'text-cyan-400 font-semibold'
                        : line.startsWith('[BENCH]')
                        ? 'text-emerald-400'
                        : line.startsWith('[READY]')
                        ? 'text-sky-300'
                        : 'text-zinc-400'
                    }`}
                  >
                    {line}
                  </div>
                ))}
                {isSimulating && (
                  <div className="flex items-center gap-2.5 text-cyan-400 pt-1">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Streaming synthetic test batches across CUDA streams...</span>
                  </div>
                )}
              </div>

              {/* Interactive Terminal Bar */}
              <div className="p-4 border-t border-white/10 bg-white/[0.02] flex items-center justify-between gap-4">
                <button
                  onClick={handleRunSimulatedBenchmark}
                  disabled={isSimulating}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-medium rounded-xl bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/40 transition-colors disabled:opacity-50"
                >
                  <Play className="w-3 h-3" />
                  <span>Run Inference Benchmark</span>
                </button>

                <button
                  onClick={handleCopyCurl}
                  className="inline-flex items-center gap-2 text-[11px] font-mono text-zinc-400 hover:text-zinc-200 transition-colors px-3 py-2 rounded-lg bg-white/5 border border-white/5"
                  title="Copy cURL snippet"
                >
                  {copiedCurl ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Copied cURL!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy cURL</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
