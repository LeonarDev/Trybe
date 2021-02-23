function randomDice(sides) {
  const rng = Math.random();
  return Math.round(rng * sides);
}

// test('testar a chamada da funcao', () => {
//     randomDice = jest.fn().mockReturnValue(10);

//     expect(randomDice()).toBe(10)
//     expect(randomDice).toHaveBeenCalled();
//     expect(randomDice).toHaveBeenCalledTimes(1);
// });

test('testar a chamada da funcao', () => {
  randomDice = jest
                  .fn()
                  .mockReturnValueOnce(8)
                  .mockReturnValueOnce(6)
                  .mockReturnValueOnce(10)

  expect(randomDice()).toBe(8)
  expect(randomDice).toHaveBeenCalled();
  expect(randomDice).toHaveBeenCalledTimes(1);

  expect(randomDice()).toBe(6)
  expect(randomDice).toHaveBeenCalled();
  expect(randomDice).toHaveBeenCalledTimes(2);

  expect(randomDice()).toBe(10)
  expect(randomDice).toHaveBeenCalled();
  expect(randomDice).toHaveBeenCalledTimes(3);
});
