const dotenv = require('dotenv');

const express = require('express');
dotenv.config();


const cors = require('cors');
const PORT = process.env.PORT || 3300;
const router = require('./app/router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.options('*', cors());


app.use(router);

app.listen(PORT, () => {
    console.log(`Litening on ${PORT}`)
});
