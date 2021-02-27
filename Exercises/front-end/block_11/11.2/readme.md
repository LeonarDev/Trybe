# (11.2) React Components

<br>

- [Props](#)
- [Components composition](#)
- [Keys](#)
- [PropTypes](#)
- [Exercises](#Exercises)

<hr>
<br>

# Exercises

Create a new project using `npx create-react-app pokedex`

To perform this exercise, create a file called `data.js` in the `.src/` directory of the project you just created. Copy the following content into this file:

```js
const pokemons = [
  {
      id: 25,
      name: "Pikachu",
      type: 'Electric',
      averageWeight: {
          value: 6.0,
          measurementUnit: "kg"
      },
      image: "https:\/\/cdn.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
      moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Pikachu_(Pok%C3%A9mon)"
  },
  {
      id: 4,
      name: "Charmander",
      type: 'Fire',
      averageWeight: {
          value: 8.5,
          measurementUnit: "kg"
      },
      image: "https:\/\/cdn.bulbagarden.net/upload/0/0a/Spr_5b_004.png",
      moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)"
  },
  {
      id: 10,
      name: "Caterpie",
      type: 'Bug',
      averageWeight: {
          value: 2.9,
          measurementUnit: "kg"
      },
      image: "https:\/\/cdn.bulbagarden.net/upload/8/83/Spr_5b_010.png",
      moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Caterpie_(Pok%C3%A9mon)"
  },
  {
      id: 23,
      name: "Ekans",
      type: 'Poison',
      averageWeight: {
          value: 6.9,
          measurementUnit: "kg"
      },
      image: "https:\/\/cdn.bulbagarden.net/upload/1/18/Spr_5b_023.png",
      moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)"
  },
  {
      id: 65,
      name: "Alakazam",
      type: 'Psychic',
      averageWeight: {
          value: 48.0,
          measurementUnit: "kg"
      },
      image: "https:\/\/cdn.bulbagarden.net/upload/8/88/Spr_5b_065_m.png",
      moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Alakazam_(Pok%C3%A9mon)"
  },
  {
      id: 151,
      name: "Mew",
      type: 'Psychic',
      averageWeight: {
          value: 4.0,
          measurementUnit: "kg"
      },
      image: "https:\/\/cdn.bulbagarden.net/upload/4/43/Spr_5b_151.png",
      moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Mew_(Pok%C3%A9mon)"
  },
  {
      id: 78,
      name: "Rapidash",
      type: 'Fire',
      averageWeight: {
          value: 95.0,
          measurementUnit: "kg"
      },
      image: "https:\/\/cdn.bulbagarden.net/upload/5/58/Spr_5b_078.png",
      moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Rapidash_(Pok%C3%A9mon)"
  },
  {
      id: 143,
      name: "Snorlax",
      type: 'Normal',
      averageWeight: {
          value: 460.0,
          measurementUnit: "kg"
      },
      image: "https:\/\/cdn.bulbagarden.net/upload/4/40/Spr_5b_143.png",
      moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)"
  },
  {
      id: 148,
      name: "Dragonair",
      type: 'Dragon',
      averageWeight: {
          value: 16.5,
          measurementUnit: "kg"
      },
      image: "https:\/\/cdn.bulbagarden.net/upload/2/2c/Spr_5b_148.png",
      moreInfo: "https:\/\/bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)"
  }
];

export default pokemons;
```
<br>

You will implement a [Pokedex](https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9dex) in a simplified way! For those unfamiliar with the **Pokemon** universe, Pokedex is an encyclopedia of all pokemons in nature. For your case, your application needs to show all pokemons present in the `data.js` file mentioned above.

You can use your imagination to style your application. However, it is **mandatory** that you implement at least these two components:

### 1. `Pokemon`: as its name says, this component represents a pokemon. This component receives as input an object that contains information regarding a specific pokemon. This component needs to return the following mandatory information to be shown to anyone using the application, this information must be validated using PropTypes:
  - Pokemon name
  - Pokemon type
  - Average weight of the pokemon, accompanied by the unit of measurement used;
  - Pokemon image

### 2. `Pokedex`: this component represents the encyclopedia of pokemon. This component receives as input a list of pokemons to be shown on the screen. For each of these received pokemons, `Pokedex` calls the `Pokemon` component.

Here is a suggested implementation of the application:

<img src="https://course.betrybe.com//front-end/react/components/my-pokedex-project.gif">

<hr>
<br>

