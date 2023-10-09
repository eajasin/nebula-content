import { useState } from "react"
import TodoForm from "./todoForm"

export default function TodoList() {

    const [todos, setTodos] = useState([])
    
   

    function createTodo() {

        let id = Math.floor(Math.random() * 9999999)
        let todo = { id: id, text: text, completed: false }

        setTodos([...todos, todo])

    }

    // function completeTodo(){
    //     setTodos(todos.map((todo) => {
    //         if(todo.id === id){
    //           todo.completed = !todo.completed
    //         }
    //         return todo
    //     }))
    // }

    function deleteTodo(){
        let filteredTodo = [...todos].filter((todo) => {
            if(todo.id !== id){
                return true
            } else {
                return false
            }
        })
        setTodos(filteredTodo)
    }

  

    return (
        <>
<TodoForm createTodo={createTodo} />
<ul>
{todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            {/* <button onClick={() => completeTodo(todo.id)}>Complete</button> */}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
</ul>
        </>
    )
}
