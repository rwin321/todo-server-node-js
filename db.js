const Pool = require("pg").Pool;

const pool = new Pool({
  user: "rwin",
  host: "localhost",
  database: "todos",
  port: "5432",
  password: "Ervin321_321",
});

module.exports = pool;
