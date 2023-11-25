import { useState } from "react"

export default function CreateBook(addBook){

    const [newBook, setNewBook] = useState({
        name: "",
        total_pages: "",
        have_read: null
    })

    function handleOptionChange(e){
        let value = e.target.value
        let haveReadValue = value === "true"

        setNewBook({
            ...newBook,
            have_read: haveReadValue
        }

        )
    }

    return (
        <div className="bookCard">
            <h2>
            Book Name:
            <input 
            onChange={(e) =>
            setNewBook({...newBook, name: e.target.value})
            }
            value = {newBook.name}
            placeholder="Book Name"
            />
            </h2>
            <h3>
            Total Pages:
            <input 
            onChange={(e) =>
            setNewBook({...newBook, total_pages: e.target.value})
            }
            value = {newBook.total_pages}
            placeholder= "Number of Pages"
            />
            </h3>
            <h3>
                Have read:
            <select
            value={newBook.have_read} onChange={handleOptionChange}
            >
                
                <option value={true}>Yes</option>
                <option value={false}>No</option>
            </select> 
            </h3>           

            
            <button
            onClick={() => {
                addBook(newBook)
                // console.log('clicked')
            }}
            >
                Create Book</button>
        </div>
    )
}