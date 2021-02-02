# (5.1) JavaScript - DOM and selectors
  - [How do HTML and JavaScript communicate?](#How-do-HTML-and-JavaScript-communicate?)
  - [Which selector to use?](#Which-selector-to-use?)
  - [Exercise](#exercises)
  - [Exercise 1](#exercise-1)
  - [Exercise 2](#exercise-2)
  - [Exercise 3](#exercise-3)
  - [Exercise 4](#exercise-4)
  - [Exercise 5](#exercise-5)
  - [Exercise 6](#exercise-6)

<img src="https://course.betrybe.com//fundamentals/javascript/images/dom.jpg">

### How do HTML and JavaScript communicate?
The **DOM** (Document Object Model) is an interface that represents how HTML and XML are read by the browser. After reading the HTML document by the browser, the DOM creates an object that makes a representation of the document and defines ways in which this structure can be accessed, that way we can use JavaScript to manipulate the DOM and thus change the style and content of Our page.

<br>

`Window`: Represents a window that contains a DOM element, being possible to access the document that the window contains through Window;

`location`: Represents the location of the object to which it is associated, that is, the current document;

`document`: Represents any web page loaded in the browser and serves as an entry point for the content on the web page, so the document contains all HTML documents;

`history`: Allows the manipulation of the browser session history, that is, the pages visited on the tab or frame where the current page is loaded;

`element`: It is the most general base class from which all objects in a Document inherit, that is, they are all tags that are in HTML files and become elements of the DOM tree;

`text`: Text that goes between the elements, is the entire content of the tags;

`attribute`: These are all the attributes that a specific node has, such as a class or id.

<br>

### Which selector to use?

The `GetElementById(id)` works differently than `querySelector('#id')`, but the result is the same. As stated in the video, the first has a better performance, but the second is more flexible.

**Attention!** While `getElementsByClassName('ClassName')` and `getElementsByTagName('TagName')` return an **HTMLCollection**, `querySelectorAll('.ClassName')` and `querySelectorAll('TagName')` return a **NodeList**.

Read about the difference between HTMLCollection and NodeList [here](https://teamtreehouse.com/community/understanding-the-difference-between-an-htmlcollection-and-a-nodelist).

<br>

# Exercises

It's time to apply your knowledge in manipulating the elements of HTML!
1. Next, you'll see a snippet of HTML and CSS code.
2. Create an HTML file inside the exercises/5.1 directory and copy the following code.
3. Read the instructions that are inside a comment in the `<script>` tag.
4. Don't forget to commit each exercise!

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width"/>
    <title>Exercíse 5.1</title>

    <style>
      div {
        border-color: black;
        border-style: solid;
      }
      .title {
        text-align: center;
      }

      .main-content {
        background-color: yellow;
      }

      .main-content .center-content {
        background-color: red;
        width: 50%;
        margin: 0 auto;
      }

      .main-content .center-content p {
        font-style: italic;
      }
    </style>
  </head>
  <body>
    <h1 class="title">Exercíse 5.1 - JavaScript </h1>
    <div class="main-content">
      <div class="center-content">
        <p>Standard text of our website</p>
        <p>-----</p>
        <p>Trybe</p>
      </div>
    </div>
    <script>
        /*
        Here you will modify the existing elements using only the functions:
         - document.getElementById()
         - document.getElementsByClassName()
         - document.getElementsByTagName()
        1. Create a function that changes the text in the <p> tag for a description of how you see yourself in 2 years. (Don't spend time thinking about the text, but doing the exercise)
        2. Create a function that changes the color of the yellow square to Trybe's green (rgb(76,164,109)).
        3. Create a function that changes the color of the red square to white.
        4. Create a function that corrects the text of the <h1> tag.
        5. Create a function that changes all text in the <p> tag to uppercase.
        6. Create a function that displays the contents of all <p> tags on the console.
        */
    </script>
  </body>
</html>
```

<br>


### Exercise 1:
Create a function that changes the text in the `<p>` tag for a description of how you see yourself in 2 years. (Don't spend time thinking about the text, but doing the exercise)

<hr>
<br>

### Exercise 2:
Create a function that changes the color of the yellow square to the green of Trybe `(rgb (76,164,109))`.

<hr>
<br>

### Exercise 3:
Create a function that changes the color of the red square to white.

<hr>
<br>

### Exercise 4:
Create a function that corrects the text of the `<h1>` tag.

<hr>
<br>

### Exercise 5:
Create a function that changes all text in the `<p>` tag to uppercase.

<hr>
<br>

### Exercise 6:
Create a function that displays the contents of all `<p>` tags on the console.
