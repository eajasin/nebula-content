const Pool = require('pg').Pool

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'books_db',
    password: 'pass',
    port: 5432
})

const getBooks = (req, res) => {
    pool.query("SELECT * FROM books", (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}