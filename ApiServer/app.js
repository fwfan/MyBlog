const express = require("express");
const ArticleList = require("./article/ArticleList");
const app = express();
const port = 3636;

app.use('/article',require('./article/ArticleList'));
app.get('/hello', function(req, res){
  res.send("hello world")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
