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
// Previously missing `default` export caused: Type \'typeof import(\"/workspace/repo/src/app/layout\")\' does not satisfy the constraint \'LayoutConfig<\"/\">\'. Property \'default\' is missing...', 'package.json': '{
  "name": "abhishek-gangwar-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "lucide-react": "^1.61.0",
    "next": "16.4.2",
    "react": "19.3.0",
    "react-dom": "19.3.0"
  },
  "devDependencies": {
    "@tailwindcss/turbopack": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.4.2",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}', 'src/components/Navbar.tsx': 