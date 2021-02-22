const pokeTips = callback => {
  setTimeout(() => {
    callback('Charmander is the best pokémon to start.');
  }, 1000);
};

module.exports = pokeTips;