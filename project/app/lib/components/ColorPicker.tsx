import clsx from "clsx";
import { InputHTMLAttributes } from "react";

export default function ColorPicker({
    id,
    name,
    value,
    className,
    onChange,
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={clsx(
                `
        appearance-none
        border border-outline
        bg-background
        outline-none outline
        hover:border-primary
        focus:border-current focus:outline-primary focus:ring-0
        `,
                className,
            )}
            onChange={onChange}
            type="color"
            id={id}
            value={value}
            name={name}
            {...props}
        />
    );
}
