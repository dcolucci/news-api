module.exports = jest.fn((url) => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve({ foo: 'bar' });
    }
  });
});