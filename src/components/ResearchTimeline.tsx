'use client';

import React, { useState } from 'react';
import {
  BookOpen,
  Award,
  ExternalLink,
  FileText,
  Copy,
  Check,
  TrendingUp,
  Cpu,
  Layers
} from 'lucide-react';
import { ArxivIcon } from './SocialIcons';

interface TimelineEntry {
  year: string;
  type: 'Research' | 'Architecture' | 'Benchmark';
  title: string;
  venue: string;
  summary: string;
  stats: string;
  bibtex?: string;
  arxivId?: string;
}

const TIMELINE_DATA: TimelineEntry[] = [
  {
    year: '2024',
    type: 'Research',
    title: 'Dynamic Branch Pruning for Speculative Decoding on Long-Context Reasoning',
    venue: 'NeurIPS Workshop on Efficient LLM Inference & System Co-Design',
    summary:
      'Proposed a dynamic speculative draft pruning mechanism that evaluates confidence bounds at each token step, discarding non-viable generation paths early. Achieved a 2.4x speedup over standard autoregressive decoding on 128k context benchmarks.',
    stats: '2.4x speedup / 128K context',
    arxivId: '2405.09912',
    bibtex: `@inproceedings{chen2024dynamic,
  title={Dynamic Branch Pruning for Speculative Decoding on Long-Context Reasoning},
  author={Gangwar, Abhishek and Ramirez, Elena},
  booktitle={NeurIPS Workshop on Efficient LLMs},
  year={2024}
}`,
  },
  {
    year: '2024',
    type: 'Architecture',
    title: 'Production-Scale Agentic Workflows: Reducing Cascading Failures in Enterprise RAG',
    venue: 'Systems & ML Technical Whitepaper / Open Source Release',
    summary:
      'Detailed an actor-critic reflection architecture preventing compounding hallucination errors in multi-hop analytical queries. Deployed across 3 enterprise customers handling over 400,000 daily questions.',
    stats: '400k+ daily queries / 98.4% factuality',
  },
  {
    year: '2023',
    type: 'Benchmark',
    title: 'Sub-20ms Sparse-Dense Hybrid Embeddings on Trillion-Vector Collections',
    venue: 'Vector Database Engineering Benchmark Report',
    summary:
      'Engineered an asynchronous hybrid retrieval index marrying BGE-M3 dense vectors with BM25 inverted indices, demonstrating p99 latency reduction from 140ms to 18ms with 0.94 NDCG@10.',
    stats: '18ms p99 / 0.94 NDCG@10',
  },
  {
    year: '2023',
    type: 'Architecture',
    title: 'Distributed ZeRO-3 Fine-Tuning of 70B Models on Heterogeneous GPU Meshes',
    venue: 'Open Source Distributed AI Framework',
    summary:
      'Implemented parameter partitioning with custom overlapping communication kernels for 70B fine-tuning across mixed A100/H100 clusters, cutting inter-node PCIe overhead by 34%.',
    stats: '34% PCIe overhead reduction',
  },
];

export function ResearchTimeline() {
  const [copiedBibtexIdx, setCopiedBibtexIdx] = useState<number | null>(null);

  const handleCopyBibtex = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedBibtexIdx(idx);
    setTimeout(() => setCopiedBibtexIdx(null), 2000);
  };

  return (
    <section id="research" className="py-24 relative bg-[#090b11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-mono mb-3">
              <BookOpen className="w-3.5 h-3.5 text-violet-400" />
              <span>Publications, Benchmarks & Systems Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Research & Systems Engineering Track Record
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              Peer-reviewed research and production system benchmarks focused on high-throughput
              inference, quantized execution, and reliable autonomous agents.
            </p>
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 space-y-12">
          {TIMELINE_DATA.map((item, idx) => (
            <div key={idx} className="relative pl-6 md:pl-10 group">
              {/* Timeline Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#090b11] border-2 border-cyan-400 group-hover:scale-125 transition-transform" />

              {/* Year label on the left (desktop) */}
              <div className="md:absolute md:-left-32 md:top-1 text-xs font-mono text-cyan-400 font-bold mb-1 md:mb-0">
                {item.year}
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-500/40 transition-all hover:bg-white/[0.04]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full ${
                        item.type === 'Research'
                          ? 'bg-violet-950/80 text-violet-300 border border-violet-700/50'
                          : item.type === 'Benchmark'
                          ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-700/50'
                          : 'bg-blue-950/80 text-blue-300 border border-blue-700/50'
                      }`}
                    >
                      {item.type}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{item.venue}</span>
                  </div>

                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10 font-medium">
                    {item.stats}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                  {item.summary}
                </p>

                {/* Arxiv / Bibtex triggers */}
                {(item.bibtex || item.arxivId) && (
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-3">
                    {item.arxivId && (
                      <a
                        href={`https://arxiv.org/abs/${item.arxivId}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white transition-colors"
                      >
                        <ArxivIcon className="w-3.5 h-3.5 text-red-400" />
                        <span>arXiv:{item.arxivId}</span>
                        <ExternalLink className="w-3 h-3 text-zinc-500" />
                      </a>
                    )}

                    {item.bibtex && (
                      <button
                        onClick={() => handleCopyBibtex(item.bibtex!, idx)}
                        className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-cyan-300 transition-colors"
                      >
                        {copiedBibtexIdx === idx && (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">BibTeX copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy BibTeX</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
