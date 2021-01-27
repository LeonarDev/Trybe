// 5) Now that you have done the function that sends the temperature of Mars, suppose that you are able to send to the Curiosity robot what you want to do, once you have successfully obtained the temperature on Mars. Then, add a `callback` in the `sendMarsTemperature` function that contains the actions to be taken over the temperature.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definition of sendMarsTemperature function ...
const sendMarsTemperature = (callback) => {
  setTimeout(() => callback(getMarsTemperature(), messageDelay()));
}

sendMarsTemperature(temperatureInFahrenheit); // prints "It is currently 47ºF at Mars" (for example)
sendMarsTemperature(greet); // prints "Hi there! Curiosity here. Right now is 53ºC at Mars" (for example)
