import path from "path";
import express from "express";
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from '../webpack.config.js'

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(),
            DIST_DIR = __dirname,
            HTML_FILE = path.join(DIST_DIR, './App/index.html'),
            compiler = webpack(config)
  
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }))

  app.get('*', (req, res) => {
    res.sendFile(HTML_FILE)
  })

  const PORT = process.env.PORT || 3000
  app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
  })