// Get list of all books
exports.list = (req, res) => {
  res.render("pages/books/index.html", {
    books: [{ id: 1 }, { id: 2 }],
  });
};
