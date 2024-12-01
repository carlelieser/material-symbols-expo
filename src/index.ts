import { glyphMap } from "./glyphMap";
import createIconSet from "@expo/vector-icons/createIconSet";
import { Icon } from "@expo/vector-icons/build/createIconSet";

const fonts = [
	"MaterialSymbolsOutlined",
	"MaterialSymbolsOutlinedFilled",
	"MaterialSymbolsRounded",
	"MaterialSymbolsRoundedFilled",
	"MaterialSymbolsSharp",
	"MaterialSymbolsSharpFilled",
];

const iconSets: Record<
	string,
	Icon<keyof typeof glyphMap, string>
> = fonts.reduce((acc, fontName) => {
	acc[fontName] = createIconSet(glyphMap, fontName, fontName);
	return acc;
}, {});

const paths = fonts.map(
	(fontName) =>
		`node_modules/material-symbols-expo/dist/assets/fonts/${fontName}.ttf`,
);

export const MaterialSymbols = iconSets.MaterialSymbolsOutlined;
export const MaterialSymbolsFilled = iconSets.MaterialSymbolsOutlinedFilled;
export const MaterialSymbolsOutlined = iconSets.MaterialSymbolsOutlined;
export const MaterialSymbolsOutlinedFilled =
	iconSets.MaterialSymbolsOutlinedFilled;
export const MaterialSymbolsRounded = iconSets.MaterialSymbolsRounded;
export const MaterialSymbolsRoundedFilled =
	iconSets.MaterialSymbolsRoundedFilled;
export const MaterialSymbolsSharp = iconSets.MaterialSymbolsSharp;
export const MaterialSymbolsSharpFilled = iconSets.MaterialSymbolsSharpFilled;
export const MaterialSymbolsFonts = paths;
export const MaterialSymbolsGlyphMap = glyphMap;
