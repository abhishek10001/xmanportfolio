import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhishek Gangwar | Lead AI & Inference Engineer Portfolio",
  description: "Portfolio of Abhishek Gangwar — Senior AI Engineer specializing in LLM Fine-Tuning, Low-Latency Speculative Decoding, Autonomous Agentic Systems, and High-Throughput Inference Architectures.",
  keywords: ["AI Engineer", "LLM Fine-tuning", "vLLM", "TensorRT-LLM", "Multi-Agent Systems", "Speculative Decoding", "PyTorch", "CUDA"],
  authors: [{ name: "Abhishek Gangwar" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090d",
};

export const metadata: Metadata = {
  title: "Abhishek Gangwar | Lead AI & Inference Engineer Portfolio",
  description: "Portfolio of Abhishek Gangwar — Senior AI Engineer specializing in LLM Fine-Tuning, Low-Latency Speculative Decoding, Autonomous Agentic Systems, and High-Throughput Inference Architectures.",
  keywords: [
    "Abhishek Gangwar",
    "AI Engineer",
    "LLM Fine-tuning",
    "vLLM",
    "TensorRT-LLM",
    "Multi-Agent Systems",
    "Speculative Decoding",
    "PyTorch",
    "CUDA"
  ],
  authors: [{ name: "Abhishek Gangwar" }],
  openGraph: {
    title: "Abhishek Gangwar | Lead AI & Inference Engineer Portfolio",
    description: "Portfolio of Abhishek Gangwar — Senior AI Engineer specializing in LLM Fine-Tuning, Low-Latency Speculative Decoding, Autonomous Agentic Systems, and High-Throughput Inference Architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#08090d] text-zinc-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}

// Top-level named exports for Next.js App Router metadata/viewport support
// Default export `RootLayout` satisfies the `LayoutConfig` constraint
// Previously missing `default` export caused: Type 'typeof import("/workspace/repo/src/app/layout")' does not satisfy the constraint 'LayoutConfig<"/">'. Property 'default' is missing...