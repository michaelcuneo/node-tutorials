import { nodeHandler } from "./nodeHandler.js";
import { browserHandler } from "./browserHandler.js";
const isNode = true;
const handle = isNode ? nodeHandler : browserHandler;
handle();
