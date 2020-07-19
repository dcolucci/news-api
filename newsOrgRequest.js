const qs = require('querystring');
const fetch = require('node-fetch');

module.exports = async (options = {}) => {
  const query = {
    apiKey: process.env.NEWS_ORG_TOKEN,
    country: 'us'
  };
  if (options.q) {
    query.q = options.q;
  }
  const queryString = qs.stringify(query);
  const { endpoint = '' } = options;
  const url = `https://newsapi.org/v2/${endpoint}?${queryString}`;
  const res = await fetch(url);
  return await res.json();
};