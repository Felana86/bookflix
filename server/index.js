require('dotenv').config();
const express = require('express');
const router = require('./app/router');
const cors = require('cors');
const PORT = process.env.PORT || 1234;


const app = express();
app.use(express.json());
app.use(express.urlencoded({
    etended: true
}));
app.options('*', cors());
app.use(router);


app.listen(PORT, () => {
    console.log(`Litening on ${PORT}`)
});
