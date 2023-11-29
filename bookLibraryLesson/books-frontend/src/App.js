import React, { useState, useEffect } from "react";
import BooksList from "./components/BooksList";
import AddBookForm from "./components/AddBookForm";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch("http://localhost:3000/books")
    const data = await response.json();
    setBooks(data);
  };

  return (
    <div>
      <h1>Book Library</h1>
      <AddBookForm fetchBooks={fetchBooks} />
      <BooksList books={books} fetchBooks={fetchBooks} />
    </div>
  );
}

export default App;