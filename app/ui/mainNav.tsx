import Image from 'next/image';
import logo from '../../public/logo.svg';
import CtaButton from './ctaButton';

function Logo() {
  return (
    <div className="flex">
      <Image
        src={logo}
        alt="wheat leads logo"
        height="51"
        width="45"
        className="mr-2"
      />
      <h1 className="text-[32px] font-light text-neutral-dark">
        <span className="font-bold text-primary-dark">Wheat </span>Leads
      </h1>
    </div>
  );
}

export default function MainNav() {
  return (
    <nav className="flex w-full items-center justify-between">
      <Logo />
      <ul className="flex">
        <li className="mr-7 font-bold text-primary-dark">Inicio</li>
        <li className="mr-7">Sobre nosotros</li>
        <li>Propuesta</li>
      </ul>
      <CtaButton>Contratar ahora</CtaButton>
    </nav>
  );
}
