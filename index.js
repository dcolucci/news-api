const express = require('express');
const fetchers = require('./fetchers.js');
const dotenv = require('dotenv');

const PORT = process.env.PORT || 8000;
const app = express();
dotenv.config();

app.get('/top-headlines', async (req, res) => {
  console.log('fetching top headlines...');
  const result = await fetchers.fetchTopHeadlines();
  res.json(result);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});