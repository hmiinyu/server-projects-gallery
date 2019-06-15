const { userLogin } = require('../controllers/user');
const { SuccessModel, ErrorModel } = require('../models/res.model');

const userRouter = (req, res) => {
  const { method, path, body } = req;
  const { username, password } = body;

  if (method === 'POST' && path === '/api/user/login') {
    const result = userLogin(username, password);
    if (!result) return new ErrorModel('用户登录失败');
    return new SuccessModel();
  }
};

module.exports = userRouter;
