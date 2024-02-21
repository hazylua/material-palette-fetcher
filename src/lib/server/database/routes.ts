export enum ERouteType {
  MENU,
  LINK,
  CATEGORY
}

export type TRoute = {
  name: string;
  path: string;
  type: ERouteType;
  children: TRoute[];
};

export const routes: TRoute[] = [
  {
    name: 'Schemes',
    type: ERouteType.CATEGORY,
    path: '/scheme',
    children: [
      {
        name: 'Static',
        type: ERouteType.LINK,
        path: '/scheme/static',
        children: []
      },
      {
        name: 'Dynamic',
        type: ERouteType.LINK,
        path: '/scheme/dynamic',
        children: []
      }
    ]
  }
];
