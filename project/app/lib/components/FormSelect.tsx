import clsx from "clsx";
import { FC } from "react";

interface FormSelectProps
    extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const FormSelect: FC<FormSelectProps> = ({
    className,
    children,
    ...restProps
}) => {
    return (
        <select
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
            {...restProps}
        >
            {children}
        </select>
    );
};

export default FormSelect;
