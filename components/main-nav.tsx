'use client';

import { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import logoMobile from '@/public/logo-mobile.svg';
import CtaButton from './ui/cta-button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Logo() {
  return (
    <Link href="/" className="flex cursor-pointer items-center">
      <Image
        src={logo}
        alt="wheat leads logo"
        height={44}
        width={245}
        className="mr-2 hidden size-auto h-[44px] w-[245px] lg:block"
      />
      <Image
        src={logoMobile}
        alt="wheat leads logo"
        height={51}
        width={45}
        className="mr-2 block size-auto lg:hidden"
      />
    </Link>
  );
}

function HamburgerMenu({
  onClick,
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div className="lg:hidden">
      <button
        onClick={onClick}
        className="flex size-8 flex-col items-end justify-center"
        aria-label="menu"
        type="button"
      >
        <span className="mb-1 block h-[2.5px] w-6 bg-[white]" />
        <span className="mb-1 block h-[2.5px] w-[18px] bg-[white]" />
        <span className="block h-[2.5px] w-[10px] bg-[white]" />
      </button>
    </div>
  );
}

function MobileMenu({ isOpen }: { isOpen: boolean }) {
  const NavLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre nosotros', path: '/about' },
    { name: 'Propuesta', path: '/proposal' },
  ];
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  return (
    <div
      className={`absolute left-0 top-[4.8rem] w-full bg-primary-dark shadow-lg ${isOpen ? 'block' : 'hidden'}`}
    >
      <ul className="flex flex-col items-center p-4 text-[white]">
        {NavLinks.map((link) => {
          return (
            <li
              key={link.path}
              className={`mb-4 ${isActive(link.path) && 'font-bold'}`}
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          );
        })}
        <Link href="#contact">
          <CtaButton className="border border-solid border-[white]">
            Contratar ahora
          </CtaButton>
        </Link>
      </ul>
    </div>
  );
}

function DesktopMenu() {
  const NavLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Sobre nosotros', path: '/about' },
    { name: 'Propuesta', path: '/proposal' },
  ];
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  return (
    <ul className="hidden lg:flex">
      {NavLinks.map((link) => {
        return (
          <li
            key={link.path}
            className={`mr-7 ${isActive(link.path) && 'font-bold text-primary-dark'}`}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function MainNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex w-full justify-center bg-primary-dark lg:bg-[#f6f6f6]">
      <nav className="relative z-20 flex w-full max-w-screen-xl items-center justify-between px-4 py-[17px]">
        <Logo />
        <DesktopMenu />
        <Link href="#contact">
          <CtaButton className="hidden lg:block">Contratar ahora</CtaButton>
        </Link>
        <HamburgerMenu onClick={toggleMenu} />
        <MobileMenu isOpen={menuOpen} />
      </nav>
    </div>
  );
}
