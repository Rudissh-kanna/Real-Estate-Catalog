const express = require('express');
const app = express();

var cors = require('cors');

app.use(cors());


// Import routes



//Router MIddlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))


module.exports = app;
