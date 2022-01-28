const dotenv = require('dotenv');
const express = require('express');
dotenv.config();

// Need this to get middleware that manage all sessions
//const session = require("express-session");

// Manage CORS
const cors = require("cors");
const PORT = process.env.PORT || 1234;
//const router = require('./app/router');

const app = express();

// Here i create mongodb connexion
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017'
const dbName = 'monProjetMongo';

MongoClient.connect(url, function(err, client) {
    console.log("Connecté à MongoDB");
    const db = client.db(dbName);
    client.close();
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("connecté à Mongoose")
});

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.options('*', cors());
//app.use(router);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
    });