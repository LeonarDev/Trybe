# Block 05: JavaScript: DOM, Events and Web Storage

- (5.1) [JavaScript - DOM and Selectors](https://github.com/LeonarDev/Trybe/tree/main/Exercises/fundamentals/block_05/5.1)
- (5.2) [JavaScript - Working with Elements](https://github.com/LeonarDev/Trybe/tree/main/Exercises/fundamentals/block_05/5.2)
- (5.3) [JavaScript - Events](https://github.com/LeonarDev/Trybe/tree/main/Exercises/fundamentals/block_05/5.3)
- (5.4) [JavaScript - Web Storage](https://github.com/LeonarDev/Trybe/tree/main/Exercises/fundamentals/block_05/5.4)
- (5.5) Fundamentals of JavaScript - Projects:
    - (5.5.1) [Project - Pixels Art](https://github.com/LeonarDev/Trybe/tree/main/Projects/Pixels-Art)
    - (5.5.2) [Project - To-Do List](https://github.com/LeonarDev/Trybe/tree/main/Projects/To-Do-List)
    - (5.5.3) [Project - Meme Generator](https://github.com/LeonarDev/Trybe/tree/main/Projects/Meme-Generator)
    - (5.5.4) [Project - Color Guessing Game](https://github.com/LeonarDev/Trybe/tree/main/Projects/Color-Guessing)
    - (5.5.5) [Project - Mysterious Card](https://github.com/LeonarDev/Trybe/tree/main/Projects/Mysterious-Card)

<hr>

### Events

`GetElementById(id)` works differently than `querySelector('#id')`, but the result is the same. The first has a better performance, but the second is more flexible.

Attention! While `getElementsByClassName('ClassName')` and `getElementsByTagName('TagName')` return an HTMLCollection, `querySelectorAll('.ClassName')` and `querySelectorAll('TagName')` return a NodeList.

Read about the difference between HTMLCollection and NodeList [here](https://teamtreehouse.com/community/understanding-the-difference-between-an-htmlcollection-and-a-nodelist).

Another point is the form of the response, which can be different between selectors (HTMLCollection and NodeList). 
The way to search the data stored in these structures, in some cases, can change, so a little care when making functions that use the result of the selectors can save those who have headaches about why an apparently correct function does not work.

- [How to compare dates in Javascript](https://pt.stackoverflow.com/questions/217881/comparar-data-atual-com-javascript?rq=1) (PT-BR)

<hr>

### Web Storage

Web Storage provides mechanisms for web applications to save data in people's browsers.

Before HTML5, applications had to save local data in cookies, which were sent to the server with each browser request. **Web Storage** is more secure and has the ability to save more data without affecting the performance of the page.

Unlike **Cookies**, the storage limit is much higher (at least 5MB), and information is not transferred to the server during requests.

**Web Storage** is by origin (by domain and protocol). All pages in a source can save and access the same data.

<br>
<h4>Local and Session Storage</h4>

HTML Web Storage provides two objects for storing data on the client (person's browser), in the key/value format in a more intuitive way than in **Cookies**:
- `localStorage` - saves data **without an expiration date**. The data will not be removed when the browser is closed, that is, they will be available until they are explicitly removed.
- `sessionStorage` - saves data for the **current session only**. The data is removed as soon as the person closes the tab or browser.
- [Cookie advanced documentation](https://javascript.info/cookie)
- [Web Storage advanced documentation](https://javascript.info/localstorage)
