import CtaButton from '@/components/ui/cta-button';
import sample from '../../public/cardholder.svg';
import Image from 'next/image';

export default function Proposal() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#fcfcfc]">
      <div className="flex max-w-[1082px] items-center justify-center">
        <div className="my-[100px] flex w-full max-w-[1052px] items-center justify-between">
          <Image
            alt="mobile-app"
            src={sample}
            height={472}
            width={472}
            className="mr-[34px] size-[472px]"
          />
          <div className="flex flex-col items-start">
            <h1 className="mb-8 text-[28px] font-normal text-primary-dark">
              Caso de éxito
            </h1>
            <p className="mb-8 text-[32px] leading-[40px] text-neutral-dark">
              En México transformamos la forma de adquirir clientes y de dar
              préstamos con Banco Actinver.
            </p>
            <CtaButton>Conocer proyecto</CtaButton>
          </div>
        </div>
      </div>
      <h2 className="mb-[92px] max-w-[898px] text-center text-[32px]">
        Haz que tu negocio tenga una buena temporada de cosecha con todos estos
        formatos.
      </h2>
    </div>
  );
}
