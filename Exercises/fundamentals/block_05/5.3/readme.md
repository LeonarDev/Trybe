# (5.3) JavaScript - Events

- [addEventListener](#addEventListener)
- [Exercises:](#exercises)
  - [Exercise 1](#exercise-1)
  - [Exercise 2](#exercise-2)
  - [Exercise 3](#exercise-3)
  - [Exercise 4](#exercise-4)
  - [Exercise 5](#exercise-5)
  - [Exercise 6](#exercise-6)
  - [Exercise 7](#exercise-7)
  - [Exercise 8](#exercise-8)
  - [Exercise 9](#exercise-9)
  - [Exercise 10](#exercise-10)
  - [Bonus exercise](#bonus-exercise)

<br>

### addEventListener

The most common code for creating an event listener on an element is through a native JavaScript function, called `addEventListener`.

In its most common use, `addEventListener` takes two parameters:
1. The event we are waiting to hear: Examples: `click`, `change`, `mouseover`, etc.
2. The function (created by you) that will be executed when the event happens.

To know more events, access this [link](https://www.w3schools.com/jsref/dom_obj_event.asp).

<br>

# Exercises:

Before doing the exercises, create an HTML file in the exercises/5.3 folder and copy the code below:

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width"/>
    <title>Calendar</title>
  </head>
  <body>
    <header class="month-container">
      <ul>
        <li id="month">December</li>
        <li id="year">2020</li>
      </ul>
    </header>
    <div class="week-days-container">
      <ul class="week-days">
      </ul>
    </div>
    <div class="days-container">
      <ul id="days">
      </ul>
    </div>
    <div class="buttons-container">
    </div>
    <section class="tasks-container">
      <div class="my-tasks">
        <h3>MY TASKS</h3>
      </div>
      <div class="input-container">
        <h3>COMMITMENTS</h3>
        <label for="task-input">New:</label>
        <input type="text"
          id="task-input"
          placeholder="Write your appointment">
        <button id="btn-add">Add</button>
      </div>
      <div class="task-list-container">
        <ul class="task-list">
        </ul>
      </div>
    </section>
    <script src="script.js"></script>
  </body>
</html>
```

<br>

Also create a CSS file and copy the code below to add style to the page. Feel free to unleash your creativity and change the file as you wish!

```CSS

* {
  margin: 0;
}

body {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #eee;
}

button {
  margin: 20px;
}

#btn-add {
  margin: 0;
}

.buttons-container {
  background-color: #eee;
  display: inline-block;
  text-align: center;
  width: 100%;
}

#days {
  margin: 0;
}

#days li {
  color: #777;
  display: inline-block;
  font-size:20px;
  margin: 5px 0;
  text-align: center;
  vertical-align: middle;
  width: 13.6%;
}

.input-container {
  width: 49%;
  height: 100px;
  display: inline-block;
}

input {
  margin-top: 8px;
}

label {
  color: #666;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  vertical-align: middle;
}

.month-container {
  background: green;
  padding: 40px 25px;
  text-align: center;
}

.month-container ul li {
  color:white;
  font-size: 20px;
  letter-spacing: 3px;
  list-style-type: none;
  text-transform: uppercase;
}

.my-tasks {
  clear: both;
  float: left;
  height: 100px;
  vertical-align: middle;
  width: 49%;
}

.my-tasks div {
  border: 1px solid black;
  border-radius: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: inline-block;
  height: 35px;
  margin-left: 10px;
  vertical-align: middle;
  width: 35px;
}

.my-tasks div:hover {
  height: 45px;
  width: 45px;
}

.my-tasks span {
  color: #666;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 3px;
  padding-bottom: 10px;
  vertical-align: middle;
}

.tasks-container {
  height: 130px;
  justify-content: center;
  text-align: center;
  width: 100%;
}

.tasks-container h3 {
  color: #666;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  text-decoration: underline;
  letter-spacing: 3px;
}

.task-list {
  margin-top: 20px;
}

.task-list-container {
  display: inline-block;
}

.task-list-container ul {
  list-style-type: none;
  padding: 0;
  color: #666;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 2px;
  vertical-align: middle;
}

.week-days-container {
  margin-left: 35px;
}

.week-days li {
  color: #666;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  width: 13.6%;
}

.week-days {
  font-size: 20px;
  margin: 0px;
  padding: 10px 0;
}
```
<br>

Finally, create a JavaScript file with the name "script.js" in the exercises / 5_3 folder and copy the code below:

```js
function createDaysOfTheWeek() {
  const weekDays = ['Monday', 'Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Write your code below.
```

<br>

<img src="https://course.betrybe.com//fundamentals/javascript/dom-manipulation/gif/calendario.gif">

The purpose of these exercises is to put into practice the knowledge learned about <b> DOM, selectors, manipulation of HTML elements and Events in JavaScript </b>. Therefore, the exercises must be performed using only JavaScript code, which must be inserted in the **"scripts.js"** file.

<br>

### Exercise 1:
The dezDaysList array contains the last two days of November and the days of the month of December. Develop a function that dynamically creates each day on the calendar and adds them as sons / daughters of the `<ul>` tag with ID `days`. Note that the 29th and 30th of November are in the array as they represent Monday and Tuesday respectively.
The days must be contained in a `<li>` tag, and everyone must have the `day` class. Ex: `<li class ="day"> 3 </li>`
The 24th, 25th and 31st are holidays and, in addition to the `day` class, they must also contain the `holiday` class. Ex: `<li class ="day holiday"> 24 </li>`
The 4th, 11th, 18th and 25th are Friday. They must contain the `day` class and the` friday` class. Ex: `<li class="day friday"> 4 </li>`

```const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 , 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];```

<hr>
<br>

### Exercise 2:
Implement a function that takes the string "Holidays" as a parameter and dynamically creates a button with the name "Holidays".
- Add to this button the ID `btn-holiday`.
- Add this button as a child of the `<div>` tag with the class `buttons-container`.

<hr>
<br>

### Exercise 3:
Implement a function that adds a "click" event to the "Holidays" button that changes the background color of days that have the class `holiday`.
- It is interesting that this button also has the reverse logic. When clicked again it returns to the initial configuration with the color `rgb(238,238,238)`.

<hr>
<br>

### Exercise 4:
Implement a function that takes the string "Friday" as a parameter and dynamically creates a button with the name "Friday".
- Add the ID `btn-friday` to this button.
- Add this button as a child of the `<div>` tag with the class `buttons-container`.

<hr>
<br>

### Exercise 5:
Implement a function that adds a "click" event to the "Friday" button that changes the text displayed on Friday.
- It is interesting that this button also has the reverse logic. When clicked again it returns to the initial configuration displaying the days.

<hr>
<br>

### Exercise 6:
Implement two functions that create a "zoom" effect. When hovering the mouse pointer over a day of the month on the calendar, the text for that day should increase, and when the mouse pointer leaves the day, the text should return to its original size.
- _[event.target - Ownership](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)_

<hr>
<br>

### Exercise 7:
Implement a function that adds a custom task to the calendar. The function must receive as a parameter the string with the task name (ex: "cook") and dynamically create an element with the tag `<span>` containing the task.
- The created element must be added as a child of the `<div>` tag that has the class `my-tasks`.

<hr>
<br>

### Exercise 8:
Implement a function that adds a colored caption to the task created in the previous exercise. This function should take as a parameter a string ("color") and dynamically create a tag element `<div>` with the class `task`.
- The color parameter should be used as the background color of the `<div>` created.
- The created element should be added as a child of the `<div>` tag that has the class `my-tasks`.

<hr>
<br>

### Exercise 9:
Implement a function that adds an event that when clicking on the element with the tag `<div>` referring to the color of your task, assign this element the `task selected` class, that is, when your task has the `task selected` class it will be selected.
- When you click on the element again, your class should return to being only `task`, that is, this task is no longer a selected task.

<hr>
<br>

### Exercise 10:
Implement a function that adds an event that, when clicking on a day of the month in the calendar, assigns that day the color of the legend of your selected task.
- When you click on the day again with the color of the legend, its color should return to the initial setting `rgb(119,119,119)`.

<hr>
<br>

### Bonus exercise:
Are we going to add appointments to your calendar? Implement a function that, when typing an appointment in the "COMMITMENTS" text box, adds the item to the "MY COMMITMENTS" list by clicking on the "ADD" button.
- If no character is entered in the `input` field, the function should return an` alert` with an error message when clicking on "ADD".
- When pressing the "enter" key, the event must also be triggered.
- _[KeyCode - Ownership](https://www.w3schools.com/JSREF/event_key_keycode.asp)_
