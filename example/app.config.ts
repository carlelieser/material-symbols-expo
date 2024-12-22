import "ts-node/register";
import {
	MaterialSymbolsRoundedFilledFontPath,
	MaterialSymbolsRoundedFontPath,
} from "material-symbols-expo/paths";
import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
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

export default config;
