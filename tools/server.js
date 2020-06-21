const path = require("path");

const express = require("express");
const open = require("open");
const compression = require("compression");
const favicon = require("serve-favicon");

/*eslint-disable no-console */

const port = 80; //process.env.PORT || 3000;
const app = express();

app.use(compression());
app.use(express.static("public"));
app.use(
  favicon(path.join(__dirname, "../", "assets", "public", "favicon.png"))
);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
