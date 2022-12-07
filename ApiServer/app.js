const express = require("express");
const ArticleList = require("./article/ArticleList");
const connection =require("./mysql/MysqlDao");
const app = express();
const port = 3636;
// connection.connection.connect();

app.use('/article',require('./article/ArticleList'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
