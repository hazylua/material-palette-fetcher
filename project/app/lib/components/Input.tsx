import clsx from "clsx";
import { forwardRef, type InputHTMLAttributes } from "react";

export const InputClasses = `appearance-none rounded-sm border border-outline bg-surfaceVariant px-2 py-1 outline-none hover:border-primary focus:border-current focus:outline-primary focus:ring-0
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, ...props }, ref) => {
        return (
            <input
                ref={ref}
                className={clsx(InputClasses, className)}
                {...props}
            />
        );
    },
);

Input.displayName = "Input";

export default Input;
