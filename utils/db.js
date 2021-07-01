const mysql = require("mysql");
const util = require("util");

/*const pool = mysql.createPool({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "ChatLuShop",
    connectionLimit: 50,
});*/

const pool = mysql.createPool({
    host: "sql6.freemysqlhosting.net",
    port: "3306",
    user: "sql6422363",
    password: "CH9M7q8UuK",
    database: "sql6422363",
    connectionLimit: 50,
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
}