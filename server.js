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
const { bookCreat, bookDel } = require('./Models/book.model')
const PORT = process.env.PORT;
mongoose.connect(
    `mongodb+srv://saja1234:saja1234@db.zb2er.mongodb.net/LTUC?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => console.log("MongoDb connected"))
    .catch(err => console.log(err));;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
app.get("/", homeCont);
app.get("/books", bookCont);
app.post("/add-book", bookCreat);
app.delete("/del-book/:id", bookDel);
//seedBookData;
app.listen(PORT, () => { console.log(`listen to the port ${PORT} 🖥️ `) })
