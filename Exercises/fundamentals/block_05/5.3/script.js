// Exercise 1) The decemberDaysList array contains the last two days of November and the days of the month of December. Develop a function that dynamically creates each day on the calendar and adds them as sons / daughters of the `<ul>` tag with ID `days`. Note that the 29th and 30th of November are in the array as they represent Monday and Tuesday respectively.
// The days must be contained in a `<li>` tag, and everyone must have the `day` class. Ex: `<li class ="day"> 3 </li>`
// The 24th, 25th and 31st are holidays and, in addition to the `day` class, they must also contain the `holiday` class. Ex: `<li class ="day holiday"> 24 </li>`
// The 4th, 11th, 18th and 25th are Friday. They must contain the `day` class and the` friday` class. Ex: `<li class="day friday"> 4 </li>`
function createDaysOfTheWeek() {
  const weekDays = ['Sunday', 'Monday', 'Thusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};
createDaysOfTheWeek();

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  const getDaysList = document.querySelector('#days');

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let day = decemberDaysList[index];
    let dayItem = document.createElement('li');
    
    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday-day';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday-day';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  };
};
createDaysOfTheMonth();


// Exercise 2) Implement a function that takes the string "Holidays" as a parameter and dynamically creates a button with the name "Holidays".
// - Add to this button the ID `btn-holiday`.
// - Add this button as a child of the `<div>` tag with the class `buttons-container`.
function createButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
};
createButton('Holidays');


// Exercise 3) Implement a function that adds a "click" event to the "Holidays" button that changes the background color of days that have the class `holiday`.
// - It is interesting that this button also has the reverse logic. When clicked again it returns to the initial configuration with the color `rgb(238,238,238)`.
function changeColorOfHolidays() {
  let getHolidayButton = document.querySelector('#btn-holiday');
  let getHolidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238, 238, 238)';
  let setNewColor = 'white';

  getHolidayButton.addEventListener('click', function() {
    for (let index = 0; index < getHolidays.length; index += 1) {
      if (getHolidays[index].style.backgroundColor === setNewColor) {
        getHolidays[index].style.backgroundColor = backgroundColor;
      } else {
        getHolidays[index].style.backgroundColor = setNewColor;
      }
    }
  })
}
changeColorOfHolidays();


// Exercise 4) Implement a function that takes the string "Friday" as a parameter and dynamically creates a button with the name "Friday".
// - Add the ID `btn-friday` to this button.
// - Add this button as a child of the `<div>` tag with the class `buttons-container`.
function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-friday';
  
  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
}
createFridayButton('Friday');


// Exercise 5) Implement a function that adds a "click" event to the "Friday" button that changes the text displayed on Friday.
// - It is interesting that this button also has the reverse logic. When clicked again it returns to the initial configuration displaying the days.
function changesTextOfFriday(fridaysArray) {
  let getFridayButton = document.querySelector('#btn-friday');
  let getFridays = document.querySelectorAll('.friday-day');
  let newFridayText = `It's FRIDAY!`

  getFridayButton.addEventListener('click', function() {
    for (let index = 0; index < getFridays.length; index += 1) {
      if (getFridays[index].innerHTML !== newFridayText) {
        getFridays[index].innerHTML = newFridayText;
      } else {
        getFridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
}
changesTextOfFriday(decemberDaysList);


// Exercise 6) Implement two functions that create a "zoom" effect. When hovering the mouse pointer over a day of the month on the calendar, the text for that day should increase, and when the mouse pointer leaves the day, the text should return to its original size
function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

dayMouseOver();
dayMouseOut();


// Exercise 7:
// Implement a function that adds a custom task to the calendar. The function must receive as a parameter the string with the task name (ex: "cook") and dynamically create an element with the tag `<span>` containing the task.
// - The created element must be added as a child of the `<div>` tag that has the class `my-tasks`.
const getTaskContainer = document.querySelector('.my-tasks');

const newTaskSpan = task => {
  let createSpanToTaskName = document.createElement('span');

  createSpanToTaskName.innerHTML = task;
  getTaskContainer.appendChild(createSpanToTaskName);
}
newTaskSpan('Project:');


// // Exercise 8:
// Implement a function that adds a colored caption to the task created in the previous exercise. This function should take as a parameter a string ("color") and dynamically create an element of tag <div> with the task class.
// The color parameter should be used as the background color of the <div> created.
// The created element must be added as a child of the <div> tag that has the class "my-tasks".
const newTaskDiv = color => {
  let createNewTask = document.createElement('div');
  createNewTask.className = 'task';
  createNewTask.style.backgroundColor = color;
  getTaskContainer.appendChild(createNewTask);
}
newTaskDiv('green');


// Exercise 9:
// Implement a function that adds an event that when clicking on the element with the <div> tag referring to the color of your task, assign this element the task selected class, that is, when your task has the task selected class it will be selected.
// When you click on the element again, your class should return to being just task, that is, this task is no longer a selected task.
