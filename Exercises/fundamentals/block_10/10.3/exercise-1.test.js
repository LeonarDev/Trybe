const randomNumber = require('./exercise-1');

test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  randomNumberMock = jest.fn().mockReturnValue(10);

  expect(randomNumberMock()).toBe(10);
  expect(randomNumberMock).toHaveBeenCalled();
  expect(randomNumberMock).toHaveBeenCalledTimes(1);
});
