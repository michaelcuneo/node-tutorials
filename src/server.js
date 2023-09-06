import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let server;
let host = "0.0.0.0"; // This IP range means 'EVERYWHERE', which will respond to LocalHost and FQDNs.
let port = 3000;
let index;
let tutorial_1;
let tutorial_2;
let css;
let js;
let png;

fs.readFile(__dirname + '/App/index.css', (err, data) => {
  if (err) {
    throw err;
  }
  css = data;
});

fs.readFile(__dirname + '/App/index.js', (err, data) => {
  if (err) {
    throw err;
  }
  js = data;
});

fs.readFile(__dirname + '/App/img/cv_tutorial_1.png', (err, data) => {
  if (err) {
    throw err;
  }
  png = data;
});

fs.readFile(__dirname + '/App/index.html', (err, data) => {
  if (err) {
    throw err;
  }
  index = data;
});

fs.readFile(__dirname + '/App/tutorial_1.html', (err, data) => {
  if (err) {
    throw err;
  }
  tutorial_1 = data;
});

fs.readFile(__dirname + '/App/tutorial_2.html', (err, data) => {
  if (err) {
    throw err;
  }
  tutorial_2 = data;
});

const requestListener = (req, res) => {
  const url = req.url;
  const statusCode = 200;
  res.statusCode = statusCode;

  if (url === "/") {
    res.write(index);
    return res.end();
  } else if (url === "/tutorial_1") {
    res.write(tutorial_1);
    return res.end();
  } else if (url === "/tutorial_2") {
    res.write(tutorial_2);
    return res.end();
  }

  if (url.indexOf(".css") != -1) {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(css);
    return res.end();
  }

  if (req.url.indexOf(".js") != -1) {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.write(js);
    return res.end();
  }

  if (req.url.indexOf(".png") != -1) {
    res.writeHead(200, { "Content-Type": "image/png" });
    res.write(png);
    return res.end();
  }
};

server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running and listening on http://${host}:${port}`);
});
