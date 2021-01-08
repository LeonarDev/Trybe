# Block 05: JavaScript: DOM, Events and Web Storage

<img src="https://course.betrybe.com//fundamentals/javascript/images/dom.jpg">


### DOM

`Window`: Represents a window that contains a DOM element, being possible to access the document that the window contains through Window;

`location`: Represents the location of the object to which it is associated, that is, the current document;

`document`: Represents any web page loaded in the browser and serves as an entry point for the content on the web page, so the document contains all HTML documents;

`history`: Allows the manipulation of the browser session history, that is, the pages visited on the tab or frame where the current page is loaded;

`element`: It is the most general base class from which all objects in a Document inherit, that is, they are all tags that are in HTML files and become elements of the DOM tree;

`text`: Text that goes between the elements, is the entire content of the tags;

`attribute`: These are all the attributes that a specific node has, such as a class or id.


### Events

`GetElementById(id)` works differently than `querySelector('#id')`, but the result is the same. The first has a better performance, but the second is more flexible.

Attention! While `getElementsByClassName('ClassName')` and `getElementsByTagName('TagName')` return an HTMLCollection, `querySelectorAll('.ClassName')` and `querySelectorAll('TagName')` return a NodeList.

Read about the difference between HTMLCollection and NodeList [here](https://teamtreehouse.com/community/understanding-the-difference-between-an-htmlcollection-and-a-nodelist).

Another point is the form of the response, which can be different between selectors (HTMLCollection and NodeList). 
The way to search the data stored in these structures, in some cases, can change, so a little care when making functions that use the result of the selectors can save those who have headaches about why an apparently correct function does not work.

- [How to compare dates in Javascript](https://pt.stackoverflow.com/questions/217881/comparar-data-atual-com-javascript?rq=1) (PT-BR)


### Web Storage

Web Storage provides mechanisms for web applications to save data in people's browsers.

Before HTML5, applications had to save local data in cookies, which were sent to the server with each browser request. **Web Storage** is more secure and has the ability to save more data without affecting the performance of the page.

Unlike **Cookies**, the storage limit is much higher (at least 5MB), and information is not transferred to the server during requests.

**Web Storage** is by origin (by domain and protocol). All pages in a source can save and access the same data.


#### Local and Session Storage

HTML Web Storage provides two objects for storing data on the client (person's browser), in the key/value format in a more intuitive way than in **Cookies**:
- `localStorage` - saves data **without an expiration date**. The data will not be removed when the browser is closed, that is, they will be available until they are explicitly removed.
- `sessionStorage` - saves data for the **current session only**. The data is removed as soon as the person closes the tab or browser.
- [Cookie advanced documentation](https://javascript.info/cookie)
- [Web Storage advanced documentation](https://javascript.info/localstorage)