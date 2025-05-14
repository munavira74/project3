const express = require('express');
const router = express.Router();

const books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];

router.get('/', (req, res) => {
  res.json(books);
});

router.post('/', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

module.exports = router;

