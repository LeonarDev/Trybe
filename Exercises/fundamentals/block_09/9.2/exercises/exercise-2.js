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
  console.log(sum);
});

myPromise
  .then(() => console.log(`It's good!`))
  .catch(() => console.log(`It's bad!`));
