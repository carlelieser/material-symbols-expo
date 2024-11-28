import fs from "fs-extra";

const URL_PREFIX =
	"https://github.com/google/material-design-icons/raw/refs/heads/master/variablefont/";
const URL_SUFFIX = "%5BFILL,GRAD,opsz,wght%5D.ttf";
const fonts = {
	"material-symbols-outlined": "MaterialSymbolsOutlined",
	"material-symbols-rounded": "MaterialSymbolsRounded",
	"material-symbols-sharp": "MaterialSymbolsSharp",
};

for (const [fileName, fontName] of Object.entries(fonts)) {
	const url = `${URL_PREFIX}${fontName}${URL_SUFFIX}`;
	const path = `./src/assets/fonts/${fileName}.ttf`;
	const response = await fetch(url);
	const arrayBuffer = await response.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer);
	await fs.outputFile(path, buffer);
}

export {};
