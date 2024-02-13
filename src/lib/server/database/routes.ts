export type TRoute = {
  name: string;
  path: string;
  children: TRoute[];
};

export const routes: TRoute[] = [
  {
    name: 'Scheme',
    path: '/scheme',
    children: [
      {
        name: 'Static',
        path: '/scheme/static',
        children: []
      },
      {
        name: 'Dynamic',
        path: '/scheme/dynamic',
        children: []
      }
    ]
  }
];
