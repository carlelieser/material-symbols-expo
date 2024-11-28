import fs from "fs-extra";
import * as path from "node:path";
import { fonts, fontsDir } from "./common";

const URL_PREFIX =
	"https://github.com/google/material-design-icons/raw/refs/heads/master/variablefont/";
const URL_SUFFIX = "%5BFILL,GRAD,opsz,wght%5D.ttf";

for (const [fileName, fontName] of Object.entries(fonts)) {
	const url = `${URL_PREFIX}${fontName}${URL_SUFFIX}`;
	const output = path.join(fontsDir, `${fileName}.ttf`);
	const response = await fetch(url);
	const arrayBuffer = await response.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer);
	await fs.outputFile(output, buffer);
}

export {};
