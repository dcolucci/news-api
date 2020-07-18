const fetch = require('node-fetch');

const fetchTopHeadlines = async () => {
  // return Promise.resolve({
  //   articles: [{ foo: 'bar' }]
  // });
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_ORG_TOKEN}`);
  return await res.json();
};

module.exports = {
  fetchTopHeadlines
};