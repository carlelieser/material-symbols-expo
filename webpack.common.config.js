import path from "path";
import { fileURLToPath } from "url";
import CopyWebpackPlugin from "copy-webpack-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	output: {
		clean: true,
	},
	entry: {
		components: "./src/components.tsx",
		fonts: "./src/fonts.ts",
		glyphs: "./src/glyphs.ts",
		index: "./src/index.ts",
		paths: "./src/paths.ts",
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
	externals: {
		react: "react",
		"react-dom": "react-dom",
		"react-native": "react-native",
	},
};
