//Define variables I need to track

const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete'
};

let itemsCount = 0;
let checkedCount = 0;

//DOM elements
const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');
const controls = document.getElementById('todo-form');
const newtodoBtn = document.getElementById('new-todo');

//Arrays

const allitemsArr = ['test1', 'test2'];
const uncheckeditemsArr = [];

//Function calls

allitemsCount();
uncheckedCount();

//Function Definitions
function newTodo() {
  alert('New TODO button clicked!');

  //create a form for the user to enter their to-do
  let taskForm = document.createElement('form');

  //assign taskInput type input - text.

  let taskInput = document.createElement('input');
  taskInput.type = 'text';
  taskInput.setAttribute('id', 'new-task');
  taskInput.setAttribute('name', 'new-task');
  taskInput.className = 'taskinput-form'; // set the CSS class

  //create button
  let submitnewtaskBtn = document.createElement('button');
  submitnewtaskBtn.className = 'button';
  submitnewtaskBtn.setAttribute('id', 'submit-task');
  submitnewtaskBtn.setAttribute('type', 'submit');

  let submitbtnText = document.createTextNode('Submit New TODO');
  submitnewtaskBtn.append(submitbtnText);

  //put form in the DOM

  taskForm.appendChild(taskInput); // put it into the DOM
  taskForm.appendChild(submitnewtaskBtn);
  controls.prepend(taskForm); // put it into the DOM

  //remove New TODO button from DOM

  // newtodoBtn.remove;

  newtodoBtn.parentNode.removeChild(newtodoBtn); //Learned something new today!

  //Click listener for submit Task

  submitnewtaskBtn.addEventListener('click', function(event) {
    event.preventDefault();
    alert('submit new task!');

    //Capture form input from taskForm and put it into an array and display in DOM

    let newtodoItem = document.getElementById('new-task').value;

    //capture input text and push it to the array
    console.log(newtodoItem);
    allitemsArr.push(newtodoItem);
    console.log(allitemsArr);
    allitemsCount();
    displayallItems();
  });
}

//update count of all items

function allitemsCount() {
  itemsCount = allitemsArr.length;

  //update DOM
  itemCountSpan.innerText = itemsCount;

  console.log('All items at Line 92 ' + itemsCount);
}

//update count of checked items

function uncheckedCount() {
  uncheckeditemsCount = uncheckeditemsArr.length;

  //update DOM

  uncheckedCountSpan.innerText = uncheckeditemsCount;

  console.log('Unchecked Items at line 104 ' + uncheckeditemsCount);
}

//loop through allitems array and display in DOM as checkboxes

function displayallItems() {
  allitemsArr.map(function(i) {
    console.log('the value of i at line 111 is : ' + i);
    /*  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete' */

    //Define li
    let newtodoLi = document.createElement('li');

    // create checkbox element
    let newtodoCheck = document.createElement('input');

    // Assign the attributes
    // to created checkbox
    newtodoCheck.type = 'checkbox';
    newtodoCheck.name = 'name';
    newtodoCheck.value = 'value';
    newtodoCheck.id = 'id';
    newtodoCheck.className = 'todo-checkbox';

    // create label for checkbox
    let todolabel = document.createElement('label');

    // assign attributes for the created label tag
    todolabel.htmlFor = 'id';

    // append the created text to the created label tag
    todolabel.appendChild(document.createTextNode(i));

    // append the checkbox and label to div
    newtodoLi.appendChild(newtodoCheck);
    newtodoLi.appendChild(todolabel);
    list.append(newtodoLi);
  });
}

displayallItems();
