export default function TodoForm() {

    const [input, setInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        setInput('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Todo" value={input} onChange={(e) => { setInput(e.target.value) }}></input>
            <button>Add Todo</button>
        </form>
    )


}
