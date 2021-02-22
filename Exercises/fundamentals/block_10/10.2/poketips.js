const pokeTips = callback => {
  setTimeout(() => {
    callback('Bulbasaur é o melhor pokémon para começar.');
  }, 2000);
};

module.exports = pokeTips;