import { FC } from 'react';
import AsideLink from './AsideLink';

type TRoute = {
  path: string;
  type: string;
  children?: TRoute[];
  name: string;
};

interface AsideMenuProps {
  routes: TRoute[];
  classes?: string;
}

const AsideMenu: FC<AsideMenuProps> = ({ routes, classes = '' }) => {
  return (
    <aside className={classes}>
      <div className="flex flex-col w-40 overflow-y-auto max-w-40 bg-surfaceContainerHigh text-onSurface">
        {routes.map((route) => (
          <AsideLink
            key={route.path}
            path={route.path}
            type={route.type}
            name={route.name}
          >
            {route.children}
          </AsideLink>
        ))}
      </div>
    </aside>
  );
};

export default AsideMenu;
