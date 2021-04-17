# (18.1) Context API

<br>

- **[Summary](#Summary)**
- **[Exercises](#Exercises)**

<hr>
<br>

![Context API](react_context_api.png?raw=true "Context API")

<br>

## Summary
Context API provides a way to pass data through the component tree without having to manually pass props at each level. To create a context, use React's `createContext` method.

```js
import React, { createContext } from 'react';

const MyContext = createContext(defaultValue);
```

<br>


`createContext` returns an object that has two components as properties: `Provider` and `Consumer`. 
The value passed as a parameter to `createContext` will be used as the default value of the context, if no value is specified when using the `Provider`.

`Provider` is responsible for "providing" the data for the components that are at the levels below it in the component tree. It accepts a mandatory value prop with the data to be shared. This value can be any JavaScript value, such as a number, string, array, or object.

```js
<MyContext.Provider value={/* some shared value */}>
  <MyComponent>
    <MyOtherComponent>
      ...
    </MyOtherComponent>
  <MyComponent>
</MyContext.Provider>
```

<br>


`Consumer` is used whenever a component needs to "consume" the context value.
```js
function MyComponent() {
  return (
    <MyContext.Consumer>
      {(value) => {
        /* renders something using the value received from the context */
      }}
    </MyContext.Consumer>
  )
}
```

<br>


As a rule, the context is used in several different files, either as a provider or as a consumer. Thus, it is usual to create and export it in a separate file and import it whenever necessary.

<br>


`MyContext.js`
```js
import React, { createContext } from 'react';

const MyContext = createContext();

export default MyContext;
```

<br>


`MyComponent.js`
```js
import React from 'react';

import MyContext from './MyContext';

function MyComponent() {
  return (
    <MyContext.Provider value={123}>
      <MyOtherComponent />
    </MyContext.Provider>
  )
}

export default MyComponent;
```

<br>


`MyOtherComponent.js`
```js
import React from 'react';

import MyContext from './MyContext';

function MyOtherComponent() {
  return (
    <MyContext.Consumer>
      {(value) => (
        <Something />
      )}
    </MyContext.Consumer>
  )
}

export default MyOtherComponent;
```

<hr>
<br>

## Exercises
**[Exercise 1]** Refactor the exercise of the [exercise-contextAPI-refactoring](https://github.com/tryber/exercise-contextAPI-refactoring/tree/master) repository by replacing Redux with the Context API to manage the state of the application. Remember to change to the `exercise-one` branch, it will have the structure ready to be refactored.

<hr>
<br>

**[Exercise 2]** Refactor the exercise in the [exercise-contextAPI-refactoring](https://github.com/tryber/exercise-contextAPI-refactoring/tree/master) repository. As in the previous exercise, change the branch to `exercise-two`, the application structure will be ready. Modify the application to use Context API to manage state instead of Redux.

<hr>
<br>

**[Exercise 3]** Refactor the exercise about Reddit which is in the `exercise-three` branch of the [exercise-contextAPI-refactoring](https://github.com/tryber/exercise-contextAPI-refactoring/tree/master) repository by changing the application to use Context API to manage the state instead of Redux.
