import Image from 'next/image';

import formBgDecoration from '../public/bg-t-decoration.svg';
import cellphone from '../public/cellphone.svg';
import { ContactForm } from '@/components/contact-form';
import CtaButton from './ui/cta-button';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-[1] flex w-full justify-center rounded-t-[50px] bg-[#2D2D2D] px-[100px] py-[127px] text-[18px] leading-[22px] text-[#F9F8FE] max-lg:rounded-t-[16px] max-lg:bg-[#191A15] max-lg:px-4 max-lg:pt-8"
    >
      <Image
        src={formBgDecoration}
        alt="background decoration"
        width={1920}
        className="absolute left-0 top-0 z-[2] w-full max-lg:hidden"
      />
      <div className="z-[3] flex w-full max-w-[1080px] flex-col">
        <h1 className="text-center text-[50px] font-bold leading-[73px] max-lg:text-left max-lg:text-[28px] max-lg:leading-[32px]">
          Nos adaptamos a la necesidad de tu negocio, hablemos.
        </h1>
        <p className="pb-[84px] pt-[38px] text-center  max-lg:text-left">
          Sabemos que cada producto tiene sus desafíos y estructuras existente
          para la adquisición, por eso, nuestra oferta se ajusta a tus
          objetivos.
        </p>
        <div className="flex w-full justify-between max-lg:flex-col max-lg:items-center">
          <div className="flex h-full min-h-[458px] flex-col items-center justify-between">
            <Image
              src={cellphone}
              alt="place holder"
              width={326}
              height={326}
            />
            <p>Solicita tu cotización por WhatsApp</p>
            <CtaButton className="w-full max-w-[201px] px-[30px] py-[20px] text-[17px]">
              Contratar ahora
            </CtaButton>
          </div>
          <div className="flex flex-col items-center justify-around max-lg:flex-row max-lg:py-[40.5px]">
            <div className="h-[204px] w-px bg-neutral-light max-lg:h-px max-lg:w-[120px]" />
            <span className="text-[14px]">O</span>
            <div className="h-[204px] w-px bg-neutral-light max-lg:h-px max-lg:w-[120px]" />
          </div>
          <div className="flex max-w-[440px] flex-col">
            <p className="pb-[17px]">
              Puedes compartir tus datos para que te contactemos a la brevedad
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
