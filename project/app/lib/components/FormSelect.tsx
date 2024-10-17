import clsx from "clsx";
import { FC } from "react";
import { InputClasses } from "./Input";

interface FormSelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const FormSelect: FC<FormSelectProps> = ({
    className,
    children,
    ...restProps
}) => {
    return (
        <select className={clsx(InputClasses, className)} {...restProps}>
            {children}
        </select>
    );
};

export default FormSelect;
