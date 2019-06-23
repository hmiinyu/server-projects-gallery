const { exec } = require('../utils/mysql');

const userLogin = (username, password) => {
  const sql = `select username, realname from users where username='${username}' and password='${password}'`;
  return exec(sql).then(res => res[0] || {});
};

module.exports = {
  userLogin
};
