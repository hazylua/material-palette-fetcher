import { Scheme, argbFromHex, hexFromArgb } from '@material/material-color-utilities';
import type { PageServerLoad } from './$types';

const hexColorRegex = /^#(?:[0-9a-fA-F]{3,4}){1,2}$/;

function throwErr(msg: string | null) {
  return {
    err: msg ?? 'Invalid params.'
  };
}

function createTonalArray(argb: number) {
  //console.log(makePalette);
  return [{ original: true, hex: hexFromArgb(argb) }];
}

export const load: PageServerLoad = ({ url }) => {
  if (url.searchParams) {
    const color = url.searchParams.get('color');
    const theme = url.searchParams.get('theme');
    const split = url.searchParams.get('split');
    const parts = url.searchParams.get('parts');
    const step = url.searchParams.get('step');

    if (color != null) {
      if (hexColorRegex.test(color)) {
        const argb = argbFromHex(color);

        let scheme;
        if (theme != null) {
          scheme = theme === 'light' ? Scheme.light(argb) : Scheme.dark(argb);
        } else {
          return throwErr(null);
        }

        let arr: Array<{ colorName: string; colors: { hex: string; original: boolean }[] }> = [];
        if (split === 'on') {
          arr = Object.entries(scheme.toJSON()).map((entry) => {
            return {
              colorName: entry[0],
              colors: createTonalArray(entry[1])
            };
          });
        }
        console.log(arr);

        return {
          color,
          theme,
          split,
          parts,
          step,
          scheme: Object.entries(scheme.toJSON()).map((entry) => [entry[0], hexFromArgb(entry[1])]),
          scheme1: arr
        };
      } else {
        return throwErr(null);
      }
    }
  }
  return {};
};
