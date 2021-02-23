const pokeTips = require('./poketips');

// Falso positivo aqui, cuidado!
test('Passing a string', (done) => {
  const callback = (data) => {
    expect(data).toBe('Charmander is the best pokémon to start.');
    done();
  };
  pokeTips(callback);
});