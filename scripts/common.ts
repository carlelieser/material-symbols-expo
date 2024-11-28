import * as path from "node:path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rootDir = path.join(__dirname, "..");

export const fontsDir = path.join(rootDir, "src", "assets", "fonts");

export const fonts = {
	"material-symbols-outlined": "MaterialSymbolsOutlined",
	"material-symbols-rounded": "MaterialSymbolsRounded",
	"material-symbols-sharp": "MaterialSymbolsSharp",
};
