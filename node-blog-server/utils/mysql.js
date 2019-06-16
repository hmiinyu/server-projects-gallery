const mysql = require('mysql');
const config = require('../constants/db.conf');
const connection = mysql.createConnection(config);
const exec = (sql) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
};

module.exports = {
  exec
};
