import fs from "fs-extra";
import { rootDir } from "./common";
import * as path from "node:path";

const input = path.join(rootDir, "src", "assets");
const cjsPath = path.join(rootDir, "cjs");
const esmPath = path.join(rootDir, "esm");
const emitPackageJson = (root: string, type: string) =>
	fs.outputFile(
		path.join(root, "package.json"),
		JSON.stringify({ type }, null, 2),
	);

await Promise.all([
	fs.copy(input, path.join(cjsPath, "assets")),
	fs.copy(input, path.join(esmPath, "assets")),
	emitPackageJson(cjsPath, "commonjs"),
	emitPackageJson(esmPath, "module"),
]);
