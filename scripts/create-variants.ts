import { fontNames, fontsDir } from "./common";
import fs from "fs-extra";
import * as path from "node:path";
import { instantiateVariableFont } from "@web-alchemy/fonttools";

const createVariants = async (fontName: string) => {
	await createFillVariant(fontName, 0);
	await createFillVariant(fontName, 1);
};

const createFillVariant = async (fontName: string, fill: number) => {
	const fileName = `${fontName}Variable.ttf`;
	const fontPath = path.join(fontsDir, fileName);
	const font = await fs.readFile(fontPath);
	const suffix = fill ? "Filled" : "";
	const output = path.join(fontsDir, `${fontName}${suffix}.ttf`);
	const outputBuffer = await instantiateVariableFont(font, {
		FILL: fill,
		GRAD: 100,
		opsz: 24,
		wght: 400,
	});
	await fs.outputFile(output, outputBuffer);
};

await Promise.all(fontNames.map(createVariants));
