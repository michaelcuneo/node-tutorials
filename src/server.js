import path from "path";
import express from "express";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/tutorial_1", (req, res) => {
  res.sendFile(path.join(__dirname, "/App/tutorial_1.html"));
});

app.get("/tutorial_2", (req, res) => {
  res.sendFile(path.join(__dirname, "/App/tutorial_2.html"));
});

app.listen(3000, () => {
  console.log(`App listening to 3000....`);
});
