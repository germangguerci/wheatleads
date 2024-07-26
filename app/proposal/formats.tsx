'use client';

import Card from '@/components/ui/card';
import sample from '../../public/cardholder.svg';

export default function Formats() {
  const ctaCard = {
    text: 'Conocer más',
    onClick: () => {
      console.log('hello');
    },
  };

  return (
    <div className="flex w-full max-w-[1080px] justify-between max-lg:flex-col">
      <div className="mb-[192px] mr-[18.5px] flex flex-col max-lg:m-0">
        <Card
          image={sample}
          title="Diseño UX/UI"
          description="Creamos la experiencia para tus usuarios 100% personalizada sobre tus públicos objetivos."
          className="mb-[42px] bg-[#e3e3e3]"
          cta={ctaCard}
        />
        <Card
          image={sample}
          title="Integración con Contact Center"
          description="Creamos un funnel de conversión y realizamos seguimiento continuo para iterar  una experiencial 100% medida."
          className="bg-[#e3e3e3]"
          cta={ctaCard}
        />
      </div>
      <div className="mt-[192px] flex flex-col max-lg:m-0">
        <Card
          className="mb-[42px] bg-[#e3e3e3] max-lg:mt-[42px]"
          image={sample}
          title="Desarrollo de la aplicación"
          description="Desarrollamos aplicaciones a medida, optimizadas para rendimiento y escalabilidad, garantizando una experiencia de usuario excepcional."
          cta={ctaCard}
        />
        <Card
          image={sample}
          title="Optimización de campañas"
          description="Creamos un funnel de conversión y realizamos seguimiento continuo para iterar  una experiencial 100% medida."
          className="bg-[#e3e3e3]"
          cta={ctaCard}
        />
      </div>
    </div>
  );
}
