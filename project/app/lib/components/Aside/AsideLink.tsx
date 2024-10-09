import { useLocation } from "@remix-run/react";
import clsx from "clsx";
import { FC, useEffect, useRef } from "react";

interface AsideLinkProps {
    path: string;
    type: number | null;
    children?: AsideLinkProps[];
    name: string;
    indent?: number;
}

const AsideLink: FC<AsideLinkProps> = ({
    path,
    type,
    children = [],
    name,
    indent = 0,
}) => {
    const location = useLocation();

    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (ref.current) ref.current.checked = location.pathname.includes(path);
    }, [ref.current]);

    return (
        <div className="flex flex-col">
            {type === 2 && children.length > 0 ? (
                <>
                    <input
                        type="checkbox"
                        className="peer hidden"
                        id={path}
                        ref={ref}
                    />
                    <label
                        className={clsx(
                            "hover:bg- block cursor-pointer py-1.5 pl-3",
                            location.pathname.includes(path) &&
                                "font-semibold text-primary",
                        )}
                        htmlFor={path}
                    >
                        {name}
                    </label>

                    <div
                        className={clsx(
                            "hidden flex-col peer-checked:flex",
                            "bg-surfaceContainer",
                        )}
                    >
                        {children.map((child, index) => (
                            <AsideLink
                                key={index}
                                {...child}
                                indent={indent + 1}
                            />
                        ))}
                    </div>
                </>
            ) : type === 1 ? (
                <a
                    className={clsx(
                        "cursor-pointer py-2 pl-3 hover:underline",
                        location.pathname.includes(path) &&
                            "font-semibold text-primary",
                    )}
                    href={path}
                >
                    {name}
                </a>
            ) : null}
        </div>
    );
};

export default AsideLink;
