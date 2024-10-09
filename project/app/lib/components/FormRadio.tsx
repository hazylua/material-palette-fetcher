import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";

interface FormRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    name?: string;
    value?: string;
    checked?: boolean;
}

const FormRadio: FC<FormRadioProps> = ({
    className,
    name,
    value,
    checked,
    ...props
}) => {
    return (
        <input
            className={clsx(
                `
        h-4 w-4 
        appearance-none rounded-full
        border-2 border-primary
        bg-background text-primary
        ring-offset-primary focus:ring-2 focus:ring-primary focus:ring-offset-background
        `,
                className,
            )}
            type="radio"
            name={name || undefined}
            value={value || undefined}
            checked={checked || undefined}
            {...props}
        />
    );
};

export default FormRadio;
