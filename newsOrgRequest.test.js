const newsOrgRequest = require('./newsOrgRequest.js');

// we require `fetch` in order to reference it as a mock
// jest knows to import it from the __mocks__ directory
// see: https://medium.com/@rickhanlonii/understanding-jest-mocks-f0046c68e53c
// see: https://jestjs.io/docs/en/es6-class-mocks#keeping-track-of-usage-spying-on-the-mock
const fetch = require('node-fetch');
jest.mock('node-fetch');

describe('newsOrgRequest', () => {
  test('includes hardcoded country and apiKey query string params by default', async () => {
    await newsOrgRequest();
    expect(fetch).toHaveBeenCalledWith('https://newsapi.org/v2/?apiKey=1234&country=us');
  });
  
  test('calls fetch with News Org API endpoint passed in options', async () => {
    const options = {
      endpoint: 'zoo'
    };
    await newsOrgRequest(options);
    expect(fetch).toHaveBeenCalledWith('https://newsapi.org/v2/zoo?apiKey=1234&country=us');
  });
  
  test('includes the `q` query string param if passed', async () => {
    const options = {
      q: 'baz'
    };
    await newsOrgRequest(options);
    expect(fetch).toHaveBeenCalledWith('https://newsapi.org/v2/?apiKey=1234&country=us&q=baz');
  });
});