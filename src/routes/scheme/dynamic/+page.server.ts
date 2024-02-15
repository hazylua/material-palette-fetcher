import { Variant, getColorsHexNameMap } from '$lib/util/@material/material-color-utilities';
import { hexColorRegex } from '$lib/util/regex';
import {
  DynamicScheme,
  Hct,
  SchemeTonalSpot,
  argbFromHex
} from '@material/material-color-utilities';
import type { PageServerLoad } from '../$types';

function throwErr(msg: string | null) {
  return {
    err: msg ?? 'An error has occurred.'
  };
}

function getDynamicSchemeParams(searchParams: URLSearchParams) {
  return {
    color: searchParams.get('color'),
    theme: searchParams.get('theme'),
    type: searchParams.get('type')
  };
}

export const load: PageServerLoad = ({ url }) => {
  if (url.searchParams) {
    const { color, theme } = getDynamicSchemeParams(url.searchParams);

    if (color != null) {
      if (hexColorRegex.test(color)) {
        const isDark = theme === 'light' ? false : true;
        const hct = Hct.fromInt(argbFromHex(color));
        const scheme = new SchemeTonalSpot(hct, isDark, 0.0);
        const dynamic = new DynamicScheme({
          sourceColorArgb: hct.toInt(),
          variant: Variant.NEUTRAL,
          isDark: isDark,
          contrastLevel: 0.0,
          primaryPalette: scheme.primaryPalette,
          secondaryPalette: scheme.secondaryPalette,
          tertiaryPalette: scheme.tertiaryPalette,
          neutralPalette: scheme.neutralPalette,
          neutralVariantPalette: scheme.neutralVariantPalette
        });

        const arr = Array.from(getColorsHexNameMap(dynamic).entries());

        return {
          color,
          theme,
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
