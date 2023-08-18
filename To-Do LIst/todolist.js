const addtaskbtn = document.getElementsByClassName('ADD')
const deletebtn = document.getElementsByClassName('delete')
const tasksDisplay = document.getElementsByClassName('taskDisplay')
const textbox = document.getElementsByClassName('TASKS')
const newTask = document.getElementsByClassName('newTask')
const taskList = document.getElementsByClassName('taskList')


addtaskbtn.addEventListener('click', () => {
  const text = textbox.value

  if(text !== ""){
    newTask = document.createElement("li")

    newTask.innerHTML = 
    //each new task should have text, button, checkbox
    //use template literal with text of new task?
      //`input type="text" value = ${text}` 
    
       
    //adds to list
    taskList.appendChild(newTask)
  }  
 

})


