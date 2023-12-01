import React, { useState, useEffect } from "react";
import BooksList from "./components/BooksList";
import AddBookForm from "./components/AddBookForm";
import AuthorsList from "./components/AuthorsList";
import AddAuthorForm from "./components/AddAuthorForm";


function App() {
  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([]);
  const [toggleBooks, setToggleBooks] = useState(true)

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch("http://localhost:3000/books")
    const data = await response.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    const response = await fetch("http://localhost:3000/authors")
    const data = await response.json();
    setAuthors(data);
  };

  //need to fetch authors; remember to import

  return (
    <div class="App">
      <h1>Book Library</h1>
      <button
        onClick={() => {
          setToggleBooks(true);
        }}
      >
        Books
      </button>
      <button
        onClick={() => {
          setToggleBooks(false);
        }}
      >
        Authors
      </button>
      {toggleBooks ? (
        <div>
          <AddBookForm fetchBooks={fetchBooks} />
          <BooksList books={books} fetchBooks={fetchBooks} />
        </div>
      ) : (
        <div>
        <AddAuthorForm fetchAuthors={fetchAuthors} />
        <AuthorsList authors={authors} fetchAuthors={fetchAuthors} />
        </div>
      )}
    </div>
  );
}

export default App;

//add an "invalid input" when entering data for a new book
//can show how to access and use libraries