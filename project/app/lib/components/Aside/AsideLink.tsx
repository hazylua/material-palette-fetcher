import { useLocation } from "@remix-run/react";
import clsx from "clsx";
import { useState, useEffect, FC } from "react";

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
  const [isPath, setIsPath] = useState(false);

  useEffect(() => {
    setIsPath(location.pathname.includes(path));
  }, [location.pathname, path]);

  return (
    <div className="flex flex-col">
      {type === 2 && children.length > 0 ? (
        <>
          <input
            type="checkbox"
            className="hidden peer"
            id={path}
            checked={isPath}
            readOnly
          />
          <label
            className={clsx(
              "hover:bg- block cursor-pointer py-1.5 pl-3",
              isPath && "font-semibold text-primary"
            )}
            htmlFor={path}
          >
            {name}
          </label>

          <div
            className={clsx(
              "hidden flex-col peer-checked:flex",
              "bg-surfaceContainer"
            )}
          >
            {children.map((child, index) => (
              <AsideLink key={index} {...child} indent={indent + 1} />
            ))}
          </div>
        </>
      ) : type === 1 ? (
        <a
          className={clsx(
            "cursor-pointer py-2 pl-3 hover:underline",
            isPath && "font-semibold text-primary"
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
