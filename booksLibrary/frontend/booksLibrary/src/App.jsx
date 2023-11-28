import { useState, useEffect } from 'react'

import './App.css'
import BookCard from './components/bookCard'
import CreateBook from './components/createBook'

function App() {

  const[books, setBooks] = useState([])

  useEffect(() => {
    getBooks();
  }, []);

  function addBook(newBook) {
    fetch("http://localhost:3030/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        newBook.id = res[0].id;
        setBooks([...books, newBook]);
      });
  }

  function getBooks() {
    fetch("http://localhost:3030/books")
      .then((res) => res.json())
      .then((res) => setBooks([...res]));
  }
  

  return (
    <div>
      <h1>Books Library</h1>
      <CreateBook addBook = {addBook}/>
      {books.map((book) => {
        return (
          <BookCard 
          book = {book}
          key = {book.id}
          />

        )
      })}

    </div>
  )
}

export default App


//-have drop down for list of authors in the database, and update as each new author is added (rather than to input ids)