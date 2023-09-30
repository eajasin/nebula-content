import { useState } from "react";
import Todo from "./Todo";
import CreateTodo from "./CreateTodo";

export default function TodoList(){
    const [todos, setTodos] = useState([])

function createTodo(text){
    let id = Math.floor(Math.random() * 9000)//need key to differentiate between each addition, gnerte keys randomly
    let todo = {id: id, text: text, completed: false}
    setTodos([...todos, todo]) //as update todos, also adding previous todos (everything that was already in it)
}

function completeTodo(id){
    setTodos(todos.map((todo) => {
        if(todo.id === id){
            todo.completed = !todo.completed
        }
        return todo
    })
    )
}

function removeTodo(id){
    let filteredTodos =[...todos].filter((todo) => { 
        if(todo.id !== id){
        return true
    } else { 
        return false
    }
})
setTodos(filteredTodos)
}

    return (
        <div className="todoList">
            <h1>Todo List</h1>
            <CreateTodo createTodo={createTodo} completeTodo = {completeTodo}/>
            {todos.map((todo) => { //this renders an array of todos
                return <Todo key = {todo.id} id={todo.id} text={todo.text} completed={todo.completed} removeTodo={removeTodo} completeTodo={completeTodo}/>
            })}
            
            {/* <button onClick={() => console.log(todos)}>Log todos state</button> */}
        </div>
    )
}
