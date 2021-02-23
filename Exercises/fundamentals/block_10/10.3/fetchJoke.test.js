const fetch = require('node-fetch');
const fetchJoke = require('./fetchJoke');

jest.mock('node-fetch');

it('deve buscar piadas', () => {
  const joke = {
    "id": "7h3oGtrOfxc",
    "joke": "Whiteboards ... are remarkable.",
    "status": 200
  };

  fetch.mockImplementation(() => Promise.resolve({
    json: () => Promise.resolve(joke),
  }));

  return fetchJoke().then((data) => expect(data).toEqual('Whiteboards ... are remarkable.')); 
});
