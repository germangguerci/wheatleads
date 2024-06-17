import logo from '@/public/logo-mobile.svg';
import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <div className="mb-8 flex items-center max-lg:mb-4">
      <Image
        src={logo}
        alt="wheat leads logo"
        height={43}
        width={43}
        className="mr-2 hidden lg:block"
      />
      <h1 className="text-[32px] font-light text-neutral-light">
        <span className="font-bold text-[#54BD95]">Wheat</span>Leads
      </h1>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="flex w-full justify-center bg-[#161C28] px-[100px] pb-[64px] pt-[82px] text-white max-lg:px-4 max-lg:pb-[64px] max-lg:pt-[32px]">
      <div className="flex w-full max-w-[1080px] flex-col">
        <div className="mb-[64px] flex w-full justify-between max-lg:flex-col">
          <div className="mb-8 flex flex-col items-start max-lg:items-center">
            <Logo />
            <div className="flex flex-col">
              <p className="mb-4 leading-[30px]">
                Escíbenos a info@wheatleads.com
              </p>
              <p className="mb-4 leading-[30px]">+54 9 11 3668 2382</p>
              <p className="leading-[30px]">Buenos Aires, Argentina</p>
            </div>
          </div>
          <div className="flex flex-col max-lg:items-center">
            <h3 className="mb-[29px] font-bold max-lg:mb-[18px]">
              Mapa del sitio
            </h3>
            <Link className="mb-[18px]" href="#home">
              Inicio
            </Link>
            <Link className="mb-[18px]" href="#contact">
              Propuesta
            </Link>
          </div>
        </div>
        <div className="flex w-full justify-start max-lg:justify-center max-lg:text-center">
          <p>© 2024 Wheatleads. Copyright and rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
