const express = require('express');
const app = express();

var cors = require('cors');

// Import routes
const realStateRoutes = require('./routes/userRoutes');

//Router MIddlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use('/', realStateRoutes);










module.exports = app;
