const { query } = require("express");
const express = require("express");
const router = express.Router();
const MysqlDao = require("../mysql/MysqlDao");
const Utils = require("../utils/util");

const connection = MysqlDao.connection;

router.get("/article_list", (req, res) => {
  const { start, limit } = Utils.parseQuery(req.query);

  const execRes =(info)=>{
    connection.end();
    res.send(info);
  }
  const queryData =(sta, lim, callback)=>{
    connection.query(
      "SELECT id, title, author, summary, sub_type, create_time, total_view FROM blog.article LIMIT ?, ?",
      [sta, lim],
      function (err, result) {
        if (err) {
          callback(Utils.parseFailedResult(err.message));
          return;
        }
        callback(Utils.parseSuccessResult(result, result.length))
      }
    );
  }

  connection.connect();
  queryData(start, limit, execRes);


  


  // connection.end();
  
});

module.exports = router;
