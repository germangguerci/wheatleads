import { Button } from '@/components/ui/button';
import df from '../../../public/diagnostico-financiero.png';
import Image from 'next/image';
import { Marquee } from '@/components/ui/marquee';

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
      <div className="mb-[84px] flex max-w-[1077px] text-[22px] font-normal leading-[27px] max-lg:mx-4 max-lg:mb-8 max-lg:flex-col max-lg:text-[18px] max-lg:leading-[22px]">
        <div className="mr-[108px] flex flex-col">
          <h1 className="mb-8 text-[52px] font-semibold leading-[65px] max-lg:mb-4 max-lg:text-[24px]">
            Sobre el proyecto
          </h1>
          <p className="max-lg:mb-8">
            Proponiendo una forma más eficiente de adquirir clientes de calidad
          </p>
        </div>
        <p>
          Actinver tenía la necesidad de crear una experiencia de adquisición
          más personalizada. Entonces, con el objetivo de captar clientes que
          estén bien calificados fue que creamos esta solución medida al 100%.
          <br />
          <br />
          El desafío estuvo en unir todas las partes del proyecto para colaborar
          con dos métricas principales: el costo por lead calificado y su
          conversión a futuro.
          <br />
          <br />
          Esto debía reflejarse en un flujo de pantallas para que estimulen a
          las personas a dejar datos suficientes para clasificar a cada
          potencial cliente.
        </p>
      </div>
      <div className="mb-[142px] flex w-full max-w-[1072px] flex-col max-lg:mb-8">
        <Marquee className="mb-6 [--duration:20s] max-lg:mb-4" fade>
          <Button
            variant="outline"
            className="h-[72px] rounded-[40px] border-solid border-primary-dark px-4 py-8 text-[32px] font-medium text-primary-dark max-lg:h-[55px] max-lg:py-6 max-lg:text-[18px]"
          >
            Estrategia de diseño
          </Button>
          <Button
            variant="outline"
            className="h-[72px] rounded-[40px] border-solid border-primary-dark px-4 py-8 text-[32px] font-medium text-primary-dark max-lg:h-[55px] max-lg:py-6 max-lg:text-[18px]"
          >
            FullStack
          </Button>
          <Button
            variant="outline"
            className="h-[72px] rounded-[40px] border-solid border-primary-dark px-4 py-8 text-[32px] font-medium text-primary-dark max-lg:h-[55px] max-lg:py-6 max-lg:text-[18px]"
          >
            Experiencia de usuario
          </Button>
          <Button
            variant="outline"
            className="h-[72px] rounded-[40px] border-solid border-primary-dark px-4 py-8 text-[32px] font-medium text-primary-dark max-lg:h-[55px] max-lg:py-6 max-lg:text-[18px]"
          >
            Diseño UX/UI
          </Button>
        </Marquee>
        <Marquee className="[--duration:20s]" fade reverse>
          <Button
            variant="outline"
            className="h-[72px] rounded-[40px] border-solid border-primary-dark px-4 py-8 text-[32px] font-medium text-primary-dark max-lg:h-[55px] max-lg:py-6 max-lg:text-[18px]"
          >
            Identidad visual
          </Button>
          <Button
            variant="outline"
            className="h-[72px] rounded-[40px] border-solid border-primary-dark px-4 py-8 text-[32px] font-medium text-primary-dark max-lg:h-[55px] max-lg:py-6 max-lg:text-[18px]"
          >
            Integración con CRM
          </Button>
          <Button
            variant="outline"
            className="h-[72px] rounded-[40px] border-solid border-primary-dark px-4 py-8 text-[32px] font-medium text-primary-dark max-lg:h-[55px] max-lg:py-6 max-lg:text-[18px]"
          >
            Redacción de textos publicitarios
          </Button>
          <Button
            variant="outline"
            className="h-[72px] rounded-[40px] border-solid border-primary-dark px-4 py-8 text-[32px] font-medium text-primary-dark max-lg:h-[55px] max-lg:py-6 max-lg:text-[18px]"
          >
            Integración analytics
          </Button>
        </Marquee>
      </div>
    </main>
  );
}
