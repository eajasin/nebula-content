const express = require('express');
const cors = require('cors');
const app = express();
const port = 3030;
const db = require('./usersQueries.js');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express and Postgres API' });
});

app.get('/users', db.getUser);

app.delete('/users/:id', db.deleteUser)

app.post('/users', db.addUser);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
