import { glyphMap } from "./glyphMap";
import createIconSet from "@expo/vector-icons/createIconSet";
import { Icon } from "@expo/vector-icons/build/createIconSet";

const fonts = [
	"MaterialSymbolsOutlined",
	"MaterialSymbolsOutlinedFilled",
	"MaterialSymbolsRounded",
	"MaterialSymbolsRoundedFilled",
	"MaterialSymbolsSharp",
	"MaterialSymbolsSharpFilled"
];

const exports: Record<string, Icon<keyof typeof glyphMap, string>> = fonts.reduce((acc, fontName) => {
	acc[fontName] = createIconSet(glyphMap, fontName, fontName + ".ttf");
	return acc;
}, {});

const paths = fonts.map(
	(fontName) =>
		`node_modules/material-symbols-expo/dist/assets/fonts/${fontName}.ttf`
);

export const MaterialSymbols = exports.MaterialSymbolsOutlined;
export const MaterialSymbolsFilled = exports.MaterialSymbolsOutlinedFilled;
export const MaterialSymbolsOutlined = exports.MaterialSymbolsOutlined;
export const MaterialSymbolsOutlinedFilled = exports.MaterialSymbolsOutlinedFilled;
export const MaterialSymbolsRounded = exports.MaterialSymbolsRounded;
export const MaterialSymbolsRoundedFilled = exports.MaterialSymbolsRoundedFilled;
export const MaterialSymbolsSharp = exports.MaterialSymbolsSharp;
export const MaterialSymbolsSharpFilled = exports.MaterialSymbolsSharpFilled;
export const MaterialSymbolsFonts = paths;
