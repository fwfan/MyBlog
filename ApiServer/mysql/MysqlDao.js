const mysql = require("mysql");
let connection = mysql.createConnection({
  host: "182.61.5.126",
  user: "root",
});

exports.connection = connection;

// console.log(
//   "--------------------------SQL START----------------------------\n\n"
// );
// console.log("SQL:", sql);
// console.log("SQL Params:", params);
// console.log("SQL Result:", result);
// console.log(
//   "--------------------------SQL END------------------------------\n\n"
// );
