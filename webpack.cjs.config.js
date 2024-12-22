import common from "./webpack.common.config.js";
import { merge } from "webpack-merge";
import path from "path";
import { fileURLToPath } from "url";
import CopyWebpackPlugin from "copy-webpack-plugin";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default merge(common, {
	output: {
		path: path.resolve(__dirname, "dist", "cjs"),
		filename: "[name].cjs",
		libraryTarget: "commonjs2",
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src", "assets"),
					to: path.resolve(__dirname, "dist", "cjs", "assets"),
				},
			],
		}),
	],
});