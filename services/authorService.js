const authorModel = require("../models/authorModel");


class authorData {

    async getAllAuthor() {
        try {
            const author = await authorModel.findAll();
            return author;
        } catch (err) {
            console.log(err);
        }
    }
    async createAuthor(req) {
        try {
            const author = await authorModel.create(req);
            return author;
        } catch (err) {
            console.log(err);
        }
    }
    async updateAuthor(req, id) {
        try {
            const author = await authorModel.update(req, { where: { id: id } });
            return author;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteAuthor(id) {
        try {
            const author = await authorModel.destroy({ where: { id: id } });
            const result = await authorModel.findAll();
            return result;
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = new authorData();

