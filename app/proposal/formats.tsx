'use client';

import Card from '@/components/ui/card';
import sample from '../../public/cardholder.svg';
import DialogCard from '@/components/ui/dialog-card';

export default function Formats() {
  const ctaCard = {
    text: 'Conocer más',
    onClick: () => {
      console.log('hello');
    },
  };

  return (
    <div className="flex w-full max-w-[1080px] justify-between max-lg:flex-col max-lg:p-4 lg:mb-[121px]">
      <div className="mb-[192px] mr-[18.5px] flex flex-col max-lg:m-0">
        <DialogCard
          image={sample}
          title="Quiz de adquisición"
          description="Este flujo está diseñado para que tus leads avancen hacia la oferta final en la medida que responden con un simple clic."
          className="mb-[42px] bg-[#e3e3e3]"
          ctaTitle="Conocer más"
        >
          <div className="flex">
            <h1>Hello</h1>
          </div>
        </DialogCard>
        <Card
          image={sample}
          title="Onboarding de producto"
          description="Cuentale a las personas todo el potencial de tu solución app o plataforma web en 5 pantallas. Ideal para lanzamiento de producto."
          className="bg-[#e3e3e3]"
          cta={ctaCard}
        />
      </div>
      <div className="mt-[192px] flex flex-col max-lg:m-0">
        <Card
          className="mb-[42px] bg-[#e3e3e3] max-lg:mt-[42px]"
          image={sample}
          title="Quiz de configuración"
          description="Este flujo ayuda a tus usuarios a configurar sus intereses antes de usar tu app o plataforma por primera vez."
          cta={ctaCard}
        />
        <Card
          image={sample}
          title="Adquisición en MP5"
          description="Este formato interactivo es la última tendencia en adquisición de suscripciones para publicidad web o en apps. Haz la diferencia en la demostración de tu producto con videos animados y audios con controles en una sola pantalla."
          className="bg-[#e3e3e3]"
          cta={ctaCard}
        />
      </div>
    </div>
  );
}
