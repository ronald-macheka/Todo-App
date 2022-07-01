//get reference to the to do input
let todoInput = document.getElementById('todo-input');
//get reference to the add to do button
const addTodoBtn = document.getElementById('add-todo-btn');
//get fererence to the hero section to display to do items
const heroSectionElement = document.getElementById('hero-section');
//body
let body = document.get

//add button event handler
function addTodo() {
    //prevent browser from loading
    event.preventDefault();
    //get user input and store in a variable
    let input = todoInput.value;
    //clear todo input field
    todoInput.value = '';
    //test if function works by printing to the console
    console.log(input)
    //create div element
    let div = document.createElement('div');
    //add content to the div element
    div.textContent = input;
    //append div to hero section
    heroSectionElement.append(div);
    
}

//add event listener to Add Todo Button button 
addTodoBtn.addEventListener('click', addTodo);




