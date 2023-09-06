import path from "path";
import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";

let DEBUG;

if (process.env.NODE_ENV === "production") {
  DEBUG = false;
} else {
  DEBUG = true;
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: DEBUG ? "bundle.js" : "bundle.min.js"
  },
  resolve: {
    fallback: {
      "fs": false,
    }
  },
  plugins: [
    new NodePolyfillPlugin(),
    new HtmlWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
	        loader: 'babel-loader',
	        options: {
	          presets: ['@babel/preset-env'],
	        },
        },
      }
    ],
  },
  optimization: {
	  minimize: true,
	  minimizer: [
  	  new TerserPlugin({
		    extractComments: false,
	    }),
	  ],
  },
  target: "web",
  mode: "development",
    devServer: {
    hot: true,
  },
};
