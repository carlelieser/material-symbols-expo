import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	output: {
		assetModuleFilename: "../assets/[name][ext]",
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
				test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
				type: "asset/resource",
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
