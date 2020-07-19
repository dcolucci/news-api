module.exports = (options) => {
  let result;
  switch (options.endpoint) {
    case 'top-headlines':
      result = { articles: [ 'top', 'headlines' ] };
      break;
    default:
      result = { articles: [ 'default', 'case' ]};
  }
  return Promise.resolve(result);
};