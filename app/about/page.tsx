import circleStack from '../../public/circle-stack.svg';
import paintBrush from '../../public/paint-brush.svg';
import starIcon from '../../public/star-icon.svg';
import lightBulb from '../../public/light-bulb.svg';
import commandLine from '../../public/command-line.svg';
import IconCard from '@/components/icon-card';
import code from '../../public/code-bracket-square.svg';
import Card from '@/components/ui/card';
import one from '../../public/about-1.svg';
import two from '../../public/about-2.svg';
import three from '../../public/about-3.svg';
import Contact from '@/components/contact';
import woman from '../../public/woman.svg';
import man from '../../public/man.svg';
import Image from 'next/image';

export default function About() {
  return (
    <main className="flex w-full flex-col items-center justify-center bg-[#f3f3f3]">
      <header className="flex w-full flex-col items-center justify-center rounded-br-[300px] bg-[#1c1e19] max-lg:rounded-br-[100px]">
        <section className="relative flex w-full max-w-[1080px] flex-col items-center justify-center text-[#E7ECF3] max-lg:items-start max-lg:py-8">
          <h2 className="mb-[245px] mt-[224px] max-w-screen-sm text-center text-[32px] leading-[40px] max-lg:mb-[50px] max-lg:mt-0 max-lg:px-4 max-lg:text-left max-lg:text-[24px] max-lg:leading-[30px]">
            Sabemos cómo poner el foco sobre la clasificación del usuario y
            <span className="font-bold">
              {' '}
              optimizamos la adquisición de los perfiles que mejor funcionan
              para tu negocio
            </span>
          </h2>
          <Image
            src={man}
            alt="man ilustration"
            className="absolute left-[-50px] top-[40px] h-auto max-lg:hidden"
          />
          <Image
            src={woman}
            alt="woman ilustration"
            className="absolute right-[-50px] top-[40px] h-auto w-[375px] max-lg:hidden"
          />
          <div className="mb-[91px] flex w-full justify-between max-lg:flex-col">
            <h1 className="max-w-[441px] text-[36px] font-bold leading-[45px] max-lg:mb-4 max-lg:px-4 max-lg:text-[24px] max-lg:leading-[30px]">
              Conoce los perfiles de este equipo ganador
            </h1>
            <p className="max-w-[542px] text-[26px] leading-[32px] max-lg:px-4 max-lg:text-[18px] max-lg:leading-[22px]">
              Somos los especialistas que necesitas para optimizar todos tus
              canales de difusión y atracción de clientes.
            </p>
          </div>
          <div className="mb-[38px] flex w-full justify-start max-lg:mb-0 max-lg:flex-col max-lg:px-4">
            <IconCard
              image={code}
              className="mr-4 max-lg:mb-4 max-lg:mr-0"
              title="Full Stack Developer"
            />
            <IconCard
              image={circleStack}
              className="mr-4 max-lg:mb-4 max-lg:mr-0"
              title="Specialist of data"
            />
            <IconCard
              image={commandLine}
              title="Tech lead"
              className="max-lg:mb-4"
            />
          </div>
          <div className="flex w-full justify-end pb-[109px] max-lg:flex-col max-lg:px-4 max-lg:pb-[54px]">
            <IconCard
              image={lightBulb}
              className="mr-4 max-lg:mb-4 max-lg:mr-0"
              title="Product Designer"
            />
            <IconCard
              image={paintBrush}
              className="mr-4 max-lg:mb-4 max-lg:mr-0"
              title="UX/UI Designer"
            />
            <IconCard image={starIcon} title="Content Strategy" />
          </div>
        </section>
      </header>
      <section className="relative flex w-full max-w-[1080px] flex-col items-center pt-[100px] max-lg:px-4 max-lg:pt-[70px]">
        <article className="flex flex-col items-center">
          <p className="text-[28px] leading-[35px] text-[#191A15] max-lg:text-[18px] max-lg:leading-[23px]">
            Al trabajar con nuestro equipo tendrás la oportunidad de ser parte
            de él y ayudarnos a crear una solución conjunta. Es por eso, que tu{' '}
            <span className="font-bold">
              serás una pieza clave en el proceso de validación y nuestro faro
              en la visión de tu marca.
            </span>
          </p>
        </article>
        <article className="mb-[105px] mt-8 flex w-full flex-col">
          <div className="flex w-full max-lg:flex-col">
            <Card
              image={one}
              className="mb-4 mr-4 max-w-full max-lg:mr-0"
              wImage={483}
              title="Somo ágiles"
              description="La rapidez no da resultados, pero sí el orden y el cumplimiento de tareas. Por eso para ser eficientes en la gestión del tiempo, evitamos las reuniones innecesarias."
            />
            <Card
              image={two}
              wImage={496}
              className="max-w-full"
              title="100% autónomos"
              description="Parte de hacer bien nuestro trabajo es que vos puedas verlo siempre. Nos encanta que seas parte de un tablero de seguimiento para que veas por dónde estamos cosechando."
            />
          </div>
          <Card
            className="mt-4 max-w-full"
            image={three}
            wImage={998}
            title="Más resolutivos"
            description="Damos las mejores batallas ante las ejecuciones que requieren de muchas opiniones. Por eso, trabajamos siempre a favor de la performance."
          />
        </article>
      </section>
      <footer>
        <Contact />
      </footer>
    </main>
  );
}
