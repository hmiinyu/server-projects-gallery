const { mysql } = require('m2-node');
const config = require('../constants/db.conf');
const connection = mysql.connect(config.mysql);
const exec = (sql) => mysql.execSql(connection, sql);

module.exports = {
  exec
};
