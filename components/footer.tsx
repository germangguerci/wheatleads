import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/logo-dark.svg';

function Logo() {
  return (
    <Image
      src={logo}
      alt="wheat leads logo"
      height={43}
      className="mb-9 mr-2 max-lg:mb-4 max-lg:mr-0"
    />
  );
}

export default function Footer() {
  return (
    <footer className="flex w-full flex-col justify-center bg-[#161c28] text-white">
      <div className="flex w-full justify-center  pb-[64px] pt-[82px]">
        <div className="flex w-full max-w-[1080px] flex-col items-center">
          <div className="mb-[64px] flex w-full justify-between max-lg:flex-col">
            <div className="mb-8 flex flex-col items-start max-lg:items-center">
              <Logo />
              <div className="flex flex-col">
                <p className="mb-4 leading-[30px]">
                  Contáctanos a info@wheatleads.com
                </p>
                <p className="mb-4 leading-[30px]">+54 9 11 3668 2382</p>
                <p className="leading-[30px]">Buenos Aires, Argentina</p>
              </div>
            </div>
            <div className="flex flex-col max-lg:items-center">
              <h1 className="mb-[29px] font-bold max-lg:mb-[18px]">
                Mapa del sitio
              </h1>
              <Link className="mb-[18px]" href="/">
                Inicio
              </Link>
              <Link className="mb-[18px]" href="/about">
                Sobre nosotros
              </Link>
              <Link className="mb-[18px]" href="/#contact">
                Propuesta
              </Link>
            </div>
          </div>
          <div className="flex w-full justify-start max-lg:justify-center max-lg:text-center">
            <p>© 2024 Wheatleads. Copyright and rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
