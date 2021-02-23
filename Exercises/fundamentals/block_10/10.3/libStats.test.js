const libStats = require('./libStats');

// jest.mock('./libStats');

// test('testa a chamada de health points, numero de vezes que foi chamada, e retorno', () => {
//   libStats.healthPoints.mockImplementation((a) => a * 8);
//   libStats.healthPoints(5);

//   expect(libStats.healthPoints).toHaveBeenCalled();
//   expect(libStats.healthPoints).toHaveBeenCalledTimes(1);
//   expect(libStats.healthPoints).toHaveBeenCalledWith(5);
//   expect(libStats.healthPoints(5)).toBe(40);
// })

// test('testa a chamada de dexterity, numero de vezes que foi chamada e retorno', () => {
//   libStats.dexterity.mockImplementation((a) => a * 2.4);
//   libStats.dexterity(10);

//   expect(libStats.dexterity).toHaveBeenCalled();
//   expect(libStats.dexterity).toHaveBeenCalledTimes(1);
//   expect(libStats.dexterity).toHaveBeenCalledWith(10);
//   expect(libStats.dexterity(10)).toBe(24);
// })

test('testa a chamada da funcao, numero de vezes que foi chamada, e retorno', () => {
  expect(libStats.healthPoints(5)).toBe(60);

  let spyHealthPoints = jest
                          .spyOn(libStats, 'healthPoints')
                          .mockImplementation((valor1, valor2) => valor1 + valor2);  

  expect(spyHealthPoints(8, 3)).toBe(11);
  expect(spyHealthPoints).toHaveBeenCalled();
  expect(spyHealthPoints).toHaveBeenCalledTimes(1);
  expect(spyHealthPoints).toHaveBeenCalledWith(8, 3);

  spyHealthPoints.mockRestore();
  spyHealthPoints = jest.spyOn(libStats, 'healthPoints');
  expect(spyHealthPoints(5)).toBe(60);
  expect(spyHealthPoints).toHaveBeenCalledTimes(1);
  expect(spyHealthPoints).toHaveBeenCalledWith(5);

  const spyStrength = jest.spyOn(libStats, 'strength');

  spyStrength(5);
  expect(spyStrength).toHaveBeenCalled();
  expect(spyStrength).toHaveBeenCalledTimes(1);
  expect(spyStrength).toHaveBeenCalledWith(5);
  expect(spyStrength(5)).toBe(15);
  expect(spyStrength).toHaveBeenCalledTimes(2);
});
