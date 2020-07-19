const newsOrgRequest = require('./newsOrgRequest.js');

const fetchTopHeadlines = async () => {
  const { articles } = await newsOrgRequest({ endpoint: 'top-headlines' });
  return articles;
};

module.exports = {
  fetchTopHeadlines
};