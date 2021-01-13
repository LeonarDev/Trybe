# JavaScript ES6 - Objects

### PART I

For the following exercises, use the following code:
```js
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
// Add the necessary information below.
}

customerInfo(order);

const orderModifier = (order) => {
// Add the necessary information below.
}

orderModifier(order);
```

#### Now you are going to do some fixation exercises.

1. Complete the customerInfo () function so that your return is similar to "Olá Ana Silveira, delivery to: Rafael Andrade, Telephone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".

    * Note that the function parameter is already being passed in the function call.

2. Complete the orderModifier () function so that your return is similar to "Hello Luiz Silva, the total of your order for muzzarella, pepperoni and Coca-Cola Zero is R $ 50.00."

    * Modify the name of the purchasing person.

    * Change the total purchase amount to R $ 50.00.

<br>

### PART II

For the following exercises, use the following code:
```js
const lesson1 = {
   subject: 'Mathematics',
   numberStudents: 20,
   teacher: 'Maria Clara',
   shift: Morning',
};

const lesson2 = {
   subject: 'History',
   numberStudents: 20,
   teacher: 'Carlos',
};

const lesson3 = {
   subject: 'Mathematics',
   numberStudents: 10,
   teacher: 'Maria Clara',
   shift: 'night',
};
```

1. Create a function to add the morning shift to lesson2. This function must have three parameters, namely: the object to be modified, the key to be added and its value.

2. Create a function to list an object's keys. This function must take an object as a parameter.

3. Create a function to show the size of an object.

4. Create a function to list an object's values. This function must take an object as a parameter.

5. Create an object named allLessons, which should group all classes using Object.assign. Each key of this new object will be a class, being these keys: lesson1, lesson2 and lesson3. When executing the console.log (allLessons) command, the output should be as follows:
```js
console.log (allLessons);
/ *
{
   lesson1:
    {materia: 'Mathematics',
      numberStudents: 20,
      teacher: 'Maria Clara',
      shift: Morning' },
   lesson2:
    {materia: 'History',
      numberStudents: 20,
      teacher: 'Carlos',
      shift: 'night'},
   lesson3:
    {materia: 'Mathematics',
      numberStudents: 10,
      teacher: 'Maria Clara',
      shift: 'night'}
};
* /
```

6. Using the object created in exercise 5, create a function that returns the total number of students in all classes.

7. Create a function that obtains the key value according to its position on the object. For example:

```js
console.log (getValueByNumber (lesson1, 0));
// Output: 'Mathematic'
```

8. Create a function that verifies that the pair (key / value) exists in the function. This function must have three parameters, namely: the object, the key name and the key value. Example:
```js
console.log (verifyPair (lesson3, 'shift', 'night'));
// Output: true,
console.log (verifyPair (lesson3, 'materia', 'Maria Clara'));
// Output: false
```

<br>

### Bonus

1. Create a function to count how many students attended math classes. Use the object created in exercise 5.

2. Create a function that should return an object that represents the report of the professor, the classes he or she taught and the total number of students. Use the object created in exercise 5:
```js
console.log (createReport (allLessons, 'Maria Clara'))
/ * {
   teacher: 'Maria Clara',
   classes: ['Mathematics', 'Mathematics'],
   students: 30
} * /
```