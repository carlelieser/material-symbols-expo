import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { MaterialSymbolsGlyphs, MaterialSymbolsIconSet } from "./index";
import { useMemo } from "react";

export interface MaterialSymbolsProps extends IconProps<MaterialSymbolsGlyphs> {
	variant?: "outlined" | "rounded" | "sharp";
	filled?: boolean;
}

export const MaterialSymbols = (props: MaterialSymbolsProps) => {
	const { variant = "outlined", filled = false, ...rest } = props;
	const IconSet = useMemo(() => {
		const style = variant.charAt(0).toUpperCase() + variant.slice(1);
		const fill = filled ? "Filled" : "";
		const key = `MaterialSymbols${style}${fill}`;
		return MaterialSymbolsIconSet[key];
	}, [variant]);

	return <IconSet {...rest} />;
};
