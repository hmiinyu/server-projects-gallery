const getList = (author = '', keyword = '') => {
  return [
    { id: 1, title: '标题1', content: '内容1', create_time: 1560606715344, author: 'miracle' },
    { id: 2, title: '标题2', content: '内容2', create_time: 1560606741680, author: 'jack' },
  ];
};

const getDetail = (id) => {
  return { id: 1, title: '标题1', content: '内容1', create_time: 1560606715344, author: 'miracle' };
};

const createItem = (blog = {}) => {
  return { id: 3 };
};

const updateItem = (id, blog = {}) => {
  return true;
};

const deleteItem = (id) => {
  return true;
};

module.exports = {
  getList,
  getDetail,
  createItem,
  updateItem,
  deleteItem
};
