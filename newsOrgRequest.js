const fetch = require('node-fetch');

module.exports = async (options) => {
  const url = `https://newsapi.org/v2/${options.endpoint}?country=us&apiKey=${process.env.NEWS_ORG_TOKEN}`;
  const res = await fetch(url);
  return await res.json();
};