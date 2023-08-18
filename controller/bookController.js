const {
    getAllBook,
    createBook,
    updateBook,
    deleteBook,
} = require("../services/bookService");

class bookController {
    async getAllBooks(req, res) {
        try {
            const result = await getAllBook();
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async createBooks(req, res) {
        try {
            console.log(req.body);
            const result = await createBook(req.body, req.body.authorId);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async updateBooks(req, res) {
        try {
            const result = await updateBook(req.body, req.params.id);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async deleteBooks(req, res) {
        try {
            const result = await deleteBook(req.params.id);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new bookController();