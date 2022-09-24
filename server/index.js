const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
var cors = require('cors');


dotenv.config();
app.use(cors());
//connect to DB
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})

const PORT = process.env.PORT || 8080;


app.listen(PORT, () => console.log('Server running at 8080......'));

