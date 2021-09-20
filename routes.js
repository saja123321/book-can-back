const express = require("express");
const bookModel = require("./Models/book.model");
const app = express();

app.post("/add_user", async (request, response) => {
    const user = new bookModel(request.body);

    try {
        await user.save();
        response.send(user);
    } catch (error) {
        console.log(error)
        response.status(500).send(error);
    }
});
module.exports = { app };
