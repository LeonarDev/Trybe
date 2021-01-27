// 4) Suppose you need to simulate a message sent from Mars' [Curiosity](https://mars.nasa.gov/) robot to Earth. Curiosity sends the current temperature on Mars to Earth, spending a variable time of up to 5 seconds for it to finish sending. Create the `sendMarsTemperature` function, which prints the temperature on Mars.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// create the sendMarsTemperature function below


sendMarsTemperature(); // prints "Mars temperature is: 20 degree Celsius", for example
