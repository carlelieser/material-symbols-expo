import { glyphMap } from "./glyphMap";
import { MaterialSymbols } from "./MaterialSymbols";
import { fontAssets, paths, pathsMap } from "./common";
import MaterialSymbolsIconSet from "./icon-set";

export type MaterialSymbolsGlyphs = keyof typeof glyphMap;

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

export const MaterialSymbolsOutlinedFontAsset = {
	MaterialSymbolsOutlined: MaterialSymbolsOutlinedFont,
};
export const MaterialSymbolsOutlinedFilledFontAsset = {
	MaterialSymbolsOutlinedFilled: MaterialSymbolsOutlinedFilledFont,
};
export const MaterialSymbolsRoundedFontAsset = {
	MaterialSymbolsRounded: MaterialSymbolsRoundedFont,
};
export const MaterialSymbolsRoundedFilledFontAsset = {
	MaterialSymbolsRoundedFilled: MaterialSymbolsRoundedFilledFont,
};
export const MaterialSymbolsSharpFontAsset = {
	MaterialSymbolsSharp: MaterialSymbolsSharpFont,
};
export const MaterialSymbolsSharpFilledFontAsset = {
	MaterialSymbolsSharpFilled: MaterialSymbolsSharpFilledFont,
};

export const MaterialSymbolsOutlinedFontPath = pathsMap.MaterialSymbolsOutlined;
export const MaterialSymbolsOutlinedFilledFontPath =
	pathsMap.MaterialSymbolsOutlinedFilled;
export const MaterialSymbolsRoundedFontPath = pathsMap.MaterialSymbolsRounded;
export const MaterialSymbolsRoundedFilledFontPath =
	pathsMap.MaterialSymbolsRoundedFilled;
export const MaterialSymbolsSharpFontPath = pathsMap.MaterialSymbolsSharp;
export const MaterialSymbolsSharpFilledFontPath =
	pathsMap.MaterialSymbolsSharpFilled;

export { MaterialSymbols, MaterialSymbolsIconSet };
