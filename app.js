require('dotenv').config();

const express = require('express');

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Welcome Home!');
})

app.listen(port);