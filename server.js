const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const nunjucks = require("nunjucks");
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});

app.get("/", function (req, res) {
  res.render("index.njk", { page: "HOME PAGE" });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
