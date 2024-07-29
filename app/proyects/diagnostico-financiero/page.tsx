import { Button } from '@/components/ui/button';
import df from '../../../public/diagnostico-financiero.png';
import Image from 'next/image';

export default function DiagnosticoFinanciero() {
  return (
    <main className="flex w-full flex-col items-center justify-center bg-[#fcfffd]">
      <header className="mb-16 flex w-full justify-center rounded-b-[250px] bg-primary-dark py-[64px] max-lg:mb-8 max-lg:rounded-b-[50px] max-lg:px-4 max-lg:py-8">
        <section className="flex max-w-[1077px] items-center justify-center max-lg:flex-col-reverse">
          <div className="mr-[83px] flex-col text-[#fcfcfc]">
            <h1 className="mb-8 text-[28px] font-normal max-lg:mb-6 max-lg:mt-8 max-lg:text-[18px]">
              Banco Actinver
            </h1>
            <p className="mb-8 text-[32px] font-semibold leading-[40px] max-lg:mb-6 max-lg:text-[24px] max-lg:leading-[30px]">
              Empieza a dar préstamos bancarios a clientes calificados que valen
              oro para la industria.
            </p>
            <Button
              variant="outline"
              className="h-[62px] rounded-[40px] px-[30px] py-[20px] text-[18px] font-medium"
            >
              Ver en vivo
            </Button>
          </div>
          <Image
            quality={100}
            src={df}
            width={438}
            height={511}
            className="h-[511px] w-[438px] max-lg:h-[258px] max-lg:w-[228px]"
            alt="celular mostrando sitio web diagnostico financiero, actinver"
          />
        </section>
      </header>
    </main>
  );
}
