//get reference to the to do input
let todoInput = document.getElementById('todo-input');
//get reference to the add to do button
const addTodoBtn = document.getElementById('add-todo-btn');
//get fererence to the hero section to display to do items
const heroSectionElement = document.getElementById('hero-section');
//get reference to edit button

//add button event handler
function addTodo() {

    if (todoInput.value === '') {
        alert('Please enter valid todo task!')
    } else {
        //prevent form from submitting
        event.preventDefault();
        //get user input and store in a variable
        let input = todoInput.value;
        //clear todo input field
        todoInput.value = '';
        //test if function works by printing to the console
        console.log(input)
        //create input element to output todo task
        let taskDisplayElement = document.createElement('input');
        //add content to the task output element
        taskDisplayElement.value = input;
        taskDisplayElement.setAttribute('readonly', 'readonly');
        taskDisplayElement.setAttribute('id', 'task');
    //append task output to hero section
    heroSectionElement.append(taskDisplayElement);
    const editBtn = document.createElement('button');
    editBtn.setAttribute('id', 'edit-btn');
    editBtn.textContent = 'edit'
    heroSectionElement.append(editBtn);
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id', 'delete-btn');
    deleteBtn.textContent = 'delete';
    heroSectionElement.append(deleteBtn);
  
    function deleteTask() {
        console.log('delete btn cliked')
        taskDisplayElement.remove()
        editBtn.remove()
        deleteBtn.remove()
        }

        function editTask() {
            if (editBtn.textContent === 'edit') {
                taskDisplayElement.removeAttribute('readonly');
                editBtn.textContent = 'update';
                taskDisplayElement.style.border = 'solid';
                taskDisplayElement.style.borderColor = 'palevioletred'
            } else if (editBtn.textContent === 'update') {
                taskDisplayElement.setAttribute('readonly', 'readonly')
                editBtn.textContent = 'edit';
                taskDisplayElement.style.border = 'none';
                taskDisplayElement.style.borderColor = 'none';
                //return;
        }
        
        }

    editBtn.addEventListener('click', editTask)    
    deleteBtn.addEventListener('click', deleteTask)
        
    }//end of else block
        
} //end of addTodo function

//add event listener to Add Todo Button button 
addTodoBtn.addEventListener('click', addTodo);



