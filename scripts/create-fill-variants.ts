import { fontNames, fontsDir } from "./common";
import fs from "fs-extra";
import * as path from "node:path";
import { instantiateVariableFont } from "@web-alchemy/fonttools";

const createFillVariant = async (fontName: string) => {
	const fileName = fontName + ".ttf";
	const fontPath = path.join(fontsDir, fileName);
	const font = await fs.readFile(fontPath);
	const output = path.join(fontsDir, `${fontName}Filled.ttf`);
	const outputBuffer = await instantiateVariableFont(font, {
		FILL: 1,
	});
	await fs.outputFile(output, outputBuffer);
};

await Promise.all(fontNames.map(createFillVariant));
