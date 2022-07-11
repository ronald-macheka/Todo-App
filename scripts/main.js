//todo input reference
let todoInput = document.getElementById('todo-input');
//add todo button reference
const addTodoBtn = document.getElementById('add-todo-btn');
//hero section reference
const heroSectionElement = document.getElementById('hero-section');

//add button event handler
function addTodo() {

    if (todoInput.value === '') {//check if user has typed in todo item, if not send an alert msg
        alert('Please enter valid todo task!')
    } else {
        //prevent form from submitting
        event.preventDefault();
        //get user input and store in a variable
        let input = todoInput.value;
        //clear todo input field
        todoInput.value = '';
        //test if function works by printing to the console
        console.log(input);

        //create input element to output todo task
        let taskDisplayElement = document.createElement('input');
        //add content to the task output element
        taskDisplayElement.value = input;
        //set todo item to readonly
        taskDisplayElement.setAttribute('readonly', 'readonly');
        //todo item id
        taskDisplayElement.setAttribute('id', 'task');
        //append captured todo task to hero section
        heroSectionElement.append(taskDisplayElement);

        //create edit btn for editing todos
        const editBtn = document.createElement('button');
        //set edit button id
        editBtn.setAttribute('id', 'edit-btn');
        //edit button value
        editBtn.textContent = 'edit'
        //append edit button to hero section 
        heroSectionElement.append(editBtn);

        //create delete btn for deleting todos
        const deleteBtn = document.createElement('button');
        //set delet button id
        deleteBtn.setAttribute('id', 'delete-btn');
        //delete button value
        deleteBtn.textContent = 'delete';
        //append edit button to hero section 
        heroSectionElement.append(deleteBtn);
        
            //deletes todo task        
            function deleteTask() {
                console.log('delete btn cliked')
                taskDisplayElement.remove()
                editBtn.remove()
                deleteBtn.remove()
                }

            //edits todo task
            function editTask() {
                if (editBtn.textContent === 'edit') { //start of if...else block
                    taskDisplayElement.removeAttribute('readonly');
                    editBtn.textContent = 'update';
                    taskDisplayElement.style.border = 'solid';
                    taskDisplayElement.style.borderColor = 'palevioletred'
                } else if (editBtn.textContent === 'update') {
                    taskDisplayElement.setAttribute('readonly', 'readonly')
                    editBtn.textContent = 'edit';
                    taskDisplayElement.style.border = 'none';
                    taskDisplayElement.style.borderColor = 'none';
                    
            } //end of if...else block
        
        } //end of edit task function block

        editBtn.addEventListener('click', editTask);    
        deleteBtn.addEventListener('click', deleteTask);
        
    } //end of else block which checks if user has typed in their todo
        
} //end of addTodo function

//add event listener to Add Todo Button button 
addTodoBtn.addEventListener('click', addTodo);



