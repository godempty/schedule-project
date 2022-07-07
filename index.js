const mongoose = require('mongoose');
const dotenv = require('dotenv');
const express = require('express');
const app = express();


dotenv.config();

mongoose.connect(process.env.DB_CONNECT
    ,{useNewUrlParser: true}
    , () => console.log('db connected!')
);



app.listen(5000, () => console.log('server running'));
