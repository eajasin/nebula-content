import { useState } from "react"

const Book = ({ book, fetchBooks }) => {

  const [editing, setEditing] = useState(false)
  const [title, setTitle] = useState(book.title)
  const [authorId, setAuthorId] = useState(book.author_id)
  const [publicationYear, setPublicationYear] = useState(book.publication_year)

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/books/${book.id}`, { method: "DELETE" })
      .then((res, err) => {
        console.log(res, err)
      })
    fetchBooks()
  }

  const handleEdit = async () => {

    setEditing(!editing)
    setTitle(book.title)
    setAuthorId(book.author_id)
    setPublicationYear(book.publication_year)
  }

  const handleUpdate = async () => {
    const updatedBook = {
      title: title,
      author_id: authorId,
      publication_year: publicationYear
    }

    await fetch(`http://localhost:3000/books/${book.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((res) => fetchBooks())
    setEditing(!editing)
  }

  return (
    <div className="book">
      {!editing ? (
        <>
          <h2>Title: {book.title}</h2>
          <h4>Author Id: {book.author_id}</h4>
          <h4>Publication Year: {book.publication_year}</h4>
          <button onClick={handleDelete}>Delete Book</button>
        </>
      ) : (
        <>

          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          <input
            onChange={(e) => {
              setAuthorId(e.target.value);
            }}
            value={authorId}
          />
          <input
            onChange={(e) => {
              setPublicationYear(e.target.value);
            }}
            value={publicationYear}
          />
          <button onClick={handleUpdate}>Update</button>
        </>

      )}

      <button onClick={handleEdit}>Edit Book</button>

    </div>
  )
}

export default Book