const { createPool } = require("mysql");

const pool = createPool({
  host: "sql6.freesqldatabase.com",
  port: 3306,
  user: "sql6517827",
  password: "vnpaLdFf4H",
  database: "sql6517827",
  connectionLimit: 10
});

module.exports = pool;