import fs from "fs-extra";
import * as path from "node:path";
import { fontNames, fontsDir } from "./common";

const URL_PREFIX =
	"https://github.com/google/material-design-icons/raw/refs/heads/master/variablefont/";
const URL_SUFFIX = "%5BFILL,GRAD,opsz,wght%5D.ttf";

const fetchFont = async (fontName: string) => {
	const fileName = `${fontName}.ttf`;
	const url = `${URL_PREFIX}${fontName}${URL_SUFFIX}`;
	const output = path.join(fontsDir, fileName);
	const response = await fetch(url);
	const arrayBuffer = await response.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer);
	await fs.outputFile(output, buffer);
};

const fetchFonts = async () => {
	await Promise.all(fontNames.map(fetchFont));
};

await fetchFonts();

export {};
