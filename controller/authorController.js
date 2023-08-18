const {
    getAllAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor,
} = require("../services/authorService");

class authorController {
    async getAllAuthors(req, res) {
        try {
            const result = await getAllAuthor();
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async createAuthors(req, res) {
        try {
            console.log(req.body);
            const result = await createAuthor(req.body);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async updateAuthors(req, res) {
        try {
            const result = await updateAuthor(req.body, req.params.id);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async deleteAuthors(req, res) {
        try {
            const result = await deleteAuthor(req.params.id);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new authorController();