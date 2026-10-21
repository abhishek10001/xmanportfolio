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
  openGraph: {
    title: "Abhishek Gangwar | Lead AI & Inference Engineer Portfolio",
    description: "Portfolio of Abhishek Gangwar — Senior AI Engineer specializing in LLM Fine-Tuning, Low-Latency Speculative Decoding, Autonomous Agentic Systems, and High-Throughput Inference Architectures.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08090d",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#08090d] text-zinc-100">
        {children}
      </body>
    </html>
  );
}
