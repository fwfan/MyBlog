const mysql = require("mysql");
let connection = mysql.createConnection({
  host: "182.61.5.126",
  user: "root",
  password: "f110112119!",
  database: "blog",
  useConnectionPooling: true
});

exports.connection = connection;

