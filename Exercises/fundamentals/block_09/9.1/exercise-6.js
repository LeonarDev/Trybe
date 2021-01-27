// 6) Finally, the Curiosity robot has a 60% message sending success rate due to the fact that the robot is already very busy with other operations. 
// Then, add in the sendMarsTemperature function another callback that contains the actions to be taken in case of failure.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;
const temperatureInFahrenheit = (temperature) => console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);
const greet = (temperature) => console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) => console.log(`Error getting temperature: ${errorReason}`);

// definition of sendMarsTemperature function ...
const sendMarsTemperature = (succes, error) => {
  const messageSendingSuccessRate = Math.random() <= 0.6;

  setTimeout(() => {
    if (messageSendingSuccessRate) succes(getMarsTemperature())
    else error(`Robot is busy`);
  }, messageDelay());
}

// prints "It is currently 47ºF at Mars", for example, or "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// prints "Hi there! Curiosity here. Right now is 53ºC at Mars", for example, or "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);
