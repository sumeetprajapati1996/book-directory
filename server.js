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
  // noCache: false,
  watch: true,
});

const homeRoutes = require('./routes/homeRoutes');
app.use(homeRoutes)
const bookRoutes = require('./routes/bookRoutes');
app.use(bookRoutes);

app.get('*', (req, res) => {
  res.render('pages/404/index.html')
})

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
