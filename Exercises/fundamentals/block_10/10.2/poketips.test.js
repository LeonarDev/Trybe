const pokeTips = require('./poketips');

// Falso positivo aqui, cuidado!
test('passando uma string', (done) => {
  const callback = (data) => {
    expect(data).toBe('Bulbasaur é o melhor pokémon para começar.');
    done();
  };
  pokeTips(callback);
});