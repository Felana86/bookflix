const axios = require('axios');


const getBooks = async () => {
    try {
        return await axios.get('https://www.googleapis.com/books/v1/volumes/{volumeId}')
    } catch (error) {
        console.log(error);
    }
}

const countBooks = async () => {
    const books = await getBooks()

    if (books.data.message) {
        console.log((`Got ${Object.entries(books.data.message).length} books`));
    }
}


countBooks();