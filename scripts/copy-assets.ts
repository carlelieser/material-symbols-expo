import fs from "fs-extra";
import { rootDir } from "./common";
import * as path from "node:path";

const input = path.join(rootDir, "src", "assets");
const output = path.join(rootDir, "dist", "assets");

await fs.copy(input, output);
