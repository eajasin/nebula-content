const express = require('express');
const cors = require('cors');
const app = express();
const port = 3030;
const db = require('./queries.js');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json()); // Place this middleware at the beginning

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express and Postgres API' });
});

app.get('/books', db.getBook);

app.delete('/books/:id', db.deleteBook)

app.post('/books', db.addBook);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
