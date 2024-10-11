import {
    argbFromHex,
    DynamicScheme,
    Hct,
    SchemeTonalSpot,
} from "@material/material-color-utilities";
import { ActionFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData, useSearchParams } from "@remix-run/react";
import { FactoryArg } from "imask";
import { ChangeEvent, useState } from "react";
import ColorPicker from "~/lib/components/ColorPicker";
import FormButton from "~/lib/components/FormButton";
import FormSelect from "~/lib/components/FormSelect";
import MaskedFormInput from "~/lib/components/MaskedFormInput";
import {
    getColorsHexNameMap,
    Variant,
    VariantNameMap,
} from "~/lib/utils/@material/material-color-utilities";
import { hexColorRegex } from "~/lib/utils/regex";

const maskOptions: FactoryArg = {
    mask: "{#}XXXXXX",
    blocks: {
        X: {
            mask: /^[0-9A-Fa-f]$/,
        },
    },
};

type TPaletteScheme = {
    color: string;
    theme: string | null;
    variant: string;
    scheme: [string, string][];
    json: string;
};

function getColorScheme(searchParams: URLSearchParams): {
    error?: string;
    paletteScheme?: TPaletteScheme;
} {
    const { color, theme, variant, error } =
        getDynamicSchemeParams(searchParams);

    if (error) {
        return { error };
    }

    if (color != null) {
        if (hexColorRegex.test(color)) {
            const isDark = theme !== "light";
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
                neutralVariantPalette: scheme.neutralVariantPalette,
            });

            const arr = Array.from(getColorsHexNameMap(dynamic).entries());

            return {
                paletteScheme: {
                    color,
                    theme,
                    variant: Variant[variant],
                    scheme: arr,
                    json: JSON.stringify(
                        arr.reduceRight((prev, curr) => {
                            return { [curr[0]]: curr[1], ...prev };
                        }, {}),
                        null,
                        1,
                    ),
                },
            };
        } else {
            return { error: "Invalid color format." };
        }
    } else {
        return { error: "Color is required." };
    }
}

function getDynamicSchemeParams(searchParams: URLSearchParams) {
    if (!searchParams.get("variant")) {
        return { error: "Invalid variant." };
    }
    const variant = searchParams.get(
        "variant",
    ) as string as keyof typeof Variant;

    return {
        color: searchParams.get("color"),
        theme: searchParams.get("theme"),
        type: searchParams.get("type"),
        variant: Variant[variant],
    };
}

export async function loader({ request }: ActionFunctionArgs) {
    const url = new URL(request.url);
    if (url.searchParams) {
        return getColorScheme(url.searchParams);
    }
}

const variantNames = Object.entries(VariantNameMap);

export default function PaletteSchemes() {
    const { error, paletteScheme: data } = useLoaderData<typeof loader>();

    const [searchParams] = useSearchParams();

    const [colorPickerValue, setColorPickerValue] = useState<string>(
        searchParams.get("color") ?? "#000000",
    );
    const [colorInputValue, setColorInputValue] = useState<string>(
        searchParams.get("color") ?? "#000000",
    );

    function handleChangeColorValue(e: ChangeEvent<HTMLInputElement>) {
        const value = (e.target as HTMLInputElement).value;
        setColorInputValue(value);
        if (hexColorRegex.test(value)) {
            setColorPickerValue(value);
        }
    }

    return (
        <div className="flex flex-col h-full gap-4 p-4">
            <section>
                <div className="w-fit mb-4 bg-surfaceContainerHigh p-2 text-onSurface">
                    <p>Generate a scheme from a color.</p>
                </div>
                <Form className="flex flex-col gap-4">
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col items-start gap-1">
                            <label htmlFor="theme">Root Color</label>
                            <div className="flex flex-row gap-3">
                                <div>
                                    <ColorPicker
                                        id="color"
                                        name="color"
                                        className="h-8 w-8"
                                        value={colorPickerValue}
                                        onChange={handleChangeColorValue}
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <MaskedFormInput
                                        placeholder="#FFFFFF"
                                        maskOptions={maskOptions}
                                        value={colorInputValue}
                                        onChange={handleChangeColorValue}
                                        // onChange={changeColorInputValue}
                                        // onKeyDown={changeColorPickerValue}
                                    />
                                    <p className="text-xs font-normal text-onBackground">
                                        Tip:{" "}
                                        <span className="font-mono text-primary">
                                            Shift+Enter
                                        </span>{" "}
                                        to force-update color picker.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex w-2/12 flex-col gap-1">
                            <label htmlFor="theme">Scheme Theme</label>
                            <FormSelect name="theme">
                                <option value="dark">Dark</option>
                                <option value="light">Light</option>
                            </FormSelect>
                        </div>

                        <div className="flex w-2/12 flex-col gap-1">
                            <label htmlFor="theme">Scheme Variant</label>
                            <FormSelect name="variant">
                                {variantNames.map((option) => (
                                    <option key={option[0]} value={option[0]}>
                                        {option[1]}
                                    </option>
                                ))}
                            </FormSelect>
                        </div>
                    </div>
                    <div>
                        <FormButton type="submit">Generate</FormButton>
                    </div>
                    {error && (
                        <div className="p-1 ring-0 outline-none outline-errorContainer border border-surface outline text-center bg-errorContainer text-error">
                            <p>{error}</p>
                        </div>
                    )}
                </Form>
            </section>

            <section className="flex flex-grow w-full overflow-hidden">
                <div className="relative w-full">
                    {data?.scheme && data?.scheme.length > 0 && (
                        <div className="absolute top-0 left-0 flex w-full h-full gap-2">
                            <ul className="w-1/2 h-full overflow-y-scroll list-none rounded">
                                {data.scheme.map((entry: [string, string]) => (
                                    <li key={entry[0]} className="h-20">
                                        <div
                                            className="relative flex items-center justify-center w-full h-full"
                                            style={{
                                                backgroundColor: entry[1],
                                            }}
                                        >
                                            <span className="px-2 py-1 border border-primary bg-onPrimary text-primary">
                                                {entry[0]}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="w-1/2 h-full overflow-y-scroll">
                                <p className="bg-surfaceContainerLow px-2 py-1 text-primary font-mono">
                                    Click on the text below to select all of it.
                                </p>
                                <pre className="select-all">{data.json}</pre>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
