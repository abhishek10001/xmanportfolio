import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abhishek Gangwar - Lead AI Engineer',
  description: 'Distributed AI systems, speculative decoding, and autonomous agents.',
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
