// 3) The `getPlanet` function below prints the planet Mars synchronously. Modify `getPlanet`, so that Mars is printed asynchronously, after 4 seconds.

const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => console.log("Returned planet: ", mars), 4000);
};

getPlanet(); // prints Mars after 4 seconds
