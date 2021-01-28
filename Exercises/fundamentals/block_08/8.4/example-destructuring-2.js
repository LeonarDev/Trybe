const assert = require('assert');

const lion = {
  name: 'Panthera leo',
  commonName: 'Lion',
  weightRange: {
    min: 186.55,
    max: 225,
    measurementUnit: 'kg'
  }
};

const blueWhale = {
  name: 'Balaenoptera musculus',
  commonName: 'Blue whale',
  weightRange: {
    min: 45,
    max: 173,
    measurementUnit: 't'
  }
};

const polarBear = {
  name: 'Ursus maritimus',
  commonName: 'Polar Bear',
  weightRange: {
    min: 350,
    max: 700
  }
};

const animalDescription = ({ commonName, name, weightRange }) => {
  const { min, max, measurementUnit = 'kg' } = weightRange;
  return `${commonName} (${name}) weighs around ${min}-${max} ${measurementUnit}`
}

// TESTES
assert.strictEqual(
  animalDescription(lion),
  'Lion (Panthera leo) weighs around 186.55-225 kg'
);

assert.strictEqual(
  animalDescription(blueWhale),
  'Blue whale (Balaenoptera musculus) weighs around 45-173 t'
);

assert.strictEqual(
  animalDescription(polarBear),
  'Polar Bear (Ursus maritimus) weighs around 350-700 kg'
);