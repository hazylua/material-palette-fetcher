import clsx from "clsx";
import IMask, { FactoryArg, InputMask } from "imask";
import { InputHTMLAttributes, useEffect, useRef, useState } from "react";
import Input from "./Input";

type MaskedFormInputProps = InputHTMLAttributes<HTMLInputElement> & {
    maskOptions: FactoryArg;
};

export default function MaskedFormInput({
    maskOptions,
    ...props
}: MaskedFormInputProps) {
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (ref.current) {
            IMask(ref.current, maskOptions);
        }
    }, [ref, maskOptions]);

    return <Input {...props} ref={ref} />;
}
