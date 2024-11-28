import {glyphMap, glyphMapFilled} from "./glyphMap";
import createIconSet from '@expo/vector-icons/createIconSet';

const MaterialSymbolsOutlinedFont = require('./assets/fonts/material-symbols-outlined.ttf');
const MaterialSymbolsRoundedFont = require('./assets/fonts/material-symbols-rounded.ttf');
const MaterialSymbolsSharpFont = require('./assets/fonts/material-symbols-sharp.ttf');

export const MaterialSymbols = createIconSet(glyphMap, 'MaterialSymbolsOutlined', MaterialSymbolsOutlinedFont);

export const MaterialSymbolsFilled = createIconSet(glyphMapFilled, 'MaterialSymbolsOutlinedFilled', MaterialSymbolsOutlinedFont);

export const MaterialSymbolsOutlined = createIconSet(glyphMap, 'MaterialSymbolsOutlined', MaterialSymbolsOutlinedFont);

export const MaterialSymbolsOutlinedFilled = createIconSet(glyphMapFilled, 'MaterialSymbolsOutlinedFilled', MaterialSymbolsOutlinedFont);

export const MaterialSymbolsRounded = createIconSet(glyphMap, 'MaterialSymbolsRounded', MaterialSymbolsRoundedFont);

export const MaterialSymbolsRoundedFilled = createIconSet(glyphMapFilled, 'MaterialSymbolsRoundedFilled', MaterialSymbolsRoundedFont);

export const MaterialSymbolsSharp = createIconSet(glyphMap, 'MaterialSymbolsSharp', MaterialSymbolsSharpFont);

export const MaterialSymbolsSharpFilled = createIconSet(glyphMapFilled, 'MaterialSymbolsSharpFilled', MaterialSymbolsSharpFont);

export const MaterialSymbolsFonts = {
	"MaterialSymbolsOutlined": MaterialSymbolsOutlinedFont,
	"MaterialSymbolsOutlinedFilled": MaterialSymbolsOutlinedFont,
	"MaterialSymbolsRounded": MaterialSymbolsRoundedFont,
	"MaterialSymbolsRoundedFilled": MaterialSymbolsRoundedFont,
	"MaterialSymbolsSharp": MaterialSymbolsSharpFont,
	"MaterialSymbolsSharpFilled": MaterialSymbolsSharpFont,
}