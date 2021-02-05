# (5.4) JavaScript - Web Storage



Imagine that you are the person responsible for developing a page that will serve as a reader of written content.

This written content can be a book page, a magazine report or an online newspaper note. So that you don't have to think about the content of the page, use this link to generate the text for your page.

So far, nothing new, but this demand requires that you apply preferences of the people reading on the page to improve their reading experience.

People should have the power to change:
- Background color of the screen;
- Text color;
- Font size;
- Spacing between lines of text;
- Font type (Font family).

These preferences must be saved so that, when you return to the page, the preferences that were previously configured can be applied on the screen.

<hr>
<br>

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

## Bonus
The properties described above are mandatory, but you are free to add any other properties that you think are valid and that aim to improve the experience of the person who reads on your page.
