const { userLogin } = require('../controllers/user');
const { SuccessModel, ErrorModel } = require('../models/res.model');

const userRouter = (req, res) => {
  const { method, path, body } = req;
  const { username, password } = body;

  if (method === 'POST' && path === '/api/user/login') {
    return userLogin(username, password).then(result => {
      if (!result.username) return new ErrorModel('用户登录失败');
      return new SuccessModel();
    });
  }
};

module.exports = userRouter;
