import { useState } from "react"



export default function Todo({id, todo}) {
    const [isEditing, setIsEditing] = useState(false)
    const [editedTodoText, setEditedTodoText] = useState(todo.text)

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
        
        editTodo(revisedTodo, todo.id)
        setEditedTodoText(false)
    }

    return (
        <>
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedTodoText}
                onChange={(e) => setEditedTodoText(e.target.value)}
              />
              <button onClick={updateEdit}>Update Todo</button>
            </>
          ) : (
            <>
              <span>{todo.text}</span>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button>Delete</button>
            </>
          )}
        </>
      );
    }




