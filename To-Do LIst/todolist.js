const addtaskBtn = document.querySelector('.add');
const tasksDisplay = document.querySelector('.taskDisplay');
const textbox = document.querySelector('.textbox');
const taskCountDisplay = document.querySelector('.taskCountDisplay');
const tasksCompletedDisplay = document.querySelector('.tasksCompletedDisplay');
tasksCompletedDisplay.innerText = "Tasks Completed: 0"
taskCountDisplay.innerText = "Task Count: 0"



let tasksCompleted = 0;  // Move this outside of the event listener
function incrementTasksCompleted() {
  tasksCompleted += 1;
  return tasksCompleted;
}

let taskCount = 0
function incrementNewTasks() {
  taskCount += 1
  return taskCount
}

function decrementNewTasks() {
  taskCount -= 1
  return taskCount
}





addtaskBtn.addEventListener('click', (e) => {
  e.preventDefault(); //maybe adjust this for the persistent data feature
  const newTask = document.createElement('li');
  let numOfTasks = incrementNewTasks()
  taskCountDisplay.innerText = `Task Count: ${numOfTasks}`



  //CHECKBOX START -->
  let checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.addEventListener('click', (e) => {
    let completed = incrementTasksCompleted();
    tasksCompletedDisplay.innerText = `Tasks Completed: ${completed}`;



  });


  //<--CHECKBOX END

  // EDIT BUTTON START -->
  const editbtn = document.createElement('button')
  editbtn.innerText = "Edit"
  editbtn.addEventListener('click', (e) => {
    newTask.innerText = ""
    //need to be able to add a textbox here to change value

  })


  

  // <-- EDIT BUTTON END

  // DELETE BUTTON START -->
  const deletebtn = document.createElement('button');
  deletebtn.innerText = "Delete";
  deletebtn.addEventListener('click', (e) => {
    newTask.remove()
    let numOfTasks = decrementNewTasks()
    taskCountDisplay.innerText = `Task Count: ${numOfTasks}`
    // incrementing whenever clicked, may need to add a change event listener or function
  });
  // <-- DELETE BUTTON END



  newTask.textContent = textbox.value;

  if (textbox.value !== "") {
    tasksDisplay.appendChild(newTask);
  }
  newTask.appendChild(checkbox);
  newTask.appendChild(editbtn);
  newTask.appendChild(deletebtn)
  textbox.value = "";


});


