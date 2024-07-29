import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import CtaButton from './cta-button';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  image: StaticImageData;
  title: string;
  description: string;
  wImage?: number;
  ctaText?: string;
}

export default function Card({
  image,
  wImage,
  title,
  description,
  className,
  ctaText,
  ...props
}: CardProps) {
  const styles =
    'flex w-full max-w-[525px] flex-col rounded-[16px] bg-neutral-light p-8 shadow-card';
  return (
    <div className={cn(styles, className)} {...props}>
      <Image src={image} alt={`Image of ${title}`} width={wImage ?? 461} />
      <h1 className="mt-[30px] text-[30px] font-bold text-[#191A15]">
        {title}
      </h1>
      <p className="mt-4 font-[18px] leading-[30px]">{description}</p>
      {ctaText && (
        <div className="mt-4 flex w-full">
          <CtaButton className="w-[174px] max-lg:w-full">{ctaText}</CtaButton>
        </div>
      )}
    </div>
  );
}
