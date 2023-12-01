import React, { useState } from "react"

const AddBookForm = ({ fetchBooks }) => {
  const [title, setTitle] = useState()
  const [publicationYear, setPublicationYear] = useState()
  const [authorId, setAuthorId] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch("http://localhost:3000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, authorId, publicationYear,  })
    })
    fetchBooks()
  }

  return (
    <form onSubmit={handleSubmit}>
   <label for="title">Book Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        // placeholder="Book Title"
      />
      <br></br>
    <label for="authorId">Author Id:</label>
      <input
        type="text"
        value={authorId}
        onChange={(e) => setAuthorId(e.target.value)}
        // placeholder="Author Id"
      />
      <br></br>
    <label for="publicationYear">Publication Year:</label>
      <input
        type="text"
        value={publicationYear}
        onChange={(e) => setPublicationYear(e.target.value)}
        // placeholder="Publication Year"
      />
      <br></br>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;