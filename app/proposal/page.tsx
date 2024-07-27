import CtaButton from '@/components/ui/cta-button';
import Image from 'next/image';
import Contact from '@/components/contact';
import Formats from './formats';
import succesCase from '../../public/case.png';

export default function Proposal() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#fcfcfc]">
      <div className="flex max-w-[1082px] items-center justify-center max-lg:p-4">
        <div className="my-[100px] flex w-full items-center justify-between max-lg:my-[32px] max-lg:flex-col-reverse">
          <div className="flex flex-col items-start">
            <h1 className="mb-8 text-[28px] font-normal text-primary-dark max-lg:text-[18px]">
              Caso de éxito
            </h1>
            <p className="mb-8 text-[32px] font-semibold leading-[40px] text-neutral-dark max-lg:text-[24px] max-lg:leading-[30px]">
              En México transformamos la forma de adquirir clientes y de dar
              préstamos con Banco Actinver.
            </p>
            <CtaButton>Conocer proyecto</CtaButton>
          </div>
          <Image
            alt="mobile-app"
            src={succesCase}
            height={317}
            width={578}
            className="mr-[34px] h-[317px] w-[578px] max-lg:mb-[33px] max-lg:h-[152px] max-lg:w-[277px]"
          />
        </div>
      </div>
      <p className="mb-[92px] max-w-[898px] text-center text-[32px] max-lg:mb-8 max-lg:p-4 max-lg:text-[18px]">
        Maximiza la calidad de tus leads con estos efectivos formatos.
      </p>
      <Formats />
      <Contact />
    </div>
  );
}
