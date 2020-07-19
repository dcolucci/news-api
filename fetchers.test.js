const { fetchTopHeadlines } = require('./fetchers.js');

jest.mock('./newsOrgRequest.js')

describe('fetchTopHeadlines', () => {
  test('it calls newsOrgRequest with `top-headlines`', async () => {
    const result = await fetchTopHeadlines();
    expect(result).toEqual([0,1]);
  });
});