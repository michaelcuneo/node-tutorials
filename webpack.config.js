import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./src/server.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  module: {},
  target: "node",
  mode: "development",
};
