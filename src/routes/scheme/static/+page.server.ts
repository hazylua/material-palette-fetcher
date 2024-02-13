import { CorePalette, Scheme, argbFromHex, hexFromArgb } from '@material/material-color-utilities';
import type { PageServerLoad } from '../$types';

const hexColorRegex = /^#(?:[0-9a-fA-F]{3,4}){1,2}$/;

function throwErr(msg: string | null) {
  return {
    err: msg ?? 'An error has occurred.'
  };
}

function getStaticSchemeParams(searchParams: URLSearchParams) {
  return {
    color: searchParams.get('color'),
    theme: searchParams.get('theme'),
    type: searchParams.get('type')
  };
}

export const load: PageServerLoad = ({ url }) => {
  if (url.searchParams) {
    const { color, theme, type } = getStaticSchemeParams(url.searchParams);

    if (color != null) {
      if (hexColorRegex.test(color)) {
        const argb = argbFromHex(color);

        let scheme;
        if (theme != null) {
          if (type === 'default') {
            scheme = theme === 'light' ? Scheme.light(argb) : Scheme.dark(argb);
          } else if (type === 'content') {
            scheme = theme === 'light' ? Scheme.lightContent(argb) : Scheme.darkContent(argb);
          } else if (type === 'from-core-palette') {
            const corePalette = CorePalette.contentOf(argb);
            scheme =
              theme === 'light'
                ? Scheme.lightFromCorePalette(corePalette)
                : Scheme.darkFromCorePalette(corePalette);
          } else {
            return throwErr('Invalid type.');
          }
        } else {
          return throwErr('Invalid theme.');
        }

        const arr = Object.entries(scheme.toJSON()).map((entry) => [
          entry[0],
          hexFromArgb(entry[1])
        ]);

        return {
          color,
          theme,
          type,
          scheme: arr,
          json: JSON.stringify(
            arr.reduceRight((prev, curr) => {
              return { [curr[0]]: curr[1], ...prev };
            }, {}),
            null,
            1
          )
        };
      } else {
        return throwErr('Invalid color format.');
      }
    }
  }
  return {};
};
