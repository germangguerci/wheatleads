import Image from 'next/image';
import underline from '../public/underline.svg';
import demoApp from '../public/demoapp.gif';
import CtaButton from '../components/ui/cta-button';
import sceneOne from '../public/ilustracion-1.svg';
import sceneTwo from '../public/ilustracion-2.svg';
import sceneThree from '../public/ilustracion-3.svg';
import sceneFour from '../public/ilustracion-4.svg';
import Card from '../components/ui/card';
import check from '../public/check.svg';
import data from '../public/data.svg';
import star from '../public/star.svg';
import code from '../public/code.svg';
import ux from '../public/ilustracion-ux.svg';
import cpg from '../public/ilustracion-cpg.svg';
import cc from '../public/ilustracion-cc.svg';
import dev from '../public/ilustracion-dev.svg';
import easy from '../public/easy.svg';
import bg1 from '../public/bg-1-total.svg';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <div
      id="home"
      className="mt-[96px] flex w-full max-w-[1080px] flex-col items-center justify-center max-lg:m-0 max-lg:max-w-[530px] max-lg:pt-8"
    >
      <div className="flex w-full flex-col max-lg:px-[14px]">
        <div className="flex w-full items-end justify-between max-lg:flex-col max-lg:items-center max-lg:justify-center">
          <div className="flex w-full max-w-[530px] flex-col items-start justify-start">
            <h1 className="text-[46px] font-bold leading-[57px] text-[#191A15] max-lg:text-[28px] max-lg:leading-[35px]">
              Separamos la paja del trigo,{' '}
              <span className="text-primary-dark">
                cosechando Leads de Calidad
              </span>
            </h1>
            <Image
              src={underline}
              alt="Decoracion de titulo"
              width={340}
              height={25}
              className="hidden lg:block"
            />
            <Image
              src={underline}
              alt="Decoracion de titulo"
              width={225}
              height={16}
              className="hidden max-lg:block"
            />
            <p className="my-[38px] text-[28px] font-light leading-[35px] max-lg:mb-[32px] max-lg:mt-[38px] max-lg:text-[18px] max-lg:leading-[23px]">
              Optimiza el dinero de tus campañas enfocándolas en el mejor perfil
              de cliente para tu negocio.
            </p>
            <CtaButton className="w-[242px]">Contratar ahora</CtaButton>
          </div>
          <Image
            src={sceneOne}
            alt="lead filter"
            width={440}
            height={397}
            className="max-lg:hidden"
          />
        </div>
        <p
          className="mb-[108px] mt-[116px] w-full max-w-[898px] text-center text-[28px] font-normal max-lg:my-[64px]
        max-lg:text-left max-lg:text-[18px]"
        >
          Las campañas publicitarias suelen optimizarse por el costo de los
          leads,
          <span className="font-bold text-primary-dark">
            {' '}
            solamente analizando cuánto nos cuesta que alguien nos deje sus
            datos de contacto.
          </span>
        </p>
        <div className="mb-[62px] flex w-full items-center justify-between max-lg:mb-0 max-lg:flex-col-reverse">
          <p className="max-w-[592px] text-[26px] font-normal max-lg:my-8 max-lg:text-[18px]">
            Encontramos la forma de optimizar las campañas en función del
            perfil, no cambiando las campañas o anuncios, sino cambiando el
            destino del tráfico generado
          </p>
          <Image src={sceneTwo} alt="place holder" width={391} height={352} />
        </div>
        <div className="mb-[62px] flex w-full items-center  justify-between max-lg:my-8 max-lg:flex-col">
          <Image src={sceneThree} alt="place holder" width={390} height={352} />
          <p className="max-w-[592px] text-[26px] font-normal max-lg:my-8 max-lg:text-[18px]">
            También te ayudamos a mejorar las campañas en todas tus redes
            sociales con conversiones inteligentes que capturen ese perfil que
            estás buscando.
          </p>
        </div>
        <div className="mb-[118px] flex w-full items-center justify-between max-lg:mb-0 max-lg:flex-col-reverse">
          <p className="text-[26px] font-normal max-lg:my-8 max-lg:text-[18px]">
            Finalmente, almacenamos tus leads en un CRM para que puedas
            consultar los reportes de forma fácil, rápida y eficiente.
          </p>
          <Image src={sceneFour} alt="place holder" width={526} height={352} />
        </div>
        <div className="flex w-full items-center justify-center rounded-xl p-[71px] max-lg:p-0 lg:relative lg:z-[-2] lg:mb-[54px] lg:bg-[#fcfcfc]">
          <Image
            src={bg1}
            alt="background decoration"
            width={1280}
            className="absolute left-0 top-[-380px] z-[-1] max-lg:hidden"
          />
          <Image
            src={demoApp}
            alt="Demo onboarding"
            width={590}
            height={590}
            className="max-lg:hidden"
          />
          <div className="ml-28 mt-[180px] flex w-full flex-col items-start justify-start max-lg:mb-[64px] max-lg:ml-0 max-lg:mt-0">
            <h2 className="mb-[42px] text-[32px] font-semibold text-[#191A15]">
              ¿Cómo lo hacemos?
            </h2>
            <div className="flex items-start justify-start">
              <Image
                src={data}
                alt="data"
                width={75}
                height={75}
                className="mr-4 max-lg:hidden"
              />
              <div className="mb-[42px] flex flex-col items-start justify-start">
                <h3 className="text-[28px] font-bold text-primary-dark max-lg:text-[24px]">
                  Analizamos tus leads
                </h3>
                <p className="text-[18px] leading-[30px]">
                  Procesamos tu información de forma personalizada por el tipo
                  de cliente objetivo y creamos una experiencia de adquisición
                  ajustada a tu objetivo comercial.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start">
              <Image
                src={star}
                alt="star"
                width={75}
                height={75}
                className="mr-4 max-lg:hidden"
              />
              <div className="mb-[42px] flex flex-col items-start justify-start">
                <h3 className="text-[28px] font-bold text-primary-dark max-lg:text-[24px]">
                  Experiencia personalizada
                </h3>
                <p className="text-[18px] leading-[30px]">
                  Creamos flujos de adquisición de datos cualitativos que nos
                  permiten ahorrar costos con una experiencia digital
                  personalizable.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start">
              <Image
                src={code}
                alt="code"
                width={75}
                height={75}
                className="mr-4 max-lg:hidden"
              />
              <div className="flex flex-col items-start justify-start">
                <h3 className="text-[28px] font-bold text-primary-dark max-lg:text-[24px]">
                  Desarrollo a tu medida
                </h3>
                <p className="text-[18px] leading-[30px]">
                  Aparte de desarrollar la estrategia, realizamos integraciones
                  con distintas tecnologías para recopilar los datos de todos
                  tus leads y separar los más valiosos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[72px] flex w-full flex-col items-start justify-between lg:mt-[200px]">
          <h2 className="w-full text-[32px] font-semibold text-[#191A15]">
            Esto encontrarás si trabajas con nuestro equipo
          </h2>
          <p className="text-[18px] leading-[30px] max-lg:mt-[46px]">
            Puedes elegir una o varias funcionalidades dentro de nuestra oferta
            para llegar más fácilmente a los leads que consagren tu negocio.
          </p>
        </div>
        <div className="flex w-full max-lg:flex-col">
          <div className="mb-[192px] mr-[18.5px] flex flex-col max-lg:m-0">
            <Card
              image={ux}
              title="Diseño UX/UI"
              description="Creamos la experiencia para tus usuarios 100% personalizada sobre tus públicos objetivos."
              className="mb-[42px]"
            />
            <Card
              image={cc}
              title="Integración con Contact Center"
              description="Creamos un funnel de conversión y realizamos seguimiento continuo para iterar  una experiencial 100% medida."
            />
          </div>
          <div className="mt-[192px] flex flex-col max-lg:m-0">
            <Card
              className="mb-[42px] max-lg:mt-[42px]"
              image={dev}
              title="Desarrollo de la aplicación"
              description="Desarrollamos aplicaciones a medida, optimizadas para rendimiento y escalabilidad, garantizando una experiencia de usuario excepcional."
            />

            <Card
              image={cpg}
              title="Optimización de campañas"
              description="Creamos un funnel de conversión y realizamos seguimiento continuo para iterar  una experiencial 100% medida."
            />
          </div>
        </div>
        <div className="my-[180px] flex w-full max-lg:my-8 max-lg:mb-[64px] max-lg:flex-col-reverse">
          <div className="flex flex-col">
            <h2 className="mb-[46px] text-[50px] font-bold leading-[60px] max-lg:text-[32px] max-lg:leading-[39px]">
              Esto es sencillo, sin dolores de cabeza
            </h2>
            <ul>
              <li className="mb-[30px] max-lg:mb-2">
                <div className="flex w-full items-center justify-start max-lg:items-start">
                  <Image
                    src={check}
                    alt="check"
                    width={37}
                    className="mr-[14px] max-lg:size-[28px]"
                  />
                  <p className="text-[18px] font-medium leading-[30px] max-lg:text-[16px]">
                    Sistema Stand-alone, opera independientemente de otras
                    soluciones
                  </p>
                </div>
              </li>
              <li className="mb-[30px] max-lg:mb-2">
                <div className="flex w-full items-center justify-start max-lg:items-start">
                  <Image
                    src={check}
                    alt="check"
                    width={37}
                    className="mr-[14px] max-lg:size-[28px]"
                  />
                  <p className="text-[18px] font-medium leading-[30px] max-lg:text-[16px]">
                    Plug & play, una solución lista para producción
                  </p>
                </div>
              </li>
              <li className="mb-[46px] max-lg:mb-[32px]">
                <div className="flex w-full items-center justify-start max-lg:items-start">
                  <Image
                    src={check}
                    alt="check"
                    width={37}
                    height={32}
                    className="mr-[14px] max-lg:size-[28px]"
                  />
                  <p className="text-[18px] font-medium leading-[30px] max-lg:text-[16px]">
                    Tomarás el control, te damos toda la solución llave en mano
                  </p>
                </div>
              </li>
            </ul>
            <CtaButton className="w-[191px]">Contratar ahora</CtaButton>
          </div>
          <Image
            src={easy}
            alt="llaves en mano"
            width={412}
            height={373}
            className="max-lg:mb-4"
          />
        </div>
      </div>
      <Contact />
    </div>
  );
}
