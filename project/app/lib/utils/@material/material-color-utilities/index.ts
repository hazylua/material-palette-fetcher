import { snakeToCamel } from "~/lib/utils/string";
import {
    DynamicScheme,
    MaterialDynamicColors,
    hexFromArgb,
} from "@material/material-color-utilities";

export enum Variant {
    MONOCHROME,
    NEUTRAL,
    TONAL_SPOT,
    VIBRANT,
    EXPRESSIVE,
    FIDELITY,
    CONTENT,
}

export const VariantNameMap = {
    ["MONOCHROME"]: "Monochrome",
    ["NEUTRAL"]: "Neutral",
    ["TONAL_SPOT"]: "Tonal Spot",
    ["VIBRANT"]: "Vibrant",
    ["EXPRESSIVE"]: "Expressive",
    ["FIDELITY"]: "Fidelity",
    ["CONTENT"]: "Content",
};

export const colors = [
    MaterialDynamicColors.primary,
    MaterialDynamicColors.onPrimary,
    MaterialDynamicColors.primaryContainer,
    MaterialDynamicColors.onPrimaryContainer,
    MaterialDynamicColors.inversePrimary,
    MaterialDynamicColors.secondary,
    MaterialDynamicColors.onSecondary,
    MaterialDynamicColors.secondaryContainer,
    MaterialDynamicColors.onSecondaryContainer,
    MaterialDynamicColors.tertiary,
    MaterialDynamicColors.onTertiary,
    MaterialDynamicColors.tertiaryContainer,
    MaterialDynamicColors.onTertiaryContainer,
    MaterialDynamicColors.error,
    MaterialDynamicColors.onError,
    MaterialDynamicColors.errorContainer,
    MaterialDynamicColors.onErrorContainer,
    MaterialDynamicColors.primaryFixed,
    MaterialDynamicColors.primaryFixedDim,
    MaterialDynamicColors.onPrimaryFixed,
    MaterialDynamicColors.onPrimaryFixedVariant,
    MaterialDynamicColors.secondaryFixed,
    MaterialDynamicColors.secondaryFixedDim,
    MaterialDynamicColors.onSecondaryFixed,
    MaterialDynamicColors.onSecondaryFixedVariant,
    MaterialDynamicColors.tertiaryFixed,
    MaterialDynamicColors.tertiaryFixedDim,
    MaterialDynamicColors.onTertiaryFixed,
    MaterialDynamicColors.onTertiaryFixedVariant,
    MaterialDynamicColors.background,
    MaterialDynamicColors.onBackground,
    MaterialDynamicColors.surface,
    MaterialDynamicColors.surfaceDim,
    MaterialDynamicColors.surfaceBright,
    MaterialDynamicColors.surfaceContainerLowest,
    MaterialDynamicColors.surfaceContainerLow,
    MaterialDynamicColors.surfaceContainer,
    MaterialDynamicColors.surfaceContainerHigh,
    MaterialDynamicColors.surfaceContainerHighest,
    MaterialDynamicColors.onSurface,
    MaterialDynamicColors.surfaceVariant,
    MaterialDynamicColors.onSurfaceVariant,
    MaterialDynamicColors.inverseSurface,
    MaterialDynamicColors.inverseOnSurface,
    MaterialDynamicColors.outline,
    MaterialDynamicColors.outlineVariant,
    MaterialDynamicColors.shadow,
    MaterialDynamicColors.scrim,
    MaterialDynamicColors.surfaceTint,
];

export const getColorsHexNameMap = (scheme: DynamicScheme) =>
    new Map(
        colors.map((color) => [
            snakeToCamel(color.name),
            hexFromArgb(color.getArgb(scheme)),
        ]),
    );
