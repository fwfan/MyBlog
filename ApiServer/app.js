const express = require("express");
const ArticleList = require("./article/ArticleList");
const app = express();
const port = 3636;

app.use('/article',require('./article/ArticleList'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
