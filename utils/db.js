const mysql = require("mysql");
const util = require("util");
require("dotenv").config();

/*const pool = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "ChatLuShop",
    connectionLimit: 50,
});*/

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: process.env.DB_CONNECT_LIMIT,
});

const poo_query = util.promisify(pool.query).bind(pool);

module.exports = {
  load: (sql) => {
    return poo_query(sql);
  },
  add: (entity, tableName) => {
    return poo_query(`insert into ${tableName} set ? `, entity);
  },

  patch: (entity, condition, tblName) => {
    return poo_query(`update ${tblName} set ? where ?`, [entity, condition]);
  },
  del: (condition, tblName) => {
    const sql = `delete from ${tblName} where ?`;
    return poo_query(sql, condition);
  },
};
