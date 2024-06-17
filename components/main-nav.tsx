'use client';

import { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/logo.svg';
import logoMobile from '@/public/logo-mobile.svg';
import CtaButton from './ui/cta-button';
import Link from 'next/link';

function Logo() {
  return (
    <div className="flex items-center">
      <Image
        src={logo}
        alt="wheat leads logo"
        height="51"
        width="45"
        className="mr-2 hidden lg:block"
      />
      <Image
        src={logoMobile}
        alt="wheat leads logo"
        height="51"
        width="45"
        className="mr-2 block lg:hidden"
      />
      <h1 className="hidden text-[32px] font-light text-neutral-dark lg:block">
        <span className="font-bold text-primary-dark">Wheat </span>Leads
      </h1>
    </div>
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
  return (
    <div
      className={`absolute left-0 top-[6.8rem] w-full bg-primary-dark shadow-lg ${isOpen ? 'block' : 'hidden'}`}
    >
      <ul className="flex flex-col items-center p-4 text-[white]">
        <li className="mb-4 font-bold">Inicio</li>
        <li className="mb-4">Sobre nosotros</li>
        <li className="mb-4">
          <Link href="#contact">Propuesta</Link>
        </li>
        <CtaButton className="border border-solid border-[white]">
          Contratar ahora
        </CtaButton>
      </ul>
    </div>
  );
}

export default function MainNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative flex w-full items-center justify-between bg-primary-dark px-4 py-[33px] lg:bg-transparent lg:py-[10px]">
      <Logo />
      <ul className="hidden lg:flex">
        <li className="mr-7 font-bold text-primary-dark">Inicio</li>
        <li className="mr-7">Sobre nosotros</li>
        <li>
          <Link href="#contact">Propuesta</Link>
        </li>
      </ul>
      <CtaButton className="hidden lg:block">Contratar ahora</CtaButton>
      <HamburgerMenu onClick={toggleMenu} />
      <MobileMenu isOpen={menuOpen} />
    </nav>
  );
}
