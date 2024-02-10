const videoRouter = require("./routes/video");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");
const path = require("path");
const app = express();
const port = 3000;
// const ngrok = require("ngrok");
// (async function () {
//   const url = await ngrok.connect();
// })();
app.use(express.static("public"));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(expressLayouts);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.use("/video/", videoRouter);

app.listen(port, (error) => {
  if (!error) {
    console.log(`Server running and App is listening on port ${port}`);
  } else {
    console.log(`Error occurred, server can't start. Error: ${error}`);
  }
});
