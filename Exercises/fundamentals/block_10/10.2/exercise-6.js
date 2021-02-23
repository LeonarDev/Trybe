const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' }, { name: 'Soneca', age: 2, type: 'Dog' }, { name: 'Preguiça', age: 5, type: 'Cat' },
];

// 6.1. Adicione uma funcionalidade para buscar pelo nome do animal - crie uma função que deverá passar no teste 

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animal = Animals.find((animal) => animal.name === name);
      if (animal) {
        return resolve(animal);
      };
      const messageError = 'Nenhum animal com esse nome!';
      return reject(messageError);
    }, 100);
  })
);

const getAnimalByName = (name) => findAnimalByName(name).then(animal => animal);

// Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalList = Animals.filter((animal) => animal.age === age);
      if (animalList.length !== 0) {
        return resolve(animalList);
      };
      const messageError = 'Nenhum animal encontrado!';
      return reject(messageError);
    }, 100);
  })
);

const getAnimalByAge = (age) => findAnimalByAge(age).then(animal => animal);

module.exports = getAnimalByName, getAnimalByAge;
