# (12.1) Stateful Components and Events

<br>

- [Summary](#Summary)
- [](#)
- [](#)
- [](#)
- [Exercises](#Exercises)

<hr>
<br>

## Summary
- Every component has its own state and has 100% control over it;

- When a component is placed on the screen it executes a function called a `constructor`, and using the `super()` line we can override it to extend its behavior;

- The `this` object, accessible to all React component classes, contains everything related to that component and must be explicitly linked to the functions created within the class, using the syntax `this.myFunction = this.myFunction.bind(this)` in the component's constructor;

- Functions that handle events must be linked to their respective elements with `{this.myFunction}` or `{() => this.myFunction ('My parameter')`.

- It is possible to read the state of a component via `this.state`, it is possible to define an initial state in the constructor with an assignment to `this.state` and you must update that state only with the `this.setState` function.

- The update of the status is asynchronous and, therefore, if you want to guarantee that one update will occur after another, such update must be defined via callback passed to the function `this.setState`, in the format `this.setState((previousState, props) => newState)`

<hr>
<br>

## Exercises
More detailed information in the exercise repository: `exercise-pokedex-state`