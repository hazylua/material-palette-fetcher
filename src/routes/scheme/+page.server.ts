import { Scheme, argbFromHex, hexFromArgb, Hct } from '@material/material-color-utilities';
import type { PageServerLoad } from './$types';

const hexColorRegex = /^#(?:[0-9a-fA-F]{3,4}){1,2}$/;

function throwErr() {
  return {
    err: 'Invalid params.'
  };
}

function createTonalArray(argb: number) {
  const hct = Hct.fromInt(argb);
  console.log(hct);
}

export const load: PageServerLoad = ({ url }) => {
  if (url.searchParams) {
    const color = url.searchParams.get('color');
    if (color != null) {
      if (hexColorRegex.test(color)) {
        const argb = argbFromHex(color);
        const theme = url.searchParams.get('theme');
        let scheme;
        if (theme != null) {
          scheme = theme === 'light' ? Scheme.light(argb) : Scheme.dark(argb);
        } else {
          return throwErr();
        }

        Object.entries(scheme.toJSON()).forEach((entry) => {
          createTonalArray(entry[1]);
        });

        return {
          color,
          theme,
          scheme: Object.entries(scheme.toJSON()).map((entry) => [entry[0], hexFromArgb(entry[1])])
        };
      } else {
        return throwErr();
      }
    }
  }
  return {};
};
