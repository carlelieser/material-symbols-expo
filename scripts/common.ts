import * as path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rootDir = path.join(__dirname, "..");
export const fontsDir = path.join(rootDir, "src", "assets", "fonts");

export const variants = ["Outlined", "Rounded", "Sharp"];
export const fontNames = variants.map((variant) => "MaterialSymbols" + variant);
export const filledFontNames = fontNames.map((fontName) => fontName + "Filled");
export const fonts = [...fontNames, ...filledFontNames];
