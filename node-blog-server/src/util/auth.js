const { model } = require('m2-node');
const { ErrorModel } = model;

const checkIsAuth = (session) => {
  if (!session.data.username) {
    return Promise.resolve(new ErrorModel('用户登录失败'));
  }
};

module.exports = {
  checkIsAuth
};
