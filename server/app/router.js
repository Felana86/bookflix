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

// Route to fetchnig all google books data
router.route('/books/googleapi')
        .get(bookController.getBooks)



module.exports = router;