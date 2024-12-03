import { glyphMap } from "./glyphMap";
import createIconSet from "@expo/vector-icons/createIconSet";
import { Icon } from "@expo/vector-icons/build/createIconSet";
import { MaterialSymbols } from "./MaterialSymbols";

export type MaterialSymbolsGlyphs = keyof typeof glyphMap;

const fonts = [
	"MaterialSymbolsOutlined",
	"MaterialSymbolsOutlinedFilled",
	"MaterialSymbolsRounded",
	"MaterialSymbolsRoundedFilled",
	"MaterialSymbolsSharp",
	"MaterialSymbolsSharpFilled",
];

const fontAssets = {
	MaterialSymbolsOutlined: require("./assets/fonts/MaterialSymbolsOutlined.ttf"),
	MaterialSymbolsOutlinedFilled: require("./assets/fonts/MaterialSymbolsOutlinedFilled.ttf"),
	MaterialSymbolsRounded: require("./assets/fonts/MaterialSymbolsRounded.ttf"),
	MaterialSymbolsRoundedFilled: require("./assets/fonts/MaterialSymbolsRoundedFilled.ttf"),
	MaterialSymbolsSharp: require("./assets/fonts/MaterialSymbolsSharp.ttf"),
	MaterialSymbolsSharpFilled: require("./assets/fonts/MaterialSymbolsSharpFilled.ttf"),
};

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

const pathsMap = paths.reduce(
	(acc, path, i) => {
		const fontName = fonts[i];
		acc[fontName] = path;
		return acc;
	},
	{} as Record<keyof typeof fontAssets, string>,
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
export const MaterialSymbolsFontPaths = paths;
export const MaterialSymbolsFontPathsMap = pathsMap;
export const MaterialSymbolsFonts = fontAssets;
export const MaterialSymbolsGlyphMap = glyphMap;

export const MaterialSymbolsOutlinedFont = fontAssets.MaterialSymbolsOutlined;
export const MaterialSymbolsOutlinedFilledFont =
	fontAssets.MaterialSymbolsOutlinedFilled;
export const MaterialSymbolsRoundedFont = fontAssets.MaterialSymbolsRounded;
export const MaterialSymbolsRoundedFilledFont =
	fontAssets.MaterialSymbolsRoundedFilled;
export const MaterialSymbolsSharpFont = fontAssets.MaterialSymbolsSharp;
export const MaterialSymbolsSharpFilledFont =
	fontAssets.MaterialSymbolsSharpFilled;

export const MaterialSymbolsOutlinedFontPath = pathsMap.MaterialSymbolsOutlined;
export const MaterialSymbolsOutlinedFilledFontPath =
	pathsMap.MaterialSymbolsOutlinedFilled;
export const MaterialSymbolsRoundedFontPath = pathsMap.MaterialSymbolsRounded;
export const MaterialSymbolsRoundedFilledFontPath =
	pathsMap.MaterialSymbolsRoundedFilled;
export const MaterialSymbolsSharpFontPath = pathsMap.MaterialSymbolsSharp;
export const MaterialSymbolsSharpFilledFontPath =
	pathsMap.MaterialSymbolsSharpFilled;

export { MaterialSymbols };
