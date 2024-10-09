export enum ERouteType {
    MENU,
    LINK,
    CATEGORY,
}

export type TRoute = {
    name: string;
    path: string;
    type: ERouteType;
    children: TRoute[];
};

export const routes: TRoute[] = [
    {
        name: "Palettes",
        type: ERouteType.CATEGORY,
        path: "/palettes",
        children: [
            {
                name: "Schemes",
                type: ERouteType.LINK,
                path: "/palettes/schemes",
                children: [],
            },
        ],
    },
    {
        name: "Debug",
        type: ERouteType.CATEGORY,
        path: "/debug",
        children: [
            {
                name: "Developer Page",
                type: ERouteType.LINK,
                path: "/debug/developer",
                children: [],
            },
        ],
    },
];
