const express = require('express');
const app = express();
const bodyParser = require('body-parser')

var cors = require('cors');

// Import routes
const userRoutes = require('./routes/userRoutes');
const propRoutes = require('./routes/propertyRoutes');

//Router MIddlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({extended:false}));
app.use('/', userRoutes);
app.use('/', propRoutes);

module.exports = app;
