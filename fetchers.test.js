const { fetchTopHeadlines } = require('./fetchers.js');

jest.mock('./newsOrgRequest.js');

describe('fetchTopHeadlines', () => {
  test('it returns top headlines result', async () => {
    const result = await fetchTopHeadlines();
    expect(result).toEqual([ 'top', 'headlines' ]);
  });
});