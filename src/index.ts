import { glyphMap } from "./glyphMap";
import createIconSet from "@expo/vector-icons/createIconSet";

const fonts = [
	"MaterialSymbolsOutlined",
	"MaterialSymbolsOutlinedFilled",
	"MaterialSymbolsRounded",
	"MaterialSymbolsRoundedFilled",
	"MaterialSymbolsSharp",
	"MaterialSymbolsSharpFilled",
];

const iconSets = fonts.reduce(
	(acc, fontName) => {
		acc[fontName] = createIconSet(glyphMap, fontName, fontName);
		return acc;
	},
	{} as Record<string, any>,
);

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
