const bookModel = require("../models/bookModel");
const authorModel = require("../models/authorModel");

class bookData {

    async getAllBook() {
        try {
            const book = await bookModel.findAll({
                include:{model:authorModel ,as:'author'}
            });
            return book;
        } catch (err) {
            console.log(err);
        }
    }
    async createBook(req, authorId) {
        try {
            const newBook = await bookModel.create(req);
            // const newAuthor = await authorModel.findByPk(authorId);
            // if (!newAuthor) {
            //     return { error: "User not found" };
            // }
            // await newAuthor.setBook(newBook);
            return newBook;
        } catch (err) {
            console.log(err);
        }
    }

    async updateBook(req, id) {
        try {
            const upBook = await bookModel.update(req, { where: { id: id } });
            return upBook;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteBook(id) {
        try {
            const delBook = await bookModel.destroy({ where: { id: id } });
            const result = await bookModel.findAll();
            return result;
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = new bookData();

