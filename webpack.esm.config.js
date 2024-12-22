import common from "./webpack.common.config.js";
import { merge } from "webpack-merge";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default merge(common, {
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		libraryTarget: "module",
	},
	experiments: {
		outputModule: true,
	},
});
