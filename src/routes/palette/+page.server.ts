import {
  CorePalette,
  Hct,
  TonalPalette,
  argbFromHex,
  hexFromArgb
} from '@material/material-color-utilities';
import type { PageServerLoad } from './$types';
import { throwErrorMessage } from '$lib/util/messages';

const hexColorRegex = /^#(?:[0-9a-fA-F]{3,4}){1,2}$/;

export const load: PageServerLoad = ({ url }) => {
  if (url.searchParams) {
    const color = url.searchParams.get('color');
    const type = url.searchParams.get('type');

    if (color != null) {
      if (hexColorRegex.test(color)) {
        const argb = argbFromHex(color);

        if (type != null) {
          if (type === 'core') {
            const corePalette: CorePalette = CorePalette.of(argb);
            return {
              color,
              type,
              palette: Object.entries(corePalette).map((entry) => [
                entry[0],
                hexFromArgb(entry[1].keyColor.argb)
              ]),
              json: JSON.stringify(corePalette, null, 1)
            };
          } else if (type === 'tonal') {
            const hct = Hct.fromInt(argb);
            const tonalPalette = TonalPalette.fromHueAndChroma(hct.hue, hct.chroma);
            return {
              color,
              type,
              palette: [],
              json: JSON.stringify(tonalPalette, null, 1)
            };
          } else {
            return throwErrorMessage('Invalid palette type.');
          }
        } else {
          return throwErrorMessage(null);
        }
      } else {
        return throwErrorMessage(null);
      }
    }
  }
  return {};
};
