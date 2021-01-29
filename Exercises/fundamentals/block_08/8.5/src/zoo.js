/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/

const data = require('./data');

const { animals, employees, hours, prices } = data;

function animalsByIds(...ids) {
  return ids.map(id => animals.find(animal => animal.id === id));
}

function animalsOlderThan(animal, age) {
  return animals.some(someAnimalObject => someAnimalObject.residents.every(
    resident => resident.age >= age && someAnimalObject.name === animal));
}

function employeeByName(employeeName) {
  if (!employeeName) return {};

  return employees.find(employee => (
    employee.firstName === employeeName || employee.lastName === employeeName));
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some(employee => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

function animalCount(species) {
  if (!species) {
    return animals.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.residents.length;
      return accumulator;
    }, {});
  }
  return animals.find(animal => animal.name === species).residents.length;
}

function entryCalculator(entrants) {
  return (!entrants || Object.keys(entrants).length === 0) ? 0 :
  Object.keys(entrants).reduce((accumulator, currentPerson) => {
    accumulator += prices[currentPerson] * entrants[currentPerson];
    return accumulator;
  }, 0);
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  const scheduleReturn = {};

  Object.keys(hours).forEach(day => ((hours[day].open !== hours[day].close) ?
  (scheduleReturn[day] = `Open from ${hours[day].open}am until ${hours[day].close - 12}pm`) :
  (scheduleReturn[day] = 'CLOSED')));

  return dayName ? { [dayName]: scheduleReturn[dayName] } : scheduleReturn;
}

function oldestFromFirstSpecies(id) {
  return Object.values(animals.find(animal =>
    animal.id === (employees.find(employee =>
      employee.id === id).responsibleFor[0])).residents.reduce((accumulator, currentResident) => (
      currentResident.age > accumulator.age ? currentResident : accumulator)));
}

function increasePrices(percentage) {
  Object.keys(prices).forEach(price => (
    prices[price] = Math.round(((prices[price] * 100) + (prices[price] * percentage))) / 100));
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
