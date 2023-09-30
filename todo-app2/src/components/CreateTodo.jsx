import { useState } from "react"

export default function CreateTodo({createTodo}){

    const [text, setText] = useState("") //grant access to children sttae is to have function that modifies the state

    return (
        <div>
            <input value={text} onChange={e => {setText(e.target.value)}}/>
        <button onClick={() => {createTodo(text); setText("")}}>Add todo </button>
        </div>
    )
}