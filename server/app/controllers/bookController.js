

const  axios = require("axios").default;
//const qs = require("qs");

const bookController = {

    getBooks: async (_, response) => {

        try {
            const options = {
                method: 'GET',
                url: 'https://goodreads-books.p.rapidapi.com/search',
                params: {q: 'harry', page: '1'},
                headers: {
                    'x-rapidapi-host': 'goodreads-books.p.rapidapi.com',
                    'x-rapidapi-key': 'b2d17f1cefmshf17a0180b828eebp19f261jsnd3c4c67d0d90'
                }
            };
            
            const responseAxios = await axios(options);
            
            axios.request(options).then(function (response) {
                
                    console.log(response.data);
                    return response.json(responseAxios);
            }).catch (function (error) {
                    console.error(error);
                    
            });
        } catch (error) {
            response.status(500).send(error.message);
        }
        
    }


}


module.exports = bookController;