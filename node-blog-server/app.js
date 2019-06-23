const { http } = require('m2-node');
const blogRouter = require('./routers/blog');
const userRouter = require('./routers/user');
const sessionData = {};
const needCookie = false;

const handleServer = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  // 解析query
  http.parseQuery(req);
  // 解析cookie
  http.parseCookie(req);
  // 解析session
  http.parseSession(req, sessionData, needCookie);
  // 获取post数据
  http.getPostData(req).then(data => {
    req.body = data;

    const blogResult = blogRouter(req, res);
    if (blogResult) {
      blogResult.then(result => {
        const { id } = req.session;
        if (needCookie) {
          http.setServerCookie(res, 'sid', id);
        }
        res.end(JSON.stringify(result));
      });
      return;
    }

    const userResult = userRouter(req, res);
    if (userResult) {
      userResult.then(result => {
        const { id } = req.session;
        if (needCookie) {
          http.setServerCookie(res, 'sid', id);
        }
        res.end(JSON.stringify(result));
      });
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain;charset=utf-8' });
    res.write('未匹配到对应的路由');
    res.end();
  });
};

module.exports = handleServer;
