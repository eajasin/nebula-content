const express = require("express")
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
app.listen(3000, () => {
  console.log("Server is running on port 3000")
})

const { Pool } = require("pg")


const pool = new Pool({
  user: "postgres",
  host: "library.cfg5tfjeacbl.us-east-2.rds.amazonaws.com",
  database: "books_db",
  password: "testpass1",
  port: 5432,
});
// pool.query("SELECT NOW()", (err, res) => {
//   console.log(err, res)
//   pool.end()
// });


app.post("/books", async (req, res) => {
    const { title, author_id, publication_year } = req.body
    const result = await pool.query(
      "INSERT INTO books (title, author_id, publication_year) VALUES ($1, $2, $3) RETURNING *",
      [title, author_id, publication_year]
    );
    res.json(result.rows[0])
  });

  app.get("/books", async (req, res) => {
    const result = await pool.query("SELECT * FROM books")
    res.json(result.rows)
  })

  app.put("/books/:id", async (req, res) => {
    const { id } = req.params;
    let { title, author_id, publication_year } = req.body;
    const preexistingData = await pool.query(`SELECT * FROM books WHERE id = $1`, [id])
    if(!title || title.length <= 0){
      title = preexistingData.rows[0].title
    }
    if(!author_id || author_id.length <= 0){
      author_id = preexistingData.rows[0].author_id
    }
    if(!publication_year || publication_year.length <= 0){
      publication_year = preexistingData.rows[0].publication_year
    }
    const result = await pool.query(
      "UPDATE books SET title = $1, author_id = $2, publication_year = $3 WHERE id = $4 RETURNING *",
      [title, author_id, publication_year, id]
    );
    res.json(result.rows[0]);
  });

  app.delete("/books/:id", async (req, res) => {
    const { id } = req.params
    await pool.query("DELETE FROM books WHERE id = $1", [id])
    res.json({ message: "Book deleted" })
  })

 

  app.post("/authors", async (req, res) => {
    const { name, dob, nationality} = req.body
    const result = await pool.query(
      "INSERT INTO authors (name, dob, nationality) VALUES ($1, $2, $3) RETURNING *",
      [name, dob, nationality]
    );
    res.json(result.rows[0])
  });

  app.get("/authors", async (req, res) => {
    const result = await pool.query("SELECT * FROM authors")
    res.json(result.rows)
  })

  app.put("/authors/:id", async (req, res) => {
    const { id } = req.params;
    let { name, dob, nationality} = req.body;
    const preexistingData = await pool.query(`SELECT * FROM authors WHERE id = $1`, [id])
    if(!name || name.length <= 0){
      name = preexistingData.rows[0].name
    }
    if(!dob || dob.length <= 0){
      dob = preexistingData.rows[0].dob
    }
    if(!nationality|| nationality.length <= 0){
      nationality = preexistingData.rows[0].nationality
    }

    const result = await pool.query(
      "UPDATE authors SET name = $1, dob = $2, nationality = $3 WHERE id = $4 RETURNING *",
      [name, dob, nationality, id]
    );
    res.json(result.rows[0]);
    
  })

  app.delete("/authors/:id", async (req, res) => {
    const { id } = req.params
    await pool.query("DELETE FROM authors WHERE id = $1", [id])
    res.json({ message: "Author deleted" })
  })


  
  //add author functions (post, get, put, delete)
