import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function IconCard({
  image,
  title,
  className,
}: {
  image: StaticImageData;
  title: string;
  className?: string;
}) {
  const defaultClass = `flex flex-col items-center justify-center bg-[#D9D9D91A] px-[78px] 
  py-[42px] rounded-[50px] w-[259px] max-lg:w-full max-lg:p-4 max-lg:flex-row max-lg:justify-start max-lg:rounded-[24px]`;
  return (
    <div className={cn(defaultClass, className ?? '')}>
      <Image
        src={image}
        width={102}
        height={102}
        alt={`imagen ${title}`}
        className="size-[102px] max-lg:mr-4 max-lg:w-[46px]"
      />
      <p className="text-center text-[24px] leading-[30px] text-white max-lg:text-[18px]">
        {title}
      </p>
    </div>
  );
}
