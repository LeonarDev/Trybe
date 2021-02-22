const filterBySpeed = minimumSpeed => new Promise((resolve, reject) => {
  setTimeout(() => {
    const bySpeed = starterPokemons.filter(pokemonFiltered => pokemonFiltered.speed >= minimumSpeed).map(pokemon => pokemon.name);

    if (bySpeed.length > 0) {
      resolve(bySpeed);
    }

    return reject('No pokémons found');
  }, 1500);
});

let starterPokemons = [];

beforeEach(() => {
  starterPokemons = [
    { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
    { name: 'Charmander', type: 'Fire', speed: 65 },
    { name: 'Squirtle', type: 'Water', speed: 43 },
    { name: 'Pikachu', type: 'Electric', speed: 90 },
  ];
});

test('Pokémons above 50 speed base', async () => {
  starterPokemons.push({ name: 'Charizard', type: 'Fire/Flying', speed: 100 });
  const result = await filterBySpeed(50);
  expect.assertions(1);
  expect(result).toStrictEqual(['Charmander', 'Pikachu', 'Charizard']);
})

test('Pokémons above 150 speed base', async () => {
  expect.assertions(1);
  try {
    await filterBySpeed(99);
  } catch (error) {
    expect(error).toBe('No pokémons found');
  }
})