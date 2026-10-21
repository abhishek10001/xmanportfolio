'use client';

import React, { useState } from 'react';
import { 
  GitBranch, 
  ExternalLink, 
  Cpu, 
  Layers, 
  Zap, 
  ShieldCheck, 
  Code2, 
  X as CloseIcon, 
  Activity, 
  Check, 
  ArrowRight,
  Database,
  Sliders,
  ChevronRight
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export interface ProjectData {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  architectureDetails: string[];
  metrics: { label: string; value: string; hint: string }[];
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  codeSnippet: string;
  flowSteps: { step: string; detail: string }[];
}

export const FEATURED_PROJECTS: ProjectData[] = [
  {
    id: 'cognimesh',
    badge: 'Multi-Agent RAG Orchestration',
    title: 'CogniMesh: Autonomous Enterprise RAG Orchestrator',
    subtitle: 'Hierarchical query decomposition with self-correcting reflection loops and hybrid reranking',
    description:
      'Engineered an enterprise agentic RAG platform capable of recursive decomposition of multi-hop analytical queries, hybrid dense-sparse reranking (BGE-M3 + BM25), and sub-120ms vector retrieval with dynamic semantic caching.',
    longDescription:
      'CogniMesh addresses critical RAG limitations in enterprise knowledge graphs. Standard naive RAG fails on queries requiring synthesis across disparate documents. CogniMesh implements a dual-layer orchestrator: a Planner Agent generates a directed acyclic graph (DAG) of sub-questions, executes parallel vector queries to Qdrant with hybrid BGE-M3 + BM25 reciprocal rank fusion (RRF), and executes a Critic reflection agent that scores answer grounding before returning responses.',
    architectureDetails: [
      'Planner-Critic actor-critic framework built with LangGraph and asyncio state graphs',
      'Hybrid dense & sparse embedding retrieval with reciprocal rank fusion (RRF) on 4.2M vectorized pages',
      'Self-healing verification node: if factual alignment is below 0.88, query is autonomously rewritten',
      'Context cache hit rate of 94.2%, reducing token costs by 48% for repeat organizational queries',
    ],
    metrics: [
      { label: 'Factuality Score', value: '98.4%', hint: 'RAGAS benchmark score' },
      { label: 'Retrieval Latency', value: '88ms', hint: 'p95 latency over 5M docs' },
      { label: 'Token Efficiency', value: '+48%', hint: 'Cost reduction via caching' },
    ],
    techStack: ['LangGraph', 'Qdrant Vector DB', 'FastAPI', 'BGE-M3', 'Docker', 'Redis', 'Python 3.11'],
    githubUrl: 'https://github.com',
    demoUrl: '#sandbox',
    codeSnippet: `@app.post("/v1/rag/decompose-and-retrieve")
async def execute_agentic_retrieval(query: AgenticQueryRequest) -> RAGResponse:
    # Compile multi-hop execution plan
    graph = StateGraph(AgentState)
    graph.add_node("planner", planner_node)
    graph.add_node("hybrid_retriever", hybrid_qdrant_node)
    graph.add_node("fact_critic", semantic_reflection_node)
    
    # Conditional routing: self-heal if factuality score < 0.88
    graph.add_conditional_edges(
        "fact_critic",
        should_reflect,
        {"continue": "synthesizer", "rewrite": "planner"}
    )
    workflow = graph.compile(checkpointer=MemorySaver())
    return await workflow.arun(query.dict())`,
    flowSteps: [
      { step: '01. Input Query', detail: 'User inputs complex multi-hop prompt across legal/financial docs' },
      { step: '02. Planner Agent', detail: 'Deconstructs into DAG sub-queries executed asynchronously' },
      { step: '03. Hybrid Retrieval', detail: 'Sparse BM25 + Dense BGE-M3 reranked via Qdrant' },
      { step: '04. Reflection Loop', detail: 'Critic verifies citations against raw chunks before output' },
    ],
  },
  {
    id: 'synapsellm',
    badge: 'Inference Engine & Speculative Decoding',
    title: 'SynapseLLM: Low-Rank Speculative Decoding Engine',
    subtitle: 'Custom Triton CUDA kernels pairing 70B target model with dynamic 1.5B draft model',
    description:
      'Architected a low-latency speculative decoding runtime on NVIDIA TensorRT-LLM and vLLM. Pairs an AWQ 4-bit quantized 70B parameter base LLM with a 1.5B draft model, achieving 2.8x speedup on single H100 GPUs with sub-15ms TTFT.',
    longDescription:
      'Deploying frontier 70B parameter models often introduces intolerable latency for interactive applications. SynapseLLM implements speculative decoding where a lightweight 1.5B draft model proposes 5 candidate tokens per step, and the 70B target model verifies them in a single forward pass. Custom Triton kernels optimize KV cache lookups, achieving an acceptance rate of 78.4% and reducing time-to-first-token (TTFT) to 14.2ms.',
    architectureDetails: [
      'Target-Draft speculative pipeline: Llama-3-70B-Instruct verified against Qwen2.5-1.5B draft',
      'PagedAttention v3 integration in vLLM with custom flash-decoding CUDA kernels',
      'Activation-aware Weight Quantization (AWQ) 4-bit compression maintaining 99.2% FP16 perplexity',
      'Continuous dynamic batching handling 120 concurrent streams with strict latency SLAs',
    ],
    metrics: [
      { label: 'Speedup Factor', value: '2.8x', hint: 'vs vanilla FP16 baseline' },
      { label: 'Draft Acceptance', value: '78.4%', hint: 'Tokens accepted per step' },
      { label: 'First Token Latency', value: '14.2ms', hint: 'p50 TTFT on H100' },
    ],
    techStack: ['vLLM', 'TensorRT-LLM', 'PyTorch', 'Triton', 'AWQ Quantization', 'CUDA C++', 'Ray'],
    githubUrl: 'https://github.com',
    demoUrl: '#sandbox',
    codeSnippet: `import torch
import triton
from vllm import LLM, SamplingParams

class SpeculativeEngine:
    def __init__(self, target_model: str, draft_model: str):
        # Initialize target 70B with AWQ 4-bit weights
        self.target = LLM(
            model=target_model,
            quantization="awq",
            speculative_model=draft_model,
            num_speculative_tokens=5,
            gpu_memory_utilization=0.92,
            enforce_eager=False, # Triton graph capture
        )
    
    def generate_streaming(self, prompt: str):
        params = SamplingParams(temperature=0.2, top_p=0.95, max_tokens=512)
        return self.target.generate(prompt, params, use_tqdm=False)`,
    flowSteps: [
      { step: '01. KV Cache Pre-fill', detail: 'Triton-accelerated flash attention runs initial prompt tokens' },
      { step: '02. Draft Proposal', detail: '1.5B draft model generates 5 candidate tokens in parallel' },
      { step: '03. Target Verification', detail: '70B target checks draft probabilities in 1 forward pass' },
      { step: '04. Token Acceptance', detail: 'Accepts ~4 tokens/cycle; fallback token generated on miss' },
    ],
  },
  {
    id: 'visionneuro',
    badge: 'Multi-Modal Vision & Alignment',
    title: 'VisionNeuro: Zero-Shot Multi-Modal Medical Diagnostics',
    subtitle: 'Contrastive visual grounding and LoRA adapters on 1.2M radiological DICOM scans',
    description:
      'Trained and deployed a zero-shot multi-modal clinical diagnostic assistant aligning high-resolution chest X-rays with radiological report narratives. Features contrastive vision grounding with bounding-box explainability and 98.7% AUROC.',
    longDescription:
      'Diagnostic radiology requires verifiable grounding rather than black-box hallucinations. VisionNeuro merges a custom Swin-Transformer-Large vision backbone with a clinical Llama-3 adapter. Using contrastive region-text alignment loss, the model grounds disease annotations directly onto DICOM coordinates while generating structured diagnostic impressions with strict HIPAA-compliant guardrails.',
    architectureDetails: [
      'Cross-attention projection layer mapping visual tokens into LLM embedding space',
      'Trained on 1.2M anonymized chest radiographs using DeepSpeed ZeRO-3 on 8x A100 nodes',
      'Heatmap bounding-box visualization via grad-CAM integration for zero-shot pathology localization',
      'Strict clinical guardrails: NeMo Guardrails prevents speculative diagnoses on ambiguous scans',
    ],
    metrics: [
      { label: 'Detection AUROC', value: '98.7%', hint: 'Pneumothorax / consolidation' },
      { label: 'Grounding Precision', value: '91.3%', hint: 'IoU bbox localization' },
      { label: 'Inference Latency', value: '185ms', hint: 'Complete scan + report' },
    ],
    techStack: ['PyTorch', 'Hugging Face', 'DeepSpeed ZeRO-3', 'MONAI', 'FastAPI', 'ONNX Runtime'],
    githubUrl: 'https://github.com',
    demoUrl: '#sandbox',
    codeSnippet: `class MultiModalRadiologyAdapter(nn.Module):
    def __init__(self, vision_encoder, llm_backbone, embed_dim=4096):
        super().__init__()
        self.vision_encoder = vision_encoder
        self.projection_layer = nn.Sequential(
            nn.Linear(1024, embed_dim),
            nn.GELU(),
            nn.Linear(embed_dim, embed_dim)
        )
        self.llm = llm_backbone # LoRA adapted parameters
        
    def forward(self, pixel_values, input_ids):
        image_embeds = self.vision_encoder(pixel_values).last_hidden_state
        projected_visuals = self.projection_layer(image_embeds)
        # Prepend visual tokens into conversational token context
        combined_embeds = torch.cat([projected_visuals, self.llm.embed_tokens(input_ids)], dim=1)
        return self.llm(inputs_embeds=combined_embeds)`,
    flowSteps: [
      { step: '01. DICOM Ingestion', detail: 'Scan normalized, artifact-filtered, and patched via Swin-ViT' },
      { step: '02. Projection Bridge', detail: 'Visual embeddings mapped to 4096-dim token feature space' },
      { step: '03. LLM Diagnostic Gen', detail: 'Clinical Llama-3 generates structured diagnostic findings' },
      { step: '04. Spatial Grounding', detail: 'Cross-attention outputs bounding coordinates for radiologists' },
    ],
  },
];

export function ProjectsShowcase() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeTab, setActiveTab] = useState<'architecture' | 'code' | 'flow'>('architecture');

  return (
    <section id="projects" className="py-24 relative border-t border-white/5 bg-[#090b11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono mb-3">
              <Layers className="w-3.5 h-3.5 text-blue-400" />
              <span>Production Deployments &amp; Research</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured AI Engineering Architectures
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl">
              High-throughput inference systems, low-latency speculative decoding engines, and 
              autonomous agent frameworks running in verified production environments.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>All systems verified on H100 &amp; A100 infrastructure</span>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, idx) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-gradient-to-b from-white/[0.05] to-white/[0.01] border border-white/10 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-2xl hover:shadow-cyan-950/30 overflow-hidden"
            >
              {/* Top Accent Bar */}
              <div
                className={`h-1 w-full ${
                  idx === 0
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500'
                    : idx === 1
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                    : 'bg-gradient-to-r from-violet-500 to-cyan-500'
                }`}
              />

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Category Badge & Code glyph */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.06] text-cyan-300 border border-white/10">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">SYS-0{idx + 1}</span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-1 mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-black/40 border border-white/5 mb-6">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="text-base font-bold font-mono text-white">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-zinc-400 truncate font-mono">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-zinc-300 border border-white/5 hover:border-cyan-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.02] text-zinc-500">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setActiveTab('architecture');
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-300 hover:text-cyan-200 transition-colors group-hover:translate-x-0.5"
                  >
                    <span>Deep Architecture</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Repository"
                      className="p-1.5 text-zinc-400 hover:text-white rounded-md bg-white/[0.04] hover:bg-white/10 border border-white/5 transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.demoUrl}
                      className="p-1.5 text-zinc-400 hover:text-white rounded-md bg-white/[0.04] hover:bg-white/10 border border-white/5 transition-colors"
                      title="Open in Sandbox"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep Architecture Modal / Drawer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0d0f18] border border-cyan-500/30 shadow-2xl shadow-cyan-950/60 p-6 sm:p-8">
            {/* Modal Header */}
            <div className="flex items-start justify-between pb-4 border-b border-white/10">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  Architecture Breakdown
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-zinc-400 mt-1">{selectedProject.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 text-zinc-400 hover:text-white rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Tabs */}
            <div className="flex items-center gap-2 border-b border-white/10 my-4 text-xs font-mono">
              <button
                onClick={() => setActiveTab('architecture')}
                className={`pb-2 px-3 border-b-2 font-medium transition-colors ${
                  activeTab === 'architecture'
                    ? 'border-cyan-400 text-cyan-300'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                System Architecture
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`pb-2 px-3 border-b-2 font-medium transition-colors ${
                  activeTab === 'code'
                    ? 'border-cyan-400 text-cyan-300'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Inference Code Snippet
              </button>
              <button
                onClick={() => setActiveTab('flow')}
                className={`pb-2 px-3 border-b-2 font-medium transition-colors ${
                  activeTab === 'flow'
                    ? 'border-cyan-400 text-cyan-300'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Execution Lifecycle
              </button>
            </div>

            {/* Tab 1: Architecture Spec */}
            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 font-mono mb-2">
                    Executive Overview
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 font-mono mb-3">
                    Core Technical Specifications
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.architectureDetails.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <span className="p-0.5 mt-0.5 rounded-full bg-cyan-500/20 text-cyan-400">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  {selectedProject.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="p-3.5 rounded-xl bg-black/40 border border-white/10">
                      <div className="text-xs text-zinc-400 font-mono">{m.label}</div>
                      <div className="text-xl font-bold font-mono text-cyan-400 my-0.5">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-zinc-500">{m.hint}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Code Snippet */}
            {activeTab === 'code' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 bg-black/60 px-4 py-2 rounded-t-lg border border-white/10 border-b-0">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-cyan-400" />
                    <span>production_inference.py</span>
                  </div>
                  <span className="text-zinc-500">Python 3.11 / TensorRT</span>
                </div>
                <pre className="p-4 rounded-b-lg bg-[#07080e] border border-white/10 text-xs font-mono text-cyan-200 overflow-x-auto leading-relaxed">
                  <code>{selectedProject.codeSnippet}</code>
                </pre>
              </div>
            )}

            {/* Tab 3: Execution Lifecycle */}
            {activeTab === 'flow' && (
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 font-mono mb-2">
                  Step-by-Step Distributed Pipeline
                </h4>
                <div className="space-y-3">
                  {selectedProject.flowSteps.map((flow, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-4"
                    >
                      <div className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-bold whitespace-nowrap">
                        {flow.step}
                      </div>
                      <div className="text-xs sm:text-sm text-zinc-300">{flow.detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between flex-wrap gap-4">
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-medium text-white bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
              >
                Dismiss Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
