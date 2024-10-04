import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";

import "./tailwind.css";
import Navbar from "./lib/components/Nav/Navbar";
import AsideMenu from "./lib/components/Aside/AsideMenu";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export const loader: LoaderFunction = async () => {
  const routes = await fetchRoutes(); // Replace with your actual data fetching logic
  return json({ routes });
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      
      <body>
      <div className={theme === 'dark' ? 'dark' : ''}>
      <input
        id="theme-switcher"
        name="theme-switcher"
        className="hidden peer/theme-switcher"
        type="checkbox"
      />
      <div className="dark peer-checked/theme-switcher:light">
        <Navbar
          classes="fixed top-0 left-0 grid w-full h-14 grid-cols-3 px-4 py-2 bg-surfaceContainerHighest text-onSurface"
        />
        <AsideMenu
          classes="fixed left-0 flex w-40 h-full overflow-y-auto top-14 max-w-40 bg-primary"
          routes={routes}
        />
        <main className="w-full h-screen pl-40 bg-background pt-14 text-onBackground">
        {children}
        <ScrollRestoration />
        <Scripts />
        </main>
      </div>
    </div>

      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
