const Pool = require('pg').Pool 

const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    database: "zenvibe_db",
    password: "pass",
    port: 5432,
})

const getUser = (req, res) => {
    pool.query("SELECT * FROM users", (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const addUser = (req, res) => {
    
      try {
        const { username, password_hash, email, original_weight, height, age, goal_weight } = req.body;
        
        pool.query(
            `INSERT INTO users (username, password_hash, email, original_weight, height, age, goal_weight ) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`,
            [username, password_hash, email, original_weight, height, age, goal_weight ],
            
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

const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    pool.query(`DELETE FROM users WHERE id = ${userId}`, (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  };
  
module.exports = {
    getUser,
    addUser,
    deleteUser,
}

