const express = require("express");
const router = express.Router();
const MysqlDao = require("../mysql/MysqlDao");
const Utils = require("../utils/util");

const connection = MysqlDao.connection;

router.get("/article_list", (req, res) => {
  const { start, limit } = Utils.parseQuery(req.query);
  connection.connect();
  connection.query(
    "SELECT id, title, author, summary, sub_type, create_time, total_view FROM blog.article LIMIT ?, ?",
    [start, limit],
    function (err, result) {
      connection.end();
      if (err) {
        res.send(Utils.parseFailedResult(err.message));
        return;
      }
      res.send(Utils.parseSuccessResult(result, result.length));
    }
  );
  
});

module.exports = router;
