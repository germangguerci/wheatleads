import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { HTMLAttributes } from 'react';
import { cn } from 'app/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  image: StaticImageData;
  title: string;
  description: string;
}

export default function Card({
  image,
  title,
  description,
  className,
  ...props
}: CardProps) {
  const styles =
    'flex w-full max-w-[525px] flex-col rounded-[16px] bg-neutral-light p-8 shadow-card';
  return (
    <div className={cn(styles, className)} {...props}>
      <Image src={image} alt={`Image of ${title}`} width={461} />
      <h1 className="mt-[30px] text-[30px] font-bold text-[#191A15]">
        {title}
      </h1>
      <p className="mt-4 font-[18px] leading-[30px]">{description}</p>
    </div>
  );
}
