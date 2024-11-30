import { glyphMap } from "./glyphMap";
import createIconSet from "@expo/vector-icons/createIconSet";
import { fonts } from "../scripts/common";
import { Icon } from "@expo/vector-icons/build/createIconSet";

const exports: Record<string, Icon<keyof typeof glyphMap, string>> = {};

fonts.forEach((fontName) => {
	exports[fontName] = createIconSet(glyphMap, fontName, fontName + ".ttf");
});

export const MaterialSymbols = exports["MaterialSymbolsOutlined"];
export const MaterialSymbolsFilled = exports["MaterialSymbolsOutlinedFilled"];
export const MaterialSymbolsOutlined = exports["MaterialSymbolsOutlined"];
export const MaterialSymbolsOutlinedFilled = exports["MaterialSymbolsOutlinedFilled"];
export const MaterialSymbolsRounded = exports["MaterialSymbolsRounded"];
export const MaterialSymbolsRoundedFilled = exports["MaterialSymbolsRoundedFilled"];
export const MaterialSymbolsSharp = exports["MaterialSymbolsSharp"];
export const MaterialSymbolsSharpFilled = exports["MaterialSymbolsSharpFilled"];
