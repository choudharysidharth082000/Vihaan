console.log('Backend Sever Started');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

dotenv.config();


//cors and body parser 
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());


//connection of the database
mongoose.connect(`${process.env.DATABASE}`, () =>
{
    console.log("DataBase Connected SuccessFully");
})




app.listen(process.env.PORT, () =>
{
    console.log(`${process.env.PORT} Connected SuccessFully`)
})





