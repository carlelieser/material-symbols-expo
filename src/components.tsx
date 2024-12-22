import createIconSet from "@expo/vector-icons/createIconSet";
import { glyphMap } from "./glyphMap";
import { Icon, IconProps } from "@expo/vector-icons/build/createIconSet";
import { MaterialSymbolsGlyphs } from "./index";
import { fonts } from "./common";
import React, { useMemo } from "react";

export const MaterialSymbolsIconSet = fonts.reduce(
	(acc, fontName) => {
		acc[fontName] = createIconSet(glyphMap, fontName, fontName);
		return acc;
	},
	{} as Record<string, Icon<MaterialSymbolsGlyphs, string>>,
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

export interface MaterialSymbolsProps extends IconProps<MaterialSymbolsGlyphs> {
	variant?: "outlined" | "rounded" | "sharp";
	filled?: boolean;
}

export const MaterialSymbols = (props: MaterialSymbolsProps) => {
	const { variant = "outlined", filled = false, size = 24, ...rest } = props;
	const IconSet = useMemo(() => {
		const style = variant.charAt(0).toUpperCase() + variant.slice(1);
		const fill = filled ? "Filled" : "";
		const key = `MaterialSymbols${style}${fill}`;
		return MaterialSymbolsIconSet[key];
	}, [variant, filled]);

	return <IconSet size={size} {...rest} />;
};
