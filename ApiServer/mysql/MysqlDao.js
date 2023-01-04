const mysql = require("mysql");
let pool = mysql.createPool({
  host: "182.61.5.126",
  user: "root",
  password: "f110112119!",
  database: "blog",
  useConnectionPooling: true
});

exports.pool = pool;

