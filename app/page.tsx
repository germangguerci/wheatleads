import MainNav from './ui/mainNav';
import Image from 'next/image';
import underline from '../public/underline.svg';
import placeHolder from '../public/placeholder.svg';
import CtaButton from './ui/ctaButton';

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
        <div className="flex w-full items-center justify-between  px-[14px] max-lg:flex-col-reverse">
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
      </div>
    </main>
  );
}
