import './globals.css';
import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import type { ReactNode } from 'react';
import MainNav from '../components/main-nav';
import Footer from '@/components/footer';

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
    <html lang="es" className="flex flex-col items-center justify-center">
      <body
        className={`${inter.className} flex w-full flex-col items-center justify-center`}
      >
        <header className="flex w-full">
          <MainNav />
        </header>
        <main className="flex size-full flex-col items-center justify-start p-0 text-[#191A15]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
