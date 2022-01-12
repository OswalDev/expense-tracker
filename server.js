const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const { get } = require('lodash');
const connectDB = require('./config/db');

dotenv.config({path: './config/config.env'}); //points file

connectDB();

const transactions = require('./routes/transactions');

const app = express(); //initialize express app

app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port $
{PORT}`.yellow.bold)); //listen to a port