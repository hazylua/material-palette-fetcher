import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export default function FormInput({
    className,
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            className={clsx(
                `
        appearance-none
        border border-outline
        bg-background
        px-2 py-1
        outline-none
        hover:border-primary
        focus:border-current focus:outline-primary focus:ring-0
        `,
                className,
            )}
        />
    );
}
