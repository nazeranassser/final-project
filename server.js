const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const blogRoutes = require('./routes/blog');

const app = express();
const port = 8000; // Changed the port to 8000

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);

const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');



const connection = "mongodb+srv://nazeranasser:2000374565Nn@cluster0.0c8faof.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(connection);

app.use(bodyParser.urlencoded({ extended: true }));

let collection;

async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("Connected to the database");
        const mydb = client.db('users');
        collection = mydb.collection('users');
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
}
var server=app.listen(9000,function() {
    var host= server.address().address
    var port= server .address().port
   });
connectToMongoDB();