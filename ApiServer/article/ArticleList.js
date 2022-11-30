const express = require("express");
const router = express.Router();
const MysqlDao = require("../mysql/MysqlDao");
const Utils = require("../utils/util");

const connection = MysqlDao.connection;

router.get("/article_list", (req, res) => {
  connection.connect();
  const { start, limit } = Utils.parseQuery(req.query);
  connection.query(
    "SELECT * FROM blog.article LIMIT ?, ?",
    [start, limit],
    function (err, result) {
      if (err) {
        res.send(Utils.parseFailedResult(err.message));
        return;
      }
      res.send(Utils.parseSuccessResult(result, result.length));
    }
  );
  // connection.end();
});

module.exports = router;
