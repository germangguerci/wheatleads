import circleStack from '../../public/circle-stack.svg';
import paintBrush from '../../public/paint-brush.svg';
import starIcon from '../../public/star-icon.svg';
import lightBulb from '../../public/light-bulb.svg';
import commandLine from '../../public/command-line.svg';
import IconCard from '@/components/icon-card';
import code from '../../public/code-bracket-square.svg';

export default function About() {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-[#191A15] max-lg:max-w-[530px]">
      <div className="flex w-full max-w-[1080px] flex-col items-start justify-center text-[#E7ECF3] max-lg:px-4 max-lg:py-8">
        <h2 className="mb-[387px] mt-[165px] max-w-[850px] text-[32px] leading-[40px] max-lg:mb-[104px] max-lg:mt-0 max-lg:text-[24px] max-lg:leading-[30px]">
          Sabemos cómo poner el foco sobre la clasificación del usuario y
          <span className="font-bold">
            {' '}
            optimizamos la adquisición de los perfiles que mejor funcionan para
            tu negocio
          </span>
        </h2>
        <div className="mb-[91px] flex w-full justify-between max-lg:flex-col">
          <h1 className="max-w-[441px] text-[36px] font-bold leading-[45px] max-lg:mb-4 max-lg:text-[24px] max-lg:leading-[30px]">
            Conoce los perfiles de este equipo ganador
          </h1>
          <p className="max-w-[542px] text-[26px] leading-[32px] max-lg:text-[18px] max-lg:leading-[22px]">
            Somos los especialistas que necesitas para optimizar todos tus
            canales de difusión y atracción de clientes.
          </p>
        </div>
        <div className="mb-[38px] flex w-full justify-start max-lg:mb-0 max-lg:flex-col">
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
        <div className="mb-[449px] flex w-full justify-end max-lg:mb-[124px] max-lg:flex-col">
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
      </div>
      <div className="flex w-full flex-col items-center bg-[#f9fcfa]">
        <div className="flex max-w-[1080px] flex-col items-center">
          <p className="my-[46px] text-[28px] leading-[35px] text-[#191A15] max-lg:text-[18px] max-lg:leading-[23px]">
            Al trabajar con nuestro equipo tendrás la oportunidad de ser parte
            de él y ayudarnos a crear una solución conjunta. Es por eso, que tu{' '}
            <span className="font-bold">
              serás una pieza clave en el proceso de validación y nuestro faro
              en la visión de tu marca.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
