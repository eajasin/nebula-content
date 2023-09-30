import { useState } from "react";


export default function Todo({text, id, completed, completeTodo, removeTodo}){
   const [editing, isEditing] = useState(false)
    return (
        <div>
            
            <span onClick = {() => { completeTodo(id)}}>[DONE]</span>
            <p className={completed ? "completed" : ""}>id: {id} | text: {text}</p>
            <span onClick={() => removeTodo(id)}>[REMOVE]</span>
        </div>
    )
}