import path from "path";
import { fileURLToPath } from "url";
import CopyWebpackPlugin from "copy-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	entry: {
		index: "./src/index.ts",
		icon: "./src/MaterialSymbols.tsx",
		paths: "./src/paths.ts",
		"icon-set": "./src/icon-set.ts",
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx|js|jsx)$/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.ttf/,
				use: {
					loader: "ignore-loader",
				},
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
	},
	mode: "production",
	devtool: "source-map",
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, "src/assets"),
					to: path.resolve(__dirname, "dist/assets"),
				},
			],
		}),
	],
	externals: {
		react: "react",
		"react-dom": "react-dom",
		"react-native": "react-native",
	},
};
