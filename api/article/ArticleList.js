const express = require("express");
const router = express.Router();
const MysqlDao = require("../mysql/MysqlDao");
const Utils = require("../utils/util");

const pool = MysqlDao.pool;

router.get("/article_list", (req, res) => {
  const { start, limit } = Utils.parseQuery(req.query);
  pool.getConnection(function (err, connection) {
    connection.query(
      "SELECT id, title, author, summary, sub_type, create_time, total_view FROM blog.article LIMIT ?, ?",
      [start, limit],
      function (err, result) {
        if (err) {
          res.json(Utils.parseFailedResult(err.message));
          return;
        } else {
          res.json(Utils.parseSuccessResult(result, result.length));
        }
        connection.release();
      }
    );
  });
});

module.exports = router;
