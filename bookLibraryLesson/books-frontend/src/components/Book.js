import React from "react";
import { useState } from "react";

const Book = ({ book, fetchBooks }) => {

    const [isEditing, setIsEditing] = useState(false)
    const [newTitle, setNewTitle] = useState("")
    const [newAuthorId, setNewAuthorId] = useState("")
    const [newPublicationYear, setNewPublicationYear] = useState("")

    const handleDelete = async () => {
        await fetch(`http://localhost:3000/books/${book.id}`, { method: "DELETE" })
        fetchBooks()
    }
  

    const handleUpdate = async () => {

        const updatedBook = {
            title: newTitle,
            author_id: newAuthorId,
            publication_year: newPublicationYear
        }

        await fetch(`http://localhost:3000/books/${book.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedBook),
          })  
        fetchBooks()

        setNewTitle("");
        setNewAuthorId("");
        setNewPublicationYear("");
        setIsEditing(false);
    }


    // function edit() {
    //     console.log(book)
    // }

    return (
        <div>
            <h3>Title: {book.title}</h3>
            <h3>Author Id: {book.author_id}</h3>
            <h3>Publication Year: {book.publication_year}</h3>

            {isEditing && (
                <>
          <input
            type="text"
            placeholder="New Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="New Author Id"
            value={newAuthorId}
            onChange={(e) => setNewAuthorId(e.target.value)}
          />
          <input
            type="text"
            placeholder="New Publication Year"
            value={newPublicationYear}
            onChange={(e) => setNewPublicationYear(e.target.value)}
          />
        </>
            )}

            {isEditing ? (
                <button onClick={handleUpdate}></button>
            ) : (
                <button onClick={() => setIsEditing(true)}>Edit Book</button>
            )}
            <button onClick={handleDelete}>Delete Book</button>
        </div>
    );
};

export default Book;