const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// import routes
const authRoute = require('./route/auth');

dotenv.config();

// connect to db
mongoose.connect(process.env.DB_CONNECT
    ,{ useNewUrlParser: true}, 
    () => console.log('db connect built')
);

//Middlewares
app.use(express.json());
// Route Middlewares
app.use('/api/user', authRoute);


app.listen(3000, () => console.log('Server running'))