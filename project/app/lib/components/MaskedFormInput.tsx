import clsx from "clsx";
import IMask, { FactoryArg, InputMask } from "imask";
import { InputHTMLAttributes, useEffect, useRef, useState } from "react";

type MaskedFormInputProps = InputHTMLAttributes<HTMLInputElement> & {
    maskOptions: FactoryArg;
};

export default function MaskedFormInput({
    className,
    maskOptions,
    ...props
}: MaskedFormInputProps) {
    const ref = useRef<HTMLInputElement>(null);
    const [mask, setMask] = useState<InputMask<FactoryArg> | null>(null);

    useEffect(() => {
        if (ref.current) {
            setMask(IMask(ref.current, maskOptions));
        }
    }, [ref]);

    return (
        <input
            {...props}
            ref={ref}
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
