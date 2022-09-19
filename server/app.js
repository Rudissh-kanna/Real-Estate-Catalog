const express = require('express');
const app = express();

var cors = require('cors');

//Router MIddlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))



// Import routes






module.exports = app;
