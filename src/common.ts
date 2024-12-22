export const fonts = [
	"MaterialSymbolsOutlined",
	"MaterialSymbolsOutlinedFilled",
	"MaterialSymbolsRounded",
	"MaterialSymbolsRoundedFilled",
	"MaterialSymbolsSharp",
	"MaterialSymbolsSharpFilled",
];

export const fontAssets = {
	MaterialSymbolsOutlined: require("./assets/fonts/MaterialSymbolsOutlined.ttf"),
	MaterialSymbolsOutlinedFilled: require("./assets/fonts/MaterialSymbolsOutlinedFilled.ttf"),
	MaterialSymbolsRounded: require("./assets/fonts/MaterialSymbolsRounded.ttf"),
	MaterialSymbolsRoundedFilled: require("./assets/fonts/MaterialSymbolsRoundedFilled.ttf"),
	MaterialSymbolsSharp: require("./assets/fonts/MaterialSymbolsSharp.ttf"),
	MaterialSymbolsSharpFilled: require("./assets/fonts/MaterialSymbolsSharpFilled.ttf"),
};

export const paths = fonts.map(
	(fontName) =>
		`node_modules/material-symbols-expo/dist/assets/${fontName}.ttf`,
);

export const pathMap = paths.reduce((acc, path, i) => {
		const fontName = fonts[i] as keyof typeof fontAssets;
		acc[fontName] = path;
		return acc;
	},
	{} as Record<keyof typeof fontAssets, string>,
);
