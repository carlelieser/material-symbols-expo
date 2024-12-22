const {
	MaterialSymbolsRoundedFilledFontPath,
	MaterialSymbolsRoundedFontPath,
} = require("material-symbols-expo/paths");

module.exports = {
	plugins: [
		[
			"expo-font",
			{
				fonts: [
					MaterialSymbolsRoundedFontPath,
					MaterialSymbolsRoundedFilledFontPath,
				],
			},
		],
	],
};
