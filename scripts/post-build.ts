import fs from "fs-extra";
import fg from "fast-glob";
import * as path from "node:path";
import * as prettier from "prettier";

await fs.remove("./types/common.d.ts");
await fs.remove("./types/glyphMap.d.ts");

const declarationFiles = await fg("./types/*.d.ts");
const formattingOptions = await prettier.resolveConfig(".prettierrc");

for await (const file of declarationFiles) {
	const name = path.basename(file, ".d.ts");
	const content = await fs.promises.readFile(file, { encoding: "utf-8" });
	const moduleWrapped = `declare module "material-symbols-expo/${name}" {\n${content}\n}`;
	const formatted = await prettier.format(moduleWrapped, {
		...formattingOptions,
		filepath: ".prettierrc",
	});
	await fs.outputFile(file, formatted, { encoding: "utf-8" });
}
