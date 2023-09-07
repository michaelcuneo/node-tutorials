import config from "./src/config.js";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import nodeExternals from "webpack-node-externals";

export default {
  entry: { main: ["./src/server.js"] },
  output: {
    path: config.distFolder,
    filename: "bundle.js",
    publicPath: "/public/",
  },
  plugins: [new NodePolyfillPlugin()],
  mode: config.isProd ? "production" : "development",
  target: config.isProd ? "web" : "node",
  externals: [nodeExternals()],
};
