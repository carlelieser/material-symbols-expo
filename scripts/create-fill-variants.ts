import { fonts, fontsDir } from "./common";
import fs from "fs-extra";
import * as path from "node:path";
import { instantiateVariableFont } from "@web-alchemy/fonttools";

for (const fileName in fonts) {
	const fontPath = path.join(fontsDir, `${fileName}.ttf`);
	const font = await fs.readFile(fontPath);
	const output = path.join(fontsDir, `${fileName}-filled.ttf`);
	const outputBuffer = await instantiateVariableFont(font, {
		FILL: 1,
	});
	await fs.outputFile(output, outputBuffer);
}
