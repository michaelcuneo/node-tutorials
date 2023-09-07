import path from "path";
import nodeExternals from "webpack-node-externals";
import HtmlWebpackPlugin from "html-webpack-plugin";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import TerserPlugin from "terser-webpack-plugin";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEBUG = true;

export default {
  entry: "./src/server.js",
  devtool: "source-map",
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
    new HtmlWebpackPlugin({
      template: "./src/App/index.html",
      publicPath: '/',
      filename: "./index.html",
      excludeChunks: [ 'server' ]
    })
  ],
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [
    nodeExternals()
  ],
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins 
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            //options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
       test: /\.(png|svg|jpg|gif)$/,
       use: ['file-loader']
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
