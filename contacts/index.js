const express = require('express')
const app = express()
const port = 3030
const db = require('./queries.js')
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res) => { res.json({ info:
'Node.js, Express and Postgres API'})})

app.get('/contacts', db.getContacts)

app.post('/contacts', db.addContact);

app.delete("/contact/:id", db.deleteContact);

app.get('/contact', db.getContact);

app.put('/contacts', db.updateContact);

app.listen(port, () => { 
    console.log(`App running on port ${port}.`) 
})