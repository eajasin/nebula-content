const Pool = require('pg').Pool //provide access to DB

const pool = new Pool ({ //query to access the data
    user: "postgres",
    host: "localhost",
    database: "books",
    password: "pass",
    port: 5432,
})

const getBook = (req, res) => {
    pool.query("SELECT * FROM books", (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const addBook = (req, res) => {
    
      try {
        const { name, total_pages, have_read } = req.body;
        
        pool.query(
            `INSERT INTO books (name, total_pages, have_read) VALUES ($1, $2, $3) RETURNING *;`,
            [name, total_pages, have_read],
            
            (error, results) => {
                if (error) {
                    console.log(error, '<--- error here')
                    throw error;
                }
                console.log(results, "<--- result!")
                res.status(200).json(results.rows)
            }
        );
      } catch (error) {
        throw error;
      }
}

const deleteBook = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(`DELETE FROM books WHERE id = ${id}`, (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  };
  
module.exports = {
    getBook,
    addBook,
    deleteBook,
}

