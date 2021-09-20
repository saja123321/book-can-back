"use strict";
const mongoose = require("mongoose");
const bookschem = new mongoose.Schema({
    title: { type: String, unique: true },
    description: { type: String },
    email: { type: String },
    status: { type: String }
});
const bookModel = mongoose.model('books', bookschem);
const bookCreat = async (request, response) => {
    const book = new bookModel(request.body);
    try {
        await book.save();
        console.log('book created')
        response.send(book);
    } catch (error) {
        console.log(error)
        response.status(500).send(error);
    }
}
const bookDel = async (request, response) => {
    const book = request.params.id
    try {
        bookModel.deleteOne({ _id: book }, (error, deleted) => {
            console.log(deleted)
            response.send('book deleted');
        });
    } catch (error) {
        console.log(error)
        response.status(500).send(error);
    }
}
module.exports = { bookModel, bookCreat, bookDel }
// let new_book = new bookModel({
    //     title: 'The Forty Rules of Love',
    //     description: 'How can love be worthy of its name if one selects solely the pretty things and leaves out the hardships? It is easy to enjoy the good and dislike the bad. Anybody can do that. The real challenge is to love the good and the bad together, not because you need to take the rough with the smooth but because you need to go beyond such descriptions and accept love in its entirety ― Elif Shafak, The Forty Rules of Love',
    //     email: 'sajamalkawai@gmail.com',
    //     status: 'avilable'
    // })
    // new_book.save();
    // let new_book2 = new bookModel({
    //     title: 'The Catcher in the Rye',
    //     description: 'The Catcher in the Rye is a novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951. It was originally intended for adults but is often read by adolescents for its themes of angst, alienation, and as a critique on superficiality in society.',
    //     email: 'sajamalkawai2@gmail.com',
    //     status: 'avilable'
    // })
    // new_book2.save();
    // let new_book3 = new bookModel({
    //     title: 'Nineteen Eighty-Four',
    //     description: 'in the year 1984, civilization has been damaged by world war, civil conflict, and revolution. Airstrip One (formerly known as Great Britain) is a province of Oceania, ',
    //     email: 'sajamalkawai@gmail.com',
    //     status: 'avilable'



    // })
    // new_book3.save();