const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
  const randomArray = Array.from(
    { length: 10 },
    () => Math.floor(Math.random() * 50) + 1
  );
  console.table(randomArray);

  const sum = randomArray
    .map(number => number * number)
    .reduce((accumulator, number) => accumulator + number, 0);

  (sum < 8000) ? resolve(): reject();
  console.log(`Sum is: ${sum}`);
});

myPromise
  .then(sum => [2, 3, 5, 10].map(number => sum / number))
  .catch(() => console.log(`It's over 8000`));

}

fetchPromise();