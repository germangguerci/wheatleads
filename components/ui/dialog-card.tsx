import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  image: StaticImageData;
  title: string;
  description: string;
  wImage?: number;
  ctaTitle: string;
  children: ReactNode; // Ensure children can accept any valid React node
}

export default function DialogCard({
  image,
  wImage,
  title,
  description,
  className,
  ctaTitle,
  children,
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
      <div className="mt-4 flex w-full">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-[174px] max-lg:w-full">
              {ctaTitle}
            </Button>
          </DialogTrigger>
          <DialogContent>{children}</DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
