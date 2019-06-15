const { getList, getDetail, createItem, updateItem, deleteItem } = require('../controllers/blog');
const { SuccessModel, ErrorModel } = require('../models/res.model');

const blogRouter = (req, res) => {
  const { method, path, query, body } = req;
  const { id } = query;

  if (method === 'GET' && path === '/api/blog/list') {
    const { author, keyword } = query;
    const result = getList(author, keyword);
    return new SuccessModel(result);
  }

  if (method === 'GET' && path === '/api/blog/detail') {
    const result = getDetail(id);
    return new SuccessModel(result);
  }

  if (method === 'POST' && path === '/api/blog/new') {
    const result = createItem(body);
    if (!result.id) return new ErrorModel('添加博客失败');
    return new SuccessModel(result);
  }

  if (method === 'POST' && path === '/api/blog/update') {
    const result = updateItem(id, body);
    if (!result) return new ErrorModel('更新博客失败');
    return new SuccessModel();
  }

  if (method === 'POST' && path === '/api/blog/del') {
    const result = deleteItem(id);
    if (!result) return new ErrorModel('删除博客失败');
    return new SuccessModel();
  }
};

module.exports = blogRouter;
