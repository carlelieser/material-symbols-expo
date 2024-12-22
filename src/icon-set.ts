import createIconSet from "@expo/vector-icons/createIconSet";
import { glyphMap } from "./glyphMap";
import { Icon } from "@expo/vector-icons/build/createIconSet";
import { MaterialSymbolsGlyphs } from "./index";
import { fonts } from "./common";

export default fonts.reduce(
	(acc, fontName) => {
		acc[fontName] = createIconSet(glyphMap, fontName, fontName);
		return acc;
	},
	{} as Record<string, Icon<MaterialSymbolsGlyphs, string>>,
);