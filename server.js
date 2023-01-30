const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const nunjucks = require("nunjucks");

dotenv.config();

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

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
