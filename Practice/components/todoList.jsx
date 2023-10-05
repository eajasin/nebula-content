import { useState } from "react"

export default function TodoList() {

    const [todos, setTodos] = useState([])
    const [editedTodoText, setEditedTodoText] = useState(todos)

    function createTodo() {

        let id = Math.floor(Math.random() * 9999999)
        let todo = { id: id, text: text, completed: false }

        setTodos([...todos, todo])

    }

    function completeTodo(){
        setTodos(todos.map((todo) => {
            if(todo.id === id){
              todo.completed = !todo.completed
            }
            return todo
        }))
    }

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

    function editTodo(revisingTodo, revisingTodoId){
        let updatedTodo = todos.map((todo) => {
            if(todo.id === revisingTodoId){
                return revisingTodo
            }
            return todo
        })
        setTodos(updatedTodo)
    }

    function updateEdit(){
        let revisedTodo = {id: id, text: editedTodoText, completed: false }
        
        editTodo(revisedTodo, todos.id)
        setEditedTodoText(!editing)
    }

    return (
        <>

        </>
    )
}
function handleUpdate() {
    let newContact = {
      id: contact.id, name: nameText, email: emailText, phone: phoneText
    }
  editContact(newContact, contact.id)
  setEditing(!editing)
}