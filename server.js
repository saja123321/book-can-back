
'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
app.use(cors());
app.use(express.json());
require('dotenv').config();
const homeCont = require('./Controller/home-controller')
const bookCont = require('./Controller/book-controler')
const { seedBookData } = require('./Models/book.model')


const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(`${MONGO_URL}/book`, { useNewUrlParser: true, useUnifiedTopology: true });

app.get("/", homeCont);
app.get("/books", bookCont);
//seedBookData;

app.listen(PORT, () => { console.log(`listen to the port ${PORT} 🖥️ `) })
