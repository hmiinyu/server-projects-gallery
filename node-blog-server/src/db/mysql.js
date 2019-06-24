const { mysql } = require('m2-node');
const config = require('../conf/db');
const connection = mysql.connect(config.mysql);
const exec = (sql) => mysql.execSql(connection, sql);

module.exports = {
  exec
};
