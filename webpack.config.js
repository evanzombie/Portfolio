const path = require("path");
module.exports = {
	entry: "./src/js/index.jsx",
	output: {
		filename: "bundle.js",
		path: __dirname
		// path: path.join(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: "babel-loader",
					query: {
						presets: ["env"]
					}
				}
			}
		]
	}
};
