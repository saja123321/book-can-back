const { bookModel } = require("../Models/book.model");
console.log(bookModel)
const getBook = (req, res) => {
    bookModel.find().then(data => {
        res.json(data);
    })
};
module.exports = getBook;