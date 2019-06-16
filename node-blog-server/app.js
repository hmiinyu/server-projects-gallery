const qs = require('querystring');
const blogRouter = require('./routers/blog');
const userRouter = require('./routers/user');

const getPostData = (req) => {
  return new Promise((resolve, reject) => {
    const { method, headers } = req;
    if (method !== 'POST' || headers['content-type'] !== 'application/json') {
      resolve({});
      return;
    }
    let data = '';
    req.on('data', chunk => {
      data += chunk.toString();
    });
    req.on('end', () => {
      if (!data) {
        resolve({});
        return;
      }
      resolve(JSON.parse(data));
    });
  });
};
const handleServer = (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const { url } = req;
  req.path = url.split('?')[0];
  req.query = qs.parse(url.split('?')[1]);

  getPostData(req).then(data => {
    req.body = data;

    const blogResult = blogRouter(req, res);
    if (blogResult) {
      blogResult.then(result => {
        res.end(JSON.stringify(result));
      });
      return;
    }

    const userResult = userRouter(req, res);
    if (userResult) {
      userResult.then(result => {
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
