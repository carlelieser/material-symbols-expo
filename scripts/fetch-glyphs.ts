import * as fs from "node:fs";
import { FontMetadata } from "../types";

const output = "src/glyphMap.ts";
const url =
	"https://fonts.google.com/metadata/icons?key=material_symbols&incomplete=true";
const response = await fetch(url);
const text = await response.text();
const objectString = text.replace(")]}'", "");
const data = JSON.parse(objectString) as FontMetadata;
const glyphs = data.icons.map((icon) => {
	return icon.name;
});

const glyphMap = glyphs.reduce(
	(acc, glyph, index) => {
		acc[glyph] = glyph;
		return acc;
	},
	{} as Record<string, string>,
);

const glyphMapFilled = glyphs.reduce(
	(acc, glyph, index) => {
		acc[glyph] = glyph + "_filled";
		return acc;
	},
	{} as Record<string, string>,
);

await fs.promises.writeFile(
	output,
	`export const glyphMap = ${JSON.stringify(glyphMap)};\nexport const glyphMapFilled = ${JSON.stringify(glyphMapFilled)};`,
);

export {};
