import MainNav from './ui/mainNav';
import Image from 'next/image';
import underline from '../public/underline.svg';
import placeHolder from '../public/placeholder.svg';
import CtaButton from './ui/ctaButton';
import cardholder from '../public/cardholder.svg';
import Card from './ui/card';

export default function Home() {
  return (
    <main className="flex size-full max-w-[1216px] flex-col items-center justify-start p-0 lg:px-8 lg:py-7">
      <MainNav />
      <div className="mt-[96px] flex w-full max-w-[1080px] flex-col items-center justify-center max-lg:m-0 max-lg:max-w-[530px] max-lg:px-4 max-lg:py-8">
        <div className="flex w-full justify-between max-lg:flex-col max-lg:items-center max-lg:justify-center">
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
            src={placeHolder}
            alt="place holder"
            width={359}
            height={396}
            className="max-lg:hidden"
          />
        </div>
        <p
          className="mb-[108px] mt-[116px] w-full max-w-[898px] text-center text-[28px] font-normal max-lg:my-[64px]
        max-lg:text-left max-lg:text-[18px]"
        >
          Sabemos cómo poner el foco sobre la clasificación del usuario y
          <span className="font-bold text-primary-medium">
            {' '}
            optimizamos la adquisición de los perfiles que mejor funcionan para
            tu negocio
          </span>
        </p>
        <div className="flex w-full items-center justify-between  px-[14px] max-lg:flex-col-reverse">
          <p className="max-w-[532px] text-[26px] font-normal max-lg:my-8 max-lg:text-[18px]">
            Desarrollamos una solución de onboarding a medida que le garantiza a
            tus usuarios{' '}
            <span className="font-bold text-primary-medium">
              la mejor experiencia y para ti, la información extraída más
              relevante.
            </span>
          </p>
          <Image
            src={placeHolder}
            alt="place holder"
            width={396}
            height={396}
          />
        </div>
        <div className="flex w-full items-center justify-between  px-[14px] max-lg:my-8 max-lg:flex-col">
          <Image
            src={placeHolder}
            alt="place holder"
            width={396}
            height={396}
          />
          <p className="max-w-[532px] text-[26px] font-normal max-lg:my-8 max-lg:text-[18px]">
            Optimizamos tus campañas con{' '}
            <span className="font-bold text-primary-medium">
              conversiones inteligentes que prioricen el perfil que estás
              buscando
            </span>
          </p>
        </div>
        <div className="flex w-full items-center justify-between px-[14px] max-lg:flex-col-reverse">
          <p className="max-w-[532px] text-[26px] font-normal max-lg:my-8 max-lg:text-[18px]">
            Almacenamos tus leads en un CRM para que puedas{' '}
            <span className="font-bold text-primary-medium">
              consultar los reportes de forma fácil, rápida y eficiente.
            </span>
          </p>
          <Image
            src={placeHolder}
            alt="place holder"
            width={396}
            height={396}
          />
        </div>
        <div className="flex w-full items-center justify-center">
          <Image
            src={placeHolder}
            alt="place holder"
            width={517}
            height={517}
            className="max-lg:hidden"
          />
          <div className="mb-[120px] ml-8 mt-[46px] flex w-full flex-col items-start justify-start max-lg:mb-[64px] max-lg:ml-0">
            <h2 className="mb-[42px] text-[32px] font-semibold text-[#191A15]">
              ¿Cómo lo hacemos?
            </h2>
            <div className="flex items-start justify-start">
              <Image
                src={placeHolder}
                alt="place holder"
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
                src={placeHolder}
                alt="place holder"
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
                src={placeHolder}
                alt="place holder"
                width={75}
                height={75}
                className="mr-4 max-lg:hidden"
              />
              <div className="mb-[42px] flex flex-col items-start justify-start">
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
        <div className="mb-[72px] flex w-full items-start justify-between max-lg:flex-col">
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
              image={cardholder}
              title="Diseño UX/UI"
              description="Creamos la experiencia para tus usuarios 100% personalizada sobre tus públicos objetivos."
              className="mb-[42px]"
            />
            <Card
              image={cardholder}
              title="Optimización de campañas"
              description="Creamos un funnel de conversión y realizamos seguimiento continuo para iterar una experiencial 100% medida."
            />
          </div>
          <div className="mt-[192px] flex flex-col max-lg:m-0">
            <Card
              image={cardholder}
              title="Administracion de CRM"
              description="Creamos la experiencia para tus usuarios 100% personalizada sobre tus públicos objetivos."
              className="mb-[42px]"
            />
            <Card
              image={cardholder}
              title="Optimización de campañas"
              description="Creamos un funnel de conversión y realizamos seguimiento continuo para iterar  una experiencial 100% medida."
            />
          </div>
        </div>
      </div>
    </main>
  );
}
