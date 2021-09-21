const { bookModel } = require("../Models/book.model");
const getBook = (req, res) => {
    bookModel.find().then(data => {
        res.json(data);
    })
};
module.exports = { getBook }