# (6.4) CSS Flexbox Part II

## Part 1

1) Add a property that defines the base Flexbox size for the 268px image container and the 500px menu container. After applying the properties, the header should be similar to the image below:
<img src = "https://course.betrybe.com//fundamentals/css-flexbox/css-flexbox-part-2/images/exercicio-1.jpeg">
<p style = "text-align: center;"> Header Exercise 1 </p>


2) Add a Flexbox property that changes the order in which the logo and menu items appear on the screen. After applying the property, the header should be similar to the image below:
<p align = "center"> <img src = "https://course.betrybe.com//fundamentals/css-flexbox/css-flexbox-part-2/images/exercicio-2.jpeg">
Header Exercise 2 </p>


Add a Flexbox property that changes the default size of the menu container when the page width is greater than 768px. After applying the property, the header should be similar to the image below:
<p align = "center"> <img src = "https://course.betrybe.com//fundamentals/css-flexbox/css-flexbox-part-2/images/exercicio-3.jpeg">
Header Exercise 3 </p>


Use the align-self property on the correct element so that the page header has the following behavior:
<p align = "center"> <img src = "https://course.betrybe.com//fundamentals/css-flexbox/css-flexbox-part-2/images/exercicio-4.jpeg">
Header Exercise 4 </p>




## Part 2

We will continue to practice with the continuation of the header made in the exercise above and build a main with the rest of your page. Copy the rest of the HTML and CSS code and apply it to your previously created documents.

`` html
<main class = "main-container">
  <div class = "movie-container">
    <section>
      <h2> Watch today </h2>
      <div class = "card-container">
        <div> MOVIES 1 </div>
        <div> MOVIES 2 </div>
        <div> MOVIES 3 </div>
        <div> MOVIES 4 </div>
        <div> MOVIES 5 </div>
        <div> MOVIES 6 </div>
        <div> MOVIES 7 </div>
        <div> MOVIES 8 </div>
        <div> MOVIES 9 </div>
      </div>
    </section>
    <article>
      <h2> Most watched </h2>
      <div class = "card-container">
        <div> MOVIES 1 </div>
        <div> MOVIES 2 </div>
        <div> MOVIES 3 </div>
        <div> MOVIES 4 </div>
        <div> MOVIES 5 </div>
        <div> MOVIES 6 </div>
        <div> MOVIES 7 </div>
        <div> MOVIES 8 </div>
        <div> MOVIES 9 </div>
      </div>
    </article>
  </div>
      
  <aside class = "aside-container">
    <h3> Latest news </h3>

    <h4> Title </h4>
    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam! </p>

    <h4> Title </h4>
    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam! </p>

    <h4> Title </h4>
    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam! </p>
  </aside>
</main>
``



`` css
.main-container {
  display: flex;
  flex-wrap: wrap;
}

.movie-container {
  display: flex;
  flex-direction: column;
}

.movie-container h2 {
  margin: 40px 0;
  text-align: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card-container div {
  align-items: center;
  background-color: # 5C687C;
  border: black solid 1px;
  display: flex;
  height: 150px;
  justify-content: center;
  margin: 10px;
}

.aside-container {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.aside-container h3, h4 {
  margin-bottom: 10px;
  text-align: center;
}

.aside-container p {
  margin: 10px 0;
  text-align: justify;
}
``

<hr>

1) Apply a 350px base to your container aside. It should look similar to the image below:
<p align = "center"> <img src = "https://course.betrybe.com//fundamentals/css-flexbox/css-flexbox-part-2/images/exercicio-part2-1.png">
Main of Exercise 1 </p>

<hr>

2) Apply an alignment to center and another to expand. Your aside exhibits the following behavior:
<p align = "center"> <img src = "https://course.betrybe.com//fundamentals/css-flexbox/css-flexbox-part-2/images/exercicio-part2-2.png">
Main of Exercise 2 </p>

<hr>

3) Add a property that makes your movie container have a base of 700px and another base of 16% for your card's container divs. It should look similar to the image below:
<p align = "center"> <img src = "https://course.betrybe.com//fundamentals/css-flexbox/css-flexbox-part-2/images/exercicio-part2-3.png">
Main of Exercise 3 </p>

<hr>

4) Apply a property with a value of 10 that expands the film container. It should look similar to the image below:
<p align = "center"> <img src = "https://course.betrybe.com//fundamentals/css-flexbox/css-flexbox-part-2/images/exercicio-part2-4.png">
Main for Exercise 4 </p>

<hr>

5) Add a property with a value of 1 that makes your divs in the movie container occupy all the white space. It should look similar to the image below:
<p align = "center"> <img src = "https://course.betrybe.com//fundamentals/css-flexbox/css-flexbox-part-2 / images / exercicio-part2-5.png ">
Main of Exercise 5 </p>



## Part 3 (optional)

- To conclude, choose some old exercises like, for example, the portfolio or even the HTML, CSS and JavaScript projects and structure the pages using Flexbox.