# (13.1) Component Life Cycle

<br>

- [Summary](#Summary)

- [Exercises](#Exercises)

<hr>
<br>

## Summary
**Startup:**
- `constructor` - receives the proposals and sets the state;

**Assembly:**
- `render` - renders the component, inserting it into the DOM;
- `componentDidMount` - trigger one or more actions after the component is inserted into the DOM (ideal for requests);

**Update:**
- `shouldComponentUpdate` - allows you to authorize or not the component to be updated;
- `componentDidUpdate` - trigger one or more actions after the component is updated;

**Disassembly:**
- `componentWillUnmount` - triggers one or more actions before the component is unmounted.

<br>

![Lifecycle](lifecycle.png?raw=true "Lifecycle")
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

<hr>
<br>

## Exercises
