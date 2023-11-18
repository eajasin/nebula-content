const Pool = require('pg').Pool;

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'contacts',
    password:'pass',
    port: 5432,
})

const getContacts = (req, res) => {
    pool.query("SELECT * FROM people", (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  };
  
  const addContact = (req, res) => {

      try {
       
        const { name, email_address, age } = req.body;
        
        pool.query(
            `INSERT INTO people (name, email_address, age) VALUES ($1, $2, $3) RETURNING *;`,
            [name, email_address, age],
          
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
    };

    const deleteContact = (request, response) => {
      const id = parseInt(request.params.id);
      pool.query(`DELETE FROM people WHERE id = ${id}`, (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      });
    };

    const getContact = (request, response) => {
      const { id } = request.body;
      console.log(id)
      pool.query("SELECT * FROM people WHERE id=$1", [id], (error, results) => {
        if (error) {
          throw error;
        }
        response.status(200).json(results.rows);
      });
    };

    const updateContact = (req, res) => {
      let { name, email_address, age, id } = req.body;
      console.log(req.body);
      // Use a promise to request the existing data - we need a promise or else everything will happen in the wrong order
      let myPromise = new Promise(function(resolve, reject){
        pool.query("SELECT * FROM people WHERE id=$1", [id], (error, results) => {
          if (error) {
            throw error;
          } else if(res){
            // We then resolve the promise
            resolve(results.rows)
            return results.rows
          } else {
            reject()
          }
        })
      });
    // `.then()` and update the data
      myPromise.then((rez) => {
          name = name !== undefined ? name : rez.rows.name;
            email_address = email_address !== undefined ? email_address : rez.rows.email_address;
            age = age !== undefined ? age : rez[0].age;
        try {
          pool.query(
            `UPDATE people 
                SET name=$1, email_address=$2, age=$3 
                WHERE id = $4;`,
            [name, email_address, age, id],
            (error, results) => {
              if (error) {
                console.log(error, '<--- error here')
                throw error;
              }
              // console.log(results, "<--- result!")
              res.status(200).json(results.rows)
            }
          );
        } catch (error) {
          throw error;
        }
      })
    };
    
    module.exports = {
      getContacts,
      addContact,
      deleteContact,
      getContact,
      updateContact,
    };

 

