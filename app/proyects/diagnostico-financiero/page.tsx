import { Button } from '@/components/ui/button';
import df from '../../../public/diagnostico-financiero.png';
import Image from 'next/image';
import { Marquee } from '@/components/ui/marquee';
import d1 from '../../../public/df1.png';
import d2 from '../../../public/df2.png';
import d3 from '../../../public/df3.png';
import d4 from '../../../public/df4.png';
import gant from '../../../public/gant.png';
import d5 from '../../../public/df5.png';

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
      <article className="mb-[84px] flex max-w-[1077px] text-[22px] font-normal leading-[27px] max-lg:mx-4 max-lg:mb-8 max-lg:flex-col max-lg:text-[18px] max-lg:leading-[22px]">
        <div className="mr-[108px] flex flex-col max-lg:mb-0">
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
      </article>
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
      <article className="mb-[142px] flex w-full max-w-[1072px] justify-between max-lg:hidden">
        <Image
          src={d1}
          alt="imagen aplicacion diagnostico financiero"
          width={243}
          height={491}
          className="h-[491px] w-[243px]"
        />
        <Image
          src={d2}
          alt="imagen aplicacion diagnostico financiero"
          width={243}
          height={491}
          className="h-[491px] w-[243px]"
        />
        <Image
          src={d3}
          alt="imagen aplicacion diagnostico financiero"
          width={243}
          height={491}
          className="h-[491px] w-[243px]"
        />
        <Image
          src={d4}
          alt="imagen aplicacion diagnostico financiero"
          width={243}
          height={491}
          className="h-[491px] w-[243px]"
        />
      </article>
      <section className="mb-[109px] flex w-full justify-center rounded-[183px] bg-primary-dark px-[102px] py-[142px] text-[#fcfcfc] max-lg:mb-8 max-lg:rounded-[50px] max-lg:px-[24px] max-lg:py-[50px]">
        <article className="flex w-full max-w-[1072px] flex-col">
          <div className="mb-[131px] flex w-full max-lg:mb-8 max-lg:flex-col max-lg:text-[18px]">
            <div className="mr-[109px] flex w-full flex-col text-[22px] font-normal leading-[27px] max-lg:text-[18px] max-lg:leading-[22px]">
              <h1 className="mb-8 text-[52px] font-semibold max-lg:mb-4 max-lg:text-[24px]">
                El proceso
              </h1>
              <p>
                Buscamos formas, diseñamos estrategias y cumplimos objetivos{' '}
              </p>
            </div>
            <p>
              Para esta propuesta trabajamos con un gantt ágil que nos permitió
              pasar por las 3 áreas que el proyecto contemplaba.
              <br />
              <br />
              La oferta diferencial estuvo en trabajar con la base de datos de
              clientes y sus campañas existentes, de manera tal, que pudimos
              auditar las performance de cada plataforma. De esta manera,
              logramos crear un mapeo de todo el panorama medido para entender
              cada etapa del embudo de conversión.
              <br />
              <br />
              Luego, pasamos a la fase de diseño de experiencia abordando el
              contenido de forma personalizada sobre cada respuesta para derivar
              al usuario en la etapa que calificaba.
              <br />
              <br />
              Finalmente, desarrollamos la interfaz del flujo que validamos con
              el cliente para hacer las pruebas correspondientes sobre las
              integraciones, lanzamos el MVP y medimos resultados.
            </p>
          </div>
          <Image
            src={gant}
            alt="imagen diagrama gant"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="h-[517px] w-[1072px] max-lg:h-[141px] max-lg:w-[295px]"
          />
        </article>
      </section>
      <article className="mb-[84px] flex max-w-[1077px] flex-col text-[22px] font-normal leading-[27px] max-lg:mx-4 max-lg:mb-8 max-lg:text-[18px] max-lg:leading-[22px]">
        <div className="mb-[35px] flex w-full max-lg:flex-col">
          <div className="mr-4 flex flex-col lg:min-w-[441px]">
            <h1 className="mb-8 text-[52px] font-semibold leading-[65px] max-lg:mb-4 max-lg:text-[24px]">
              Diseñando la experiencia
            </h1>
            <p className="max-lg:mb-8">
              Ideando la mejor forma de adquirir datos cualitativos para
              clasificar a nuestro lead.
            </p>
          </div>
          <p>
            El objetivo de esta etapa fue el de investigar los datos existentes
            sobre los abandonos, la cantidad de información que se recabó previo
            al proyecto y la calidad de los leads de base para mejorar el flujo
            de navegación.
            <br />
            <br />
            De esta manera, logramos crear una experiencia de navegación acorde
            a la necesidad del cliente y a su objetivo de negocio.
            <br />
            <br />
            Finalmente, el funnel de clasificación de leads se vió representado
            en cada pantalla, obteniendo sobre el final del flujo, una base de
            contactos más limpia y ajustada al producto que Actinver vendía.
          </p>
        </div>
        <Image
          src={d5}
          alt="imagen aplicacion diagnostico financiero"
          width={1072}
          height={474}
          className="h-[474px] w-[1072px]"
        />
      </article>
    </main>
  );
}
