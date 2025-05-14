const express = require('express');
const app = express();
const booksRoute = require('./routes/books');

app.use(express.json());

app.use('/books', booksRoute);

app.get('/', (req, res) => {
  res.send('Welcome to the Book Management App');
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

module.exports = app;

