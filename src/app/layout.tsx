import './globals.css';
import type { ReactNode } from 'react';
import { raleway } from '@/fonts';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={`${raleway.variable} dark`}>
      <body>{children}</body>
    </html>
  );
}
