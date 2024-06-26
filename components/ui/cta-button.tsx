/* eslint-disable react/button-has-type */
import { cn } from '@/lib/utils';

type CtaButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const CtaButton: React.FC<CtaButtonProps> = (props) => {
  const defaultClass =
    'flex items-center justify-center rounded-[40px] bg-primary-dark px-[30px] py-[20px] text-neutral-light';

  return (
    <button
      {...props}
      className={cn(defaultClass, props?.className ?? '')}
      type={props?.type ? props.type : 'button'}
    >
      {props.children}
    </button>
  );
};

export default CtaButton;
