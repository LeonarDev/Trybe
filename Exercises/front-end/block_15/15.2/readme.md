# (15.2) RTL - Mocks and Inputs

<br>

- **[Summary](#Summary)**
- **[Exercises](#Exercises)**

<hr>
<br>

<!--

![Redux with React](/redux-react.jpeg)

<br>

## Summary

[How to use Redux in ReactJS with real-life examples](https://www.freecodecamp.org/news/how-to-use-redux-in-reactjs-with-real-life-examples-687ab4441b85/)

[Official Doc - Getting started with Redux](https://redux.js.org/introduction/getting-started)


### store

```js
import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers';

export default store = createStore(rootReducer);
```

<br>

### store with Redux Devtools
```js
import { createStore, combineReducers } from 'redux';
import rootReducer from '../reducers';

export default store = createStore(
  rootReducer,
  window.devToolsExtension() || ((f) => f),
);
```

<br>

### reducer and rootReducer
```js
// './src/reducers/myReducer.js'
const INITIAL_STATE = {
  state: '',
};

export default function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'NEW_ACTION':
      return { state: action.state };
    default:
      return state;
  }
}
```

<br>

```js
// './src/reducers/index.js'
import { combineReducers } from 'redux';
import myReducer from './myReducer';

export default rootReducer = combineReducers({ myReducer });
```

<br>

### actions
```js
export const newAction = (state) => ({ type: 'NEW_ACTION', state });
```

<br>

### provider
```js
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root'),
);
```

<br>

### 
```js

```

<br>

### 
```js

```

<br>

### 
```js

```









Example of a simple counter using only JavaScript and Redux
![Counter](/counter.png)


<hr>
<br>

## Exercises
**[Exercise 1]** Make a field that receives a value and that will be the value applied to the increment button.

<hr>
<br>

**[Exercise 2]** Make a field that receives a value and that will be the value applied to the decrement button.

<hr>
<br>

**[Exercise 3]** Store another value in the state, called clickCount. This field will count the number of times that any button on the screen was clicked.

<hr>
<br>

**[Exercise 3]** Store an array in the state that stores the individual value that was added to each click on any of the three buttons.
