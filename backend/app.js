/* global process */
/* global __dirname */
const fs = require('node:fs');
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");



// Cors Configuration
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

// Dotenv Configuration
dotenv.config();

// Json Configure
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.DB_URI, {}).then(() => {
    console.log("Mongodb Connected Successfully");
}).catch((err) => {
    console.log(err);
});

app.listen(process.env.PORT, () => {                
    console.log(`server is running on port ${process.env.PORT}`);
});

fs.readdirSync(__dirname + '/Routes').forEach(function (file) {
    console.log(file);
    require(__dirname + '/Routes/' + file)(app);
});