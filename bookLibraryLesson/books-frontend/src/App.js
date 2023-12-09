import React, { useState, useEffect } from "react";
import BooksList from "./components/BooksList";
import AddBookForm from "./components/AddBookForm";
import AuthorsList from "./components/AuthorsList";
import AddAuthorForm from "./components/AddAuthorForm";
import owlImage from "./components/image.png"


function App() {
  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([]);
  const [toggleBooks, setToggleBooks] = useState(true)

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await fetch("https://d11vxar4wz38b6.cloudfront.net/books")
    const data = await response.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = async () => {
    const response = await fetch("https://d11vxar4wz38b6.cloudfront.net/authors")
    const data = await response.json();
    setAuthors(data);
  };

  //need to fetch authors; remember to import
  //filter, press into box where type in id and join all their books with the author, display all books of a particular author; see how to use join
  //need to make a new API route

  return (
    <div class="App">
      <h1 className="mainHeading">Book Library</h1>
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
        <div className="bookFormContainer">
          <img src={owlImage} className="owlImage" />
          <AddBookForm fetchBooks={fetchBooks} />
          <div className="bookList">
          <BooksList books={books} fetchBooks={fetchBooks} />
          </div>
        </div>
      ) : (
        <div className="bookFormContainer">
          <img src={owlImage} className="owlImage" />
          <AddAuthorForm fetchAuthors={fetchAuthors} />
          <div className="bookList">
          <AuthorsList authors={authors} fetchAuthors={fetchAuthors} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

//add an "invalid input" when entering data for a new book
//can show how to access and use libraries