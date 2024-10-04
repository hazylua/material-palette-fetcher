import clsx from 'clsx';
import { FC } from 'react';

interface FormButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string | undefined;
}

const FormButton: FC<FormButtonProps> = ({ className, children, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={clsx(
        `
        appearance-none rounded
        border border-outline
        bg-background
        px-2 py-1
        outline-none
        hover:border-primary focus:border-current focus:outline-1 focus:outline-primary
        `,
        className
      )}
    >
      {children}
    </button>
  );
};

export default FormButton;
