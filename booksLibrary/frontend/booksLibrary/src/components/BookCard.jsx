// import { useState } from "react"
import React from "react"

export default function BookCard({book}){


    return (
        <div className="bookCard">
            <h2>Book Name:{book.name}</h2>
            <h3>Total Pages: {book.total_pages}</h3>
            <h3>Have Read? {book.have_read  ? 'Yes' : 'No'}</h3>

            {/* <h3>Book Overview</h3>
            <h3>Book Stats (e.g., number of pages, read/not read)</h3>
            <button>Edit</button>
            <button>Delete</button> */}
        </div>
    )
}