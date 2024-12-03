import { glyphMap } from "./glyphMap";
import createIconSet from "@expo/vector-icons/createIconSet";
import { Icon } from "@expo/vector-icons/build/createIconSet";

export type MaterialSymbolsGlyphs = keyof typeof glyphMap;

const fonts = [
	"MaterialSymbolsOutlined",
	"MaterialSymbolsOutlinedFilled",
	"MaterialSymbolsRounded",
	"MaterialSymbolsRoundedFilled",
	"MaterialSymbolsSharp",
	"MaterialSymbolsSharpFilled",
];

export const MaterialSymbolsIconSet = fonts.reduce(
	(acc, fontName) => {
		acc[fontName] = createIconSet(glyphMap, fontName, fontName);
		return acc;
	},
	{} as Record<string, Icon<MaterialSymbolsGlyphs, string>>,
);

const paths = fonts.map(
	(fontName) =>
		`node_modules/material-symbols-expo/dist/assets/fonts/${fontName}.ttf`,
);

export const MaterialSymbolsOutlined =
	MaterialSymbolsIconSet.MaterialSymbolsOutlined;
export const MaterialSymbolsOutlinedFilled =
	MaterialSymbolsIconSet.MaterialSymbolsOutlinedFilled;
export const MaterialSymbolsRounded =
	MaterialSymbolsIconSet.MaterialSymbolsRounded;
export const MaterialSymbolsRoundedFilled =
	MaterialSymbolsIconSet.MaterialSymbolsRoundedFilled;
export const MaterialSymbolsSharp = MaterialSymbolsIconSet.MaterialSymbolsSharp;
export const MaterialSymbolsSharpFilled =
	MaterialSymbolsIconSet.MaterialSymbolsSharpFilled;
export const MaterialSymbolsFonts = paths;
export const MaterialSymbolsGlyphMap = glyphMap;
