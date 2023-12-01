import React, { useState } from "react"

const AddAuthorForm = ({ fetchAuthors }) => {
  const [name, setName] = useState()
  const [dob, setDob] = useState()
  const [nationality, setNationality] = useState()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await fetch("http://localhost:3000/authors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, dob, nationality})
    })
    fetchAuthors()
  }

  return (
    <form onSubmit={handleSubmit}>
   <label for="title">Author Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        // placeholder="Book Title"
      />
      <br></br>
    <label for="authorId">Author DOB:</label>
      <input
        type="text"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        // placeholder="Author Id"
      />
      <br></br>
    <label for="publicationYear">Author Nationality:</label>
      <input
        type="text"
        value={nationality}
        onChange={(e) => setNationality(e.target.value)}
        // placeholder="Publication Year"
      />
      <br></br>
      <button type="submit">Add Author</button>
    </form>
  );
};

export default AddAuthorForm;