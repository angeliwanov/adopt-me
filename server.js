import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import renderApp from "./dist/server/ServerApp.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3001;

//write some method that calls that every 5 secs and cache the response

const html = fs
  .readFileSync(path.resolve(__dirname, "./dist/client/index.html"))
  .toString();

const parts = html.split("not rendered");

const app = express();

app.use(
  "/assets",
  express.static(path.resolve(__dirname, "./dist/client/assets"))
);

app.use((req, res) => {
  res.write(parts[0]);

  const stream = renderApp(req.url, {
    onShellReady() {
      //if it is a crawler, do nothing here
      stream.pipe(res);
    },
    onShellError() {
      //TODO error handling here
    },
    onAllReady() {
      //if it is a crawler
      //stream.pipe(res);

      //last thing to write
      res.write(parts[1]);
      res.end();
    },
    onError(err) {
      console.log(err);
    },
  });
});

app.listen(PORT);
console.log(`listening on http://localhost:${PORT}`);
