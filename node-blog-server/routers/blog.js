const { getList, getDetail, createItem, updateItem, deleteItem } = require('../controllers/blog');
const { SuccessModel, ErrorModel } = require('../models/res.model');

const blogRouter = (req, res) => {
  const { method, path, query, body } = req;
  const { id } = query;

  if (method === 'GET' && path === '/api/blog/list') {
    const { author, keyword } = query;
    return getList(author, keyword).then(result => {
      return new SuccessModel(result);
    });
  }

  if (method === 'GET' && path === '/api/blog/detail') {
    return getDetail(id).then(result => {
      return new SuccessModel(result);
    });
  }

  if (method === 'POST' && path === '/api/blog/new') {
    body.author = 'miracle';
    return createItem(body).then(result => {
      if (!result.id) return new ErrorModel('添加博客失败');
      return new SuccessModel(result);
    });
  }

  if (method === 'POST' && path === '/api/blog/update') {
    body.author = 'miracle';
    return updateItem(id, body).then(result => {
      if (!result) return new ErrorModel('更新博客失败');
      return new SuccessModel();
    });
  }

  if (method === 'POST' && path === '/api/blog/del') {
    body.author = 'miracle';
    return deleteItem(id, body.author).then(result => {
      if (!result) return new ErrorModel('删除博客失败');
      return new SuccessModel();
    });
  }
};

module.exports = blogRouter;
