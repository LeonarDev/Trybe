# Block 11 - Introduction to React

- (11.1) ['Hello World!' on React](https://github.com/LeonarDev/Trybe/tree/main/Exercises/front-end/block_11/11.1)
- (11.2) [React Components](https://github.com/LeonarDev/Trybe/tree/main/Exercises/front-end/block_11/11.2)
- (11.3) [Project: Movie Cards Library]()

<hr>
<br>

## Important Links
- [w3s: Styling React Using CSS](https://www.w3schools.com/react/react_css.asp)
- [MDN: import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
- [MDN: Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Medium: Creating a Simple App With React.js](https://medium.com/better-programming/creating-a-simple-app-with-react-js-f6aa88998952)
- [Tableless: O Guia Completo do React e o seu Ecossistema](https://tableless.com.br/guia-completo-react-ecossistema/)
- [Stack Overflow: Most Loved, Dreaded, and Wanted Web Frameworks](https://insights.stackoverflow.com/survey/2019#technology-_-most-loved-dreaded-and-wanted-web-frameworks)

<hr>
<br>

## React Content
- [Create a Simple JSX Element](#Create-a-Simple-JSX-Element)
- [Create a Complex JSX Element](#Create-a-Complex-JSX-Element)
- [Add Comments in JSX](#Add-Comments-in-JSX)
- [Render HTML Elements to the DOM](#Render-HTML-Elements-to-the-DOM)
- [Define an HTML Class in JSX](#Define-an-HTML-Class-in-JSX)
- [Self-Closing JSX Tags](#Self-Closing-JSX-Tags)
- [Create a Stateless Functional Component](#Create-a-Stateless-Functional-Component)
- [Create a React Component](#Create a React Component)
- [Create a Component with Composition](#Create-a-Component-with-Composition)
- [Use React to Render Nested Components](#Use-React-to-Render-Nested-Components)
- [](#)
- [](#)
- [](#)
- [](#)

<hr>
<br>

## Summary and Tips

### Create a Simple JSX Element
ntro: React is an Open Source view library created and maintained by Facebook. It's a great tool to render the User Interface (UI) of modern web applications.

React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript. This has several benefits. It lets you use the full programmatic power of JavaScript within HTML, and helps to keep your code readable. For the most part, JSX is similar to the HTML that you have already learned, however there are a few key differences that will be covered throughout these challenges.

For instance, because JSX is a syntactic extension of JavaScript, you can actually write JavaScript directly within JSX. To do this, you simply include the code you want to be treated as JavaScript within curly braces: { 'this is treated as JavaScript code' }. Keep this in mind, since it's used in several future challenges.

However, because JSX is not valid JavaScript, JSX code must be compiled into JavaScript. The transpiler Babel is a popular tool for this process. For your convenience, it's already added behind the scenes for these challenges. If you happen to write syntactically invalid JSX, you will see the first test in these challenges fail.

It's worth noting that under the hood the challenges are calling ReactDOM.render(JSX, document.getElementById('root')). This function call is what places your JSX into React's own lightweight representation of the DOM. React then uses snapshots of its own DOM to optimize updating only specific parts of the actual DOM.

<hr>
<br>

### Create a Complex JSX Element
The last challenge was a simple example of JSX, but JSX can represent more complex HTML as well.

One important thing to know about nested JSX is that it must return a single element.

This one parent element would wrap all of the other levels of nested elements.

For instance, several JSX elements written as siblings with no parent wrapper element will not transpile.

Here's an example:

**Valid JSX:**
``` js
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>
```


**Invalid JSX:**
```js
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
```


<hr>
<br>

### Add Comments in JSX
JSX is a syntax that gets compiled into valid JavaScript. Sometimes, for readability, you might need to add comments to your code. Like most programming languages, JSX has its own way to do this.

To put comments inside JSX, you use the syntax `{/* */}` to wrap around the comment text.

<hr>
<br>

### Render HTML Elements to the DOM
So far, you've learned that JSX is a convenient tool to write readable HTML within JavaScript. With React, we can render this JSX directly to the HTML DOM using React's rendering API known as ReactDOM.

ReactDOM offers a simple method to render React elements to the DOM which looks like this: `ReactDOM.render(componentToRender, targetNode)`, where the first argument is the React element or component that you want to render, and the second argument is the DOM node that you want to render the component to.

As you would expect, `ReactDOM.render()` must be called after the JSX element declarations, just like how you must declare variables before using them.

<hr>
<br>

### Define an HTML Class in JSX
Now that you're getting comfortable writing JSX, you may be wondering how it differs from HTML.

So far, it may seem that HTML and JSX are exactly the same.

One key difference in JSX is that you can no longer use the word `class` to define HTML classes. This is because `class` is a reserved word in JavaScript. Instead, JSX uses `className`.

In fact, the naming convention for all HTML attributes and event references in JSX become camelCase. For example, a click event in JSX is `onClick`, instead of `onclick`. Likewise, `onchange` becomes `onChange`. While this is a subtle difference, it is an important one to keep in mind moving forward.

<hr>
<br>

### Self-Closing JSX Tags
So far, you’ve seen how JSX differs from HTML in a key way with the use of `className` vs. `class` for defining HTML classes.

Another important way in which JSX differs from HTML is in the idea of the self-closing tag.

In HTML, almost all tags have both an opening and closing tag: `<div></div>`; the closing tag always has a forward slash before the tag name that you are closing. However, there are special instances in HTML called “self-closing tags”, or tags that don’t require both an opening and closing tag before another tag can start.

For example the line-break tag can be written as `<br>` or as `<br />`, but should never be written as `<br></br>`, since it doesn't contain any content.

In JSX, the rules are a little different. Any JSX element can be written with a self-closing tag, and every element must be closed. 

The line-break tag, for example, must always be written as `<br />` in order to be valid JSX that can be transpiled. 

A `<div>`, on the other hand, can be written as `<div />` or `<div></div>`. The difference is that in the first syntax version there is no way to include anything in the `<div />`. You will see in later challenges that this syntax is useful when rendering React components.


<hr>
<br>

### Create a Stateless Functional Component
Components are the core of React. Everything in React is a component and here you will learn how to create one.

There are two ways to create a React component. The first way is to use a JavaScript function. Defining a component in this way creates a **stateless** functional component. The concept of state in an application will be covered later. For now, think of a stateless component as one that can receive data and render it, but **does not manage or track changes** to that data. (We'll cover the second way to create a React component in the next example.)

**To create a component with a function**, you simply write a JavaScript function that returns either JSX or `null`. One important thing to note is that **React requires your function name to begin with a capital letter**. Here's an example of a stateless functional component that assigns an HTML class in JSX:

```js
// After being transpiled, the <div> will have a CSS class of 'customClass'
const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};
```

Because a JSX component represents HTML, you could put several components together to create a more complex HTML page. This is one of the key advantages of the component architecture React provides. It allows you to compose your UI from many separate, isolated components. This makes it easier to build and maintain complex user interfaces.

```js
const DemoComponent = function() {
  return (
    <div className='customClass'>Hello, World!</div>
  );
};
```

<hr>
<br>

### Create a React Component
The other way to define a React component is with the ES6 `class` syntax. In the following example, `Kitten extends React.Component`:

```js
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}
```

This creates an ES6 class `Kitten` which extends the `React.Component` class. 

So the `Kitten` class now has access to many useful React features, such as local state and lifecycle hooks. 

Don't worry if you aren't familiar with these terms yet, they will be covered in greater detail later.

Also notice the `Kitten` class has a `constructor` defined within it that calls `super()`. It uses `super()` to call the `constructor` of the parent class, in this case `React.Component`. 

The `constructor` is a special method used during the initialization of objects that are created with the class keyword. 

It is best practice to call a component's `constructor` with `super`, and pass `props` to both. This makes sure the component is initialized properly. 

For now, know that it is standard for this code to be included. Soon you will see other uses for the `constructor` as well as `props`.

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    )
  }
};
```

<hr>
<br>

### Create a Component with Composition
Now we will look at how we can compose multiple React components together. Imagine you are building an App and have created three components, a `Navbar`, `Dashboard`, and `Footer`.

To compose these components together, you could create an `App` parent component which renders each of these three components as children. To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. For example, in the `render` method you could write:
```js
return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
```

When React encounters a custom HTML tag that references another component (a component name wrapped in `< />` like in this example), it renders the markup for that component in the location of the tag. This should illustrate the parent/child relationship between the App component and the `Navbar`, `Dashboard`, and `Footer`.

In the code bellow, there is a simple functional component called ChildComponent and a class component called ParentComponent.

```js
const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
          <ChildComponent />
      </div>
    );
  }
};
```

<hr>
<br>

### Use React to Render Nested Components
The last example showed a simple way to compose two components, but there are many different ways you can compose components with React.

Component composition is one of React's powerful features. 

When you work with React, it is important to start thinking about your user interface in terms of components like the App example in the last #. 

You break down your UI into its basic building blocks, and those pieces become the components. This helps to separate the code responsible for the UI from the code responsible for handling your application logic. It can greatly simplify the development and maintenance of complex projects.

```js
const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
        <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
          <Fruits />
      </div>
    );
  }
};

```

(https://github.com/[leonardev]/[reponame]/blob/[branch]/image.jpg?raw=true)

(images/example-rendering-nested-components.png?raw=true "Output")

<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 


<hr>
<br>

### 

