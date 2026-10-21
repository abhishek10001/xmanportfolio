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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090d",
};

export const metadata: Metadata = {
  title: "Alexander Chen | Lead AI & Inference Engineer Portfolio",
  description: "Portfolio of Alexander Chen — Senior AI Engineer specializing in LLM Fine-Tuning, Low-Latency Speculative Decoding, Autonomous Agentic Systems, and High-Throughput Inference Architectures.",
  keywords: ["AI Engineer", "LLM Fine-tuning", "vLLM", "TensorRT-LLM", "Multi-Agent Systems", "Speculative Decoding", "PyTorch", "CUDA"],
  authors: [{ name: "Alexander Chen" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
