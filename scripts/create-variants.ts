import { fontNames, fontsDir } from "./common";
import fs from "fs-extra";
import * as path from "node:path";
import fg from "fast-glob";
import { instantiateVariableFont, ttx } from "@web-alchemy/fonttools";
import xmlParser from "xml2json";

const titleCaseWithSpaces = (str: string) =>
	str
		.split("")
		.map((char) => (char.toUpperCase() === char ? ` ${char}` : char))
		.join("")
		.trim();

const fontNameWithVariant = (fontName: string, fill: number) =>
	fontName + (fill ? "Filled" : "");

const changeFontNameRecord = async (
	fontPath: string,
	oldFontName: string,
	newFontName: string,
) => {
	const ttxBuffer = await ttx(fontPath);
	const ttxPath = path.join(path.dirname(fontPath), `${oldFontName}_TTX.ttx`);
	await fs.outputFile(ttxPath, ttxBuffer);
	const xmlObj = xmlParser.toJson(ttxBuffer, {
		reversible: true,
		object: true,
	});

	xmlObj["ttFont"]["name"]["namerecord"].forEach((record: any) => {
		if (record.nameID === "3" || record.nameID === "6") {
			const regularFontName = `${oldFontName}-Regular`;
			record["$t"] = record["$t"].replace(regularFontName, newFontName);
		}
		if (record.nameID === "4") {
			record["$t"] = titleCaseWithSpaces(newFontName);
		}
	});

	return xmlObj;
};

const ttxToTtf = async (
	xmlObj: object,
	outputDir: string,
	fontName: string,
) => {
	const xml = JSON.stringify(xmlObj);
	const parsedXml = xmlParser.toXml(xml);
	const xmlWithHeader = `<?xml version="1.0" encoding="UTF-8"?>
${parsedXml}`;
	const xmlPath = path.join(outputDir, `${fontName}.ttx`);
	const fontPath = path.join(outputDir, `${fontName}.ttf`);
	await fs.outputFile(xmlPath, xmlWithHeader);
	const outputBuffer = await ttx(xmlPath);
	await fs.outputFile(fontPath, outputBuffer);
};

const changeFontName = async (
	fontPath: string,
	oldFontName: string,
	newFontName: string,
) => {
	const xmlObj = await changeFontNameRecord(
		fontPath,
		oldFontName,
		newFontName,
	);
	await ttxToTtf(xmlObj, path.dirname(fontPath), newFontName);
};

const createStaticFontFromVariableFont = async (
	fontName: string,
	fill: number,
) => {
	const variableFontFileName = `${fontName}Variable.ttf`;
	const variableFontPath = path.join(fontsDir, variableFontFileName);
	const variableFont = await fs.readFile(variableFontPath);
	const newFontName = fontNameWithVariant(fontName, fill);
	const staticFontPath = path.join(fontsDir, `${newFontName}.ttf`);
	const staticFontBuffer = await instantiateVariableFont(variableFont, {
		FILL: fill,
		GRAD: 0,
		opsz: 24,
		wght: 400,
	});
	await fs.outputFile(staticFontPath, staticFontBuffer);
	return staticFontPath;
};

const prepareFont = async (fontName: string, fill: number) => {
	const newFontName = fontNameWithVariant(fontName, fill);
	const staticFontPath = await createStaticFontFromVariableFont(
		fontName,
		fill,
	);
	await changeFontName(staticFontPath, fontName, newFontName);
};

const cleanup = async () => {
	const temporaryFiles = await fg("*.ttx", {
		cwd: fontsDir,
	});
	for await (const fileName of temporaryFiles) {
		const filePath = path.join(fontsDir, fileName);
		await fs.unlink(filePath);
	}
};

const createVariants = async (fontName: string) => {
	await prepareFont(fontName, 0);
	await prepareFont(fontName, 1);
};

await Promise.all(fontNames.map(createVariants));
await cleanup();
