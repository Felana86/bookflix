const { Router } = require('express');
const bookController = require('./controllers/bookController');

const router = Router();

// Routes
/**
 * Testing all my route
 * @route GET /hello
 * @group Bookflix
 * @returns {string} 200 - 'Hello world'
 */
router.get('/hello', (_, response) => response.json('Hello World'));

// Use the bookController to obtain all books
router.get('/books', bookController.getBooks);



module.exports = router;