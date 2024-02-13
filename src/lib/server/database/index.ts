import { routes } from './routes';
import type { TRoute } from './routes';

export function getRoutes(): TRoute[] {
  return routes as TRoute[];
}
