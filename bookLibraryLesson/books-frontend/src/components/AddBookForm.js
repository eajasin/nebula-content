import React, { useState } from "react"

const AddBookForm = ({ fetchBooks }) => {
  const [title, setTitle] = useState("")
  const [publicationYear, setPublicationYear] = useState("")
  const [authorId, setAuthorId] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, publicationYear, authorId })
    })
    fetchBooks()
  }

  return (
    <form onSubmit={handleSubmit}>
    Book Title:
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        // placeholder="Book Title"
      />
    Author Id: 
      <input
        type="text"
        value={authorId}
        onChange={(e) => setAuthorId(e.target.value)}
        // placeholder="Author Id"
      />
    Publication Year:
      <input
        type="text"
        value={publicationYear}
        onChange={(e) => setPublicationYear(e.target.value)}
        // placeholder="Publication Year"
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;