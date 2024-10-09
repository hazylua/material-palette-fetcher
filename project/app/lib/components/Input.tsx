import clsx from "clsx";
import type { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = (props) => {
    return (
        <input
            className={clsx("rounded bg-neutral-700 px-1.5 py-0.5")}
            {...props}
        />
    );
};

export default Input;
