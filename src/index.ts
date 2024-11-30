import { glyphMap } from "./glyphMap";
import createIconSet from "@expo/vector-icons/createIconSet";
import { fonts } from "../scripts/common";

const exports = {};

fonts.forEach((fontName) => {
	exports[fontName] = createIconSet(glyphMap, fontName, fontName + ".ttf");
});

export default exports;
