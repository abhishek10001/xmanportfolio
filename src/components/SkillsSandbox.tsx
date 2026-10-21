'use client';

import React, { useState } from 'react';
import { 
  Cpu, 
  Database, 
  Terminal, 
  Play, 
  Sparkles, 
  Sliders, 
  Check, 
  RefreshCw, 
  Layers, 
  ShieldAlert, 
  Bot,
  Flame,
  ArrowRight
} from 'lucide-react';

interface SkillItem {
  name: string;
  category: 'models' | 'mlops' | 'agents' | 'infra';
  proficiency: number; // 0 - 100
  experience: string;
  tags: string[];
}

const SKILLS_DATA: SkillItem[] = [
  // Foundational Models & Fine-Tuning
  {
    name: 'LLM Fine-Tuning (QLoRA, LoRA, DPO)',
    category: 'models',
    proficiency: 96,
    experience: '4+ yrs',
    tags: ['Unsloth', 'TRL', 'Axolotl', 'PEFT', 'Hugging Face'],
  },
  {
    name: 'Model Quantization (AWQ, GPTQ, GGUF)',
    category: 'models',
    proficiency: 92,
    experience: '3+ yrs',
    tags: ['AutoAWQ', 'llama.cpp', 'ExLlamaV2', 'INT4/FP8'],
  },
  {
    name: 'Multi-Modal Alignment (CLIP, ViT, LLaVA)',
    category: 'models',
    proficiency: 88,
    experience: '2.5+ yrs',
    tags: ['Vision-Language', 'Contrastive Loss', 'PyTorch'],
  },

  // MLOps & Vector Databases
  {
    name: 'Vector Search & Hybrid RRF Reranking',
    category: 'mlops',
    proficiency: 95,
    experience: '3+ yrs',
    tags: ['Qdrant', 'Milvus', 'Pinecone', 'BM25', 'BGE-M3'],
  },
  {
    name: 'Distributed Training & ZeRO Optimization',
    category: 'mlops',
    proficiency: 90,
    experience: '3+ yrs',
    tags: ['DeepSpeed ZeRO-3', 'FSDP', 'Ray Train', 'Slurm'],
  },
  {
    name: 'Evaluation Harnesses & RAGAS Benchmarks',
    category: 'mlops',
    proficiency: 94,
    experience: '3+ yrs',
    tags: ['Ragas', 'TruLens', 'LangSmith', 'PromptFoo'],
  },

  // Agentic Systems
  {
    name: 'Hierarchical Multi-Agent Orchestration',
    category: 'agents',
    proficiency: 97,
    experience: '3+ yrs',
    tags: ['LangGraph', 'CrewAI', 'AutoGen', 'Function Calling'],
  },
  {
    name: 'Autonomous Tool Use & Reflection Loops',
    category: 'agents',
    proficiency: 93,
    experience: '3+ yrs',
    tags: ['Self-Correction', 'DAG Planners', 'JSON Schema Enforcement'],
  },
  {
    name: 'Guardrails & Hallucination Mitigation',
    category: 'agents',
    proficiency: 91,
    experience: '2+ yrs',
    tags: ['NeMo Guardrails', 'Llama Guard', 'Outlines', 'Guidance'],
  },

  // Inference Optimization & Hardware
  {
    name: 'vLLM & Continuous PagedAttention Batching',
    category: 'infra',
    proficiency: 98,
    experience: '3+ yrs',
    tags: ['vLLM', 'Prefix Caching', 'Chunked Prefill', 'FastAPI'],
  },
  {
    name: 'NVIDIA TensorRT-LLM & Triton Inference',
    category: 'infra',
    proficiency: 91,
    experience: '2.5+ yrs',
    tags: ['TensorRT-LLM', 'Triton Server', 'CUDA Graphs'],
  },
  {
    name: 'Speculative Decoding Implementation',
    category: 'infra',
    proficiency: 94,
    experience: '2+ yrs',
    tags: ['Draft Verification', 'EAGLE-2', 'Medusa heads'],
  },
];

const PRESET_PROMPTS = [
  {
    label: 'Agentic RAG Query',
    prompt: 'Synthesize Q3 multi-tenant revenue across internal docs and identify 3 customer churn risks with citations.',
    system: 'CogniMesh Planner v3: Activated DAG decomposition & self-reflection.',
  },
  {
    label: 'Speculative 70B Generation',
    prompt: 'Implement a thread-safe CUDA kernel ring buffer in C++ for asynchronous token streaming.',
    system: 'Synapse-70B-AWQ with 1.5B speculative draft verifier.',
  },
  {
    label: 'Clinical Scan Reasoning',
    prompt: 'Analyze lateral chest radiograph: identify presence of pleural effusion or consolidation.',
    system: 'VisionNeuro-MedVL with zero-shot spatial bounding coordinates.',
  },
];

export function SkillsSandbox() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'models' | 'mlops' | 'agents' | 'infra'>('all');
  
  // Interactive Sandbox state
  const [selectedPreset, setSelectedPreset] = useState(0);
  const [userPrompt, setUserPrompt] = useState(PRESET_PROMPTS[0].prompt);
  const [temperature, setTemperature] = useState(0.2);
  const [topP, setTopP] = useState(0.9);
  const [isGenerating, setIsGenerating] = useState(false);
  const [streamedText, setStreamedText] = useState(
    'CogniMesh execution graph compiled.\n[Node: Planner] Split into 2 sub-queries: [1] Retrieve 10-Q filing table, [2] Cross-reference support tickets.\n[Node: HybridRetriever] Found 6 high-density chunks (BGE-M3 score 0.942).\n[Node: Critic] Grounding alignment: 96.8%.\n\nResult: Q3 revenue was $41.8M (+22% YoY). Top churn factors: API rate-limit bottlenecks, latency SLAs, and SSO migration overhead.'
  );
  const [metrics, setMetrics] = useState({
    tokensPerSec: 154.2,
    ttftMs: 13.8,
    tokensTotal: 112,
  });

  const filteredSkills = activeCategory === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  const handleRunInference = () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setStreamedText('');

    const targetOutput = selectedPreset === 0
      ? `[Graph: CogniMesh-RAG-v3] Initializing task DAG for query.\n→ Planner dispatched sub-queries across 3 parallel index shards.\n→ Retrieved 12 candidate chunks via reciprocal rank fusion (dense 0.89, BM25 0.92).\n→ Verified citations against ground truth metadata.\n\nSynthesis complete: Revenue reached $41.8M with 98.4% factuality score. No hallucinated metrics detected.`
      : selectedPreset === 1
      ? `// SynapseLLM Speculative Output (Draft: Qwen-1.5B, Target: Llama-3-70B-AWQ)\n// TTFT: 12.4ms | Draft Acceptance: 84.1%\n\n__global__ void ring_buffer_push(TokenBuffer* buf, int token_id) {\n    unsigned int head = atomicAdd(&buf->head, 1);\n    buf->queue[head % BUFFER_CAPACITY] = token_id;\n    __threadfence();\n}\n// Kernel compiled with Triton JIT compiler. Zero memory leaks.`
      : `[VisionNeuro Multimodal Engine]\nScan input: Posterior-Anterior (PA) view.\nBBox Grounding: [ymin: 0.42, xmin: 0.61, ymax: 0.74, xmax: 0.88]\nPathology: Mild right basilar opacity consistent with early consolidation.\nNo evidence of pneumothorax or acute osseous abnormalities.\nConfidence: 97.4% (AUROC benchmarked).`;

    let i = 0;
    const interval = setInterval(() => {
      if (i < targetOutput.length) {
        setStreamedText(targetOutput.slice(0, i + 8));
        i += 8;
      } else {
        setStreamedText(targetOutput);
        setIsGenerating(false);
        setMetrics({
          tokensPerSec: Math.floor(140 + Math.random() * 30),
          ttftMs: Number((12.5 + Math.random() * 3).toFixed(1)),
          tokensTotal: Math.floor(targetOutput.split(' ').length * 1.3),
        });
        clearInterval(interval);
      }
    }, 45);
  };

  return (
    <section id="skills" className="py-24 relative bg-[#07080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Skills Matrix &amp; Evaluation Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production Competencies &amp; Neural Playground
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-2">
            Explore verified competencies across distributed training, low-latency inference, 
            and autonomous agents—or run live simulated inferences through the prompt playground.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {[
            { id: 'all', label: 'All Proficiencies' },
            { id: 'models', label: 'LLMs & Fine-Tuning' },
            { id: 'mlops', label: 'MLOps & Vector DBs' },
            { id: 'agents', label: 'Agentic Workflows' },
            { id: 'infra', label: 'Inference & Hardware' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-medium font-mono transition-all ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/25 border border-cyan-400'
                  : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.07] hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                    {skill.experience} production
                  </span>
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {skill.proficiency}%
                  </span>
                </div>

                <h3 className="text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>

                {/* Proficiency Bar */}
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden my-3">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-700"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-300 border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Live Neural Playground Sandbox */}
        <div id="sandbox" className="mt-20 rounded-2xl border border-cyan-500/30 bg-[#0c0e18]/90 backdrop-blur-xl shadow-2xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">
                  Live Neural Sandbox &amp; Prompt Evaluator
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Simulate low-latency token streaming across proprietary model architectures with realistic telemetry.
              </p>
            </div>

            {/* Presets buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-zinc-400 mr-1">Presets:</span>
              {PRESET_PROMPTS.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedPreset(idx);
                    setUserPrompt(preset.prompt);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedPreset === idx
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                      : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            {/* Left Sandbox Column: Sliders and Prompt */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <label className="text-xs font-mono text-zinc-300 block mb-2">
                  System Context Architecture
                </label>
                <div className="p-3 rounded-lg bg-black/40 border border-white/10 text-xs font-mono text-cyan-400">
                  {PRESET_PROMPTS[selectedPreset].system}
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-zinc-300 block mb-2">
                  Inference Prompt
                </label>
                <textarea
                  rows={4}
                  value={userPrompt}
                  onChange={(e) => setUserPrompt(e.target.value)}
                  className="w-full rounded-xl bg-black/50 border border-white/10 p-3 text-xs font-mono text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-400 transition-colors"
                  placeholder="Enter evaluation prompt..."
                />
              </div>

              {/* Hyperparameters Controls */}
              <div className="space-y-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-zinc-400 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-cyan-400" /> Temperature:
                  </span>
                  <span className="text-cyan-300 font-bold">{temperature}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-zinc-700 rounded-lg"
                />

                <div className="flex items-center justify-between text-xs font-mono pt-1">
                  <span className="text-zinc-400">Top-p Nucleus:</span>
                  <span className="text-cyan-300 font-bold">{topP}</span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1"
                  step="0.05"
                  value={topP}
                  onChange={(e) => setTopP(parseFloat(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-zinc-700 rounded-lg"
                />
              </div>

              <button
                onClick={handleRunInference}
                disabled={isGenerating}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs font-mono flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-all disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Streaming Inference Tokens...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Execute Inference Run</span>
                  </>
                )}
              </button>
            </div>

            {/* Right Sandbox Column: Live Streaming Terminal & Metrics */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Telemetry Bar */}
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-center">
                    <span className="text-[10px] font-mono text-zinc-500 block">THROUGHPUT</span>
                    <span className="text-sm font-mono font-bold text-cyan-300">
                      {metrics.tokensPerSec} t/s
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-center">
                    <span className="text-[10px] font-mono text-zinc-500 block">TTFT LATENCY</span>
                    <span className="text-sm font-mono font-bold text-emerald-300">
                      {metrics.ttftMs}ms
                    </span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 text-center">
                    <span className="text-[10px] font-mono text-zinc-500 block">TOKENS GENERATED</span>
                    <span className="text-sm font-mono font-bold text-violet-300">
                      {metrics.tokensTotal}
                    </span>
                  </div>
                </div>

                {/* Stream Console */}
                <div className="rounded-xl border border-white/10 bg-[#07080d] p-4 min-h-[260px] max-h-[300px] overflow-y-auto font-mono text-xs text-zinc-200">
                  <div className="text-[11px] text-zinc-500 mb-2 border-b border-white/5 pb-1 flex items-center justify-between">
                    <span>// STDOUT STREAM (chunked prefix cache active)</span>
                    <span className="text-emerald-400">HTTP 200 OK</span>
                  </div>
                  <pre className="whitespace-pre-wrap leading-relaxed">
                    {streamedText || 'Awaiting inference initiation...'}
                    {isGenerating && (
                      <span className="inline-block w-2 h-4 ml-1 bg-cyan-400 animate-pulse align-middle" />
                    )}
                  </pre>
                </div>
              </div>

              {/* Footer evaluation badge */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Check className="w-3.5 h-3.5" /> Faithfulness: 99.1% Verified
                </span>
                <span>Context Window: 32,768 tokens ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
