import Card from '@/components/ui/card';
import adquisition from '../../public/adquisition.png';
import configuration from '../../public/configuration.png';
import product from '../../public/product.png';
import mp5 from '../../public/mp5.png';

export default function Formats() {
  return (
    <section className="flex w-full max-w-[1080px] items-center justify-center max-lg:flex-col max-lg:p-4 lg:mb-[121px]">
      <div className="mb-[192px] mr-[18.5px] flex flex-col max-lg:m-0">
        <Card
          image={adquisition}
          title="Quiz de adquisición"
          description="Este flujo está diseñado para que tus leads avancen hacia la oferta final en la medida que responden con un simple clic."
          className="mb-[42px] bg-[#e3e3e3]"
        />
        <Card
          image={product}
          title="Onboarding de producto"
          description="Cuentale a las personas todo el potencial de tu solución app o plataforma web en 5 pantallas. Ideal para lanzamiento de producto."
          className="bg-[#e3e3e3]"
        />
      </div>
      <div className="mt-[192px] flex flex-col max-lg:m-0">
        <Card
          className="mb-[42px] bg-[#e3e3e3] max-lg:mt-[42px]"
          image={configuration}
          title="Quiz de configuración"
          description="Este flujo ayuda a tus usuarios a configurar sus intereses antes de usar tu app o plataforma por primera vez."
        />
        <Card
          image={mp5}
          title="Adquisición en MP5"
          description="Este formato interactivo es la última tendencia en adquisición de suscripciones para publicidad web o en apps. Haz la diferencia en la demostración de tu producto con videos animados y audios con controles en una sola pantalla."
          className="bg-[#e3e3e3]"
        />
      </div>
    </section>
  );
}
