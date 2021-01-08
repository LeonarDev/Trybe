# (3.4) Semantic HTML

<p>Knowing how to apply HTML elements according to the sense and purpose that each of them carries, in addition to reinforcing their ability to model a problem, results in pages <a href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics"> best ranked </a>on search engines <em> (e.g. Google) </em> and <a href="https://www.w3schools.com/html/html_accessibility.asp"> more accessible.</a></p>

<h3> header </h3>
<p> The <code>header</code> element represents a header containing introductory text. </p>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header"> Link to the header element</a>.
<br>
<br>

<h3> nav </h3>
<p> The <code>nav</code> element represents a set of navigation links. </p>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav"> Link to the element</a>.
<br>
<br>

<h3> aside </h3>
<p> The <code>aside</code> element represents separate content and is commonly used to display: </p>
<ul>
  <li> sidebars; </li>
  <li> content adjacent to main content. </li>
</ul>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside"> Link to the aside element</a>.
<br>
<br>

<h3> article </h3>
<p> The <code>article</code> element represents self-contained content. In other words, all the content present within a <code> article </code> provides the necessary information for its understanding, and can be reused on other pages. </p>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article"> Link to the article element</a>.
<br>
<br>

<h3> section </h3>
<p> The <code>section</code> element represents a section of the document. </p>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section"> Link to the section element</a>.
<br>
<br>

<h3> footer </h3>
<p> The <code>footer</code> element represents the footer of the document and / or a section. </p>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer"> Link to the footer element</a>.
<br>
<br>

<hr>

## Exercise
<p>Before doing the exercises, create an <em> HTML </em> file in the <code>exercises / introduction-a-html-e-css.4</code> folder and copy the code below: </p>

<p> The purpose of these exercises is to put into practice what you just learned about <strong>semantic HTML</strong>. </p>

<p>
  To this end, we will create a page that features one of the most impressive animals that exists: the <a href = "https://www.nationalgeographic.com/science/phenomena/2014/07/03/natures-most-amazing-eyes-just-got-a-bit-weirder/">Stomatopoda.</a>

<p>The styling of the page is up to you. 😉 </p>

<p>For better organization, make commits to each completed task. Let's go to the exercises: </p>

<ol>
  <li> Add a header to the page with the title <code>Punch at 80km / h: Meet Stomatopoda</code>.</li>
  <li> Add a set of links that represent the navigation area of ​​the site. </li>
  <li> Create a link called <code>Home</code>. </li>
  <li> Create a link called <code>About</code>. </li>
  <li> Create a link called <code>Contact</code>. </li>
  <li> Create an article that will contain the interesting facts about <code>Stomatopoda</code>. The article will be subtitled <code>Facts about Stomatopoda</code>. Follow <a href="https://theoatmeal.com/comics/mantis_shrimp"> an animal site </a> of inspiration for catching facts. </li>
  <li> Divide the article into sections, organizing it as follows:
    <ul>
      <li>
        A first section containing general information about the animal. The subtitle for this section is at your discretion. It is necessary to include in this section your scientific name, which is <code>Odontodactylus scyllarus</code>, in italics. In addition, there needs to be tabular information regarding your scientific classification, in particular: <code>Kingdom</code>, <code>Phylum</code>, <code>Subphylum</code>, <code>Class</code>, <code>Subclass</code> and <code>Order</code>. Such information you can obtain <a href="https://en.wikipedia.org/wiki/Stomatopoda"> on Wikipedia. </a>
      </li>
      <li>
        The other sections relate to the interesting facts you chose about the animal. For each chosen fact you will create a section.
      </li>
      <li>
        Add a subtitle for each section for the chosen event.
      </li>
      <li>
        Add, for each section, paragraph (s) describing the chosen fact. Highlight impressive features related to the suit you have chosen, in order to reinforce the uniqueness of <code>Stomatopoda</code>. For example: if you create a section detailing the animal's powerful punch, it would be interesting to highlight the speed of that punch (80km / h) in bold.
      </li>
      <li>
        Add an image for each section as a way of illustrating the fact.
      </li>
    </ul>
  <li>
    Finally, add a section of bibliographic references, containing a list of all the links that were used as a basis to compile the page in question.
  </li>
  <li>
      Add content adjacent to the article, providing a link to <a href="https://www.youtube.com/watch?v=E0Li1k5hGBE"> this video,</a> which shows the animal in action.
  </li>
  <li>
    Add a footer to the page, showing something like "Content compiled by & lt; insert your name & gt ;, & current year & gt;"
  </li>
</ol>
<p> <em>Obs:</em> for this exercise, it is mandatory to use <strong>at least</strong> elements with the following tags:
<code>header</code>, 
<code>nav</code>, 
<code>article</code>, 
<code>section</code>, 
<code>h1</code>, 
<code>h2</code>, 
<code>h3</code>,
<code>aside</code>, 
<code>footer</code>, 
<code>table</code> e 
<code>img</code>.</p>

<hr>

# Validate the exercise

Now that you have created the page showing interesting facts about Stomatopoda, suppose that a person with visual impairment accesses your page. Will your page be accessible to that person? 🤔

Let's find out!

Enter [this site](https://achecker.ca/checker/index.php#output_div), which validates whether your page is accessible or not. On the site there are 3 ways for you to submit your HTML code:

1. Via url (the first, already selected when loading the site).
1. Via uploading the HTML file (second tab).
1. Via copying + pasting the HTML code (third and last tab).

When submitting the code, you will come across validation errors present on your page, starting your second exercise: fixing all the errors pointed out.

For each validation error shown, a link to the page with its description is available. Before going back to the code and fixing it, read the description of each error to understand and be able to fix it.

At the end of the exercise, in addition to having an accessible page, you will reinforce the practice of fixing errors, be it validation (for this exercise) or logic, which you will encounter throughout your developer career.
