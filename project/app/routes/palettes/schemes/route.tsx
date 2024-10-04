import { json, LoaderFunction } from '@remix-run/node';
import { Hct, argbFromHex, SchemeTonalSpot, DynamicScheme } from 'your-color-utils-library';
import {
  getDynamicSchemeParams,
  getColorsHexNameMap,
  hexColorRegex,
  throwErr
} from 'your-utils-library';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);

  if (url.searchParams) {
    const { color, theme, variant } = getDynamicSchemeParams(url.searchParams);

    if (color != null) {
      if (hexColorRegex.test(color)) {
        const isDark = theme === 'light' ? false : true;
        const hct = Hct.fromInt(argbFromHex(color));
        const scheme = new SchemeTonalSpot(hct, isDark, 0.0);
        const dynamic = new DynamicScheme({
          sourceColorArgb: hct.toInt(),
          variant: variant,
          isDark: isDark,
          contrastLevel: 0.0,
          primaryPalette: scheme.primaryPalette,
          secondaryPalette: scheme.secondaryPalette,
          tertiaryPalette: scheme.tertiaryPalette,
          neutralPalette: scheme.neutralPalette,
          neutralVariantPalette: scheme.neutralVariantPalette
        });

        const arr = Array.from(getColorsHexNameMap(dynamic).entries());

        return json({
          color,
          theme,
          variant: Variant[variant],
          scheme: arr,
          json: JSON.stringify(
            arr.reduceRight((prev, curr) => {
              return { [curr[0]]: curr[1], ...prev };
            }, {}),
            null,
            1
          )
        });
      } else {
        throw throwErr('Invalid color format.');
      }
    }
  }

  throw throwErr('Missing search parameters.');
};
