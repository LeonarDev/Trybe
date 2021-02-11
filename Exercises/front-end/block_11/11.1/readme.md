# (11.1) Introduction to React

<br>

- [JSX](#JSX)
- [ReactDOM.render](#ReactDOM.render)
- [CSS and Import](#CSS-and-Import)
- [Classes and React](#Classes-and-React)
- []()
- []()
- []()
- []()

<hr>
<br>

## JSX
`JSX`, or `Javascript Extension`, as its name suggests, is a syntax extension for **Javascript**. Its use is recommended by the React documentation, as it demonstrates how the interface should behave, in a logical and descriptive way.
Let's see an example:

```js
const element = <h1>Hello, world!</h1>;
```

The construction of a **JSX** element is very similar to an **HTML element**, with minor differences so that there is no conflict between HTML and JS.

An example of this is the declaration of a `class` in HTML, which is replaced by `className` in JSX, as there would be a syntax conflict with JS classes.

If we were to declare the same variable without JSX, we would need to use functions like `createElement` that takes a component as a parameter, an object with the `props` (we'll see more about them in the next lessons) and the content that will be encapsulated by this component. It would take relatively long sequences of code instructions to be able to assemble and manipulate a component tree.

To see this complexity, let's redo the code above without JSX:

```js
const element = React.createElement("h1", null, "Hello, world")
```

Now imagine an entire application being built that way. It would be much more difficult to understand, right? JSX fits perfectly to solve this dilemma.

It is important to note that the use of JSX in React applications is not mandatory, but the complexity of building an application is lessened and the code becomes more intuitive when using it.

<hr>
<br>

## ReactDOM.render
`ReactDOM.render` is responsible for rendering and updating your code within HTML, displaying its React elements.

Every time we make any changes to the code, whether through a function or user interaction, React DOM compares the new element and its child elements with the previous ones and applies changes only where necessary to bring the application to the desired state. Let's see an example:

```js
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

In this example, we are calling the `tick` function that calls `ReactDOM.render` every second, and injects the parent element with `root` id with a 'Hello World' and the time. Inspecting the code running in the browser, we see the following event:

<img src="https://course.betrybe.com//front-end/react/introduction/ReactDOM.gif">

<hr>
<br>

## CSS and Import
But what about CSS in this context?

It is nothing very different from what we do. Just like in HTML, we must create a file to keep all the CSS and then import it where we want to use it, placing the created `classes` and `ids` in the elements of the page.

To facilitate understanding, see the example below:

```js
/* App.css */
.App {
  background-color: #282c34;
  text-align: center;
}
```

```js
// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>APP</h1>
    </div>
  );
}

export default App;
```
<hr>
<br>

## Classes and React

<hr>
<br>

##
