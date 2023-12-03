const express = require('express');
const BooksController = require('../controllers/BooksController');

const  router = express.Router();

router.get('/', BooksController.findBooks);
router.post('/books', BooksController.createBook );
router.get('/books/:id', BooksController.findBook);
router.put('/books/:id', BooksController.update);
router.delete('/books/:id', BooksController.deleteBook);

module.exports = router;