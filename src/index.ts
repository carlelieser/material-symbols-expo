import { glyphMap } from "./glyphMap";
import createIconSet from "@expo/vector-icons/createIconSet";

const MaterialSymbolsOutlinedFont = require("./assets/fonts/material-symbols-outlined.ttf");
const MaterialSymbolsOutlinedFilledFont = require("./assets/fonts/material-symbols-outlined-filled.ttf");
const MaterialSymbolsRoundedFont = require("./assets/fonts/material-symbols-rounded.ttf");
const MaterialSymbolsRoundedFilledFont = require("./assets/fonts/material-symbols-rounded-filled.ttf");
const MaterialSymbolsSharpFont = require("./assets/fonts/material-symbols-sharp.ttf");
const MaterialSymbolsSharpFilledFont = require("./assets/fonts/material-symbols-sharp-filled.ttf");

export const MaterialSymbols = createIconSet(
	glyphMap,
	"MaterialSymbolsOutlined",
	MaterialSymbolsOutlinedFont,
);

export const MaterialSymbolsFilled = createIconSet(
	glyphMap,
	"MaterialSymbolsOutlinedFilled",
	MaterialSymbolsOutlinedFilledFont,
);

export const MaterialSymbolsOutlined = createIconSet(
	glyphMap,
	"MaterialSymbolsOutlined",
	MaterialSymbolsOutlinedFont,
);

export const MaterialSymbolsOutlinedFilled = createIconSet(
	glyphMap,
	"MaterialSymbolsOutlinedFilled",
	MaterialSymbolsOutlinedFilledFont,
);

export const MaterialSymbolsRounded = createIconSet(
	glyphMap,
	"MaterialSymbolsRounded",
	MaterialSymbolsRoundedFont,
);

export const MaterialSymbolsRoundedFilled = createIconSet(
	glyphMap,
	"MaterialSymbolsRoundedFilled",
	MaterialSymbolsRoundedFilledFont,
);

export const MaterialSymbolsSharp = createIconSet(
	glyphMap,
	"MaterialSymbolsSharp",
	MaterialSymbolsSharpFont,
);

export const MaterialSymbolsSharpFilled = createIconSet(
	glyphMap,
	"MaterialSymbolsSharpFilled",
	MaterialSymbolsSharpFilledFont,
);

export const MaterialSymbolsFonts = {
	MaterialSymbolsOutlined: MaterialSymbolsOutlinedFont,
	MaterialSymbolsOutlinedFilled: MaterialSymbolsOutlinedFilledFont,
	MaterialSymbolsRounded: MaterialSymbolsRoundedFont,
	MaterialSymbolsRoundedFilled: MaterialSymbolsRoundedFilledFont,
	MaterialSymbolsSharp: MaterialSymbolsSharpFont,
	MaterialSymbolsSharpFilled: MaterialSymbolsSharpFilledFont,
};
