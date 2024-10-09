import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import {
    json,
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "@remix-run/react";

import { routes } from "./lib/client/routes";
import AsideMenu from "./lib/components/Aside/AsideMenu";
import Navbar from "./lib/components/Nav/Navbar";
import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
    },
    {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap",
    },
    { rel: "stylesheet", href: stylesheet },
];

export const loader: LoaderFunction = async () => {
    return json({ routes });
};

export function Layout({ children }: { children: React.ReactNode }) {
    const { routes } = useLoaderData<typeof loader>();
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>

            <body>
                <div>
                    <input
                        id="theme-switcher"
                        name="theme-switcher"
                        className="hidden peer/theme-switcher"
                        type="checkbox"
                    />
                    <div className="dark peer-checked/theme-switcher:light">
                        <Navbar classes="fixed top-0 left-0 grid w-full h-14 grid-cols-3 px-4 py-2 bg-surfaceContainerHighest text-onSurface" />
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
