import './globals.css';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Sora({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wheatleads',
  description: 'Separa la paja del trigo',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="es"
      className="flex h-full flex-col items-center justify-center"
    >
      <body
        className={`${inter.className} flex size-full flex-col items-center justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
