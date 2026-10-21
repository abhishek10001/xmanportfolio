export const metadata = {
  title: 'Abhishek Gangwar | AI Engineering & Research Portfolio',
  description: 'Lead AI & Inference Engineer specializing in LLM Fine-Tuning, Quantized Speculative Decoding, and Distributed Multi-Agent Systems.',
};

import './globals.css';
import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#08090d] text-zinc-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
