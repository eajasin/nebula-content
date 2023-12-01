import React from "react";


const Author = ({ author, fetchAuthors }) => {

  
    const handleDelete = async () => {
        await fetch(`http://localhost:3000/authors/${author.id}`, { method: "DELETE" })
        fetchAuthors()
    }


    return (
        <div>
            <h3>Title: {author.name}</h3>
            <h3>Author Id: {author.dob}</h3>
            <h3>Publication Year: {author.nationality}</h3>

        
            
                <button>Edit Book</button>
            
            <button onClick={handleDelete}>Delete Author</button>
        </div>
    );
};

export default Author;