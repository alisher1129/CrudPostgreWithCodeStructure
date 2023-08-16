const userModel = require("../models/example");


class UserData {

    async getAllStudent() {
        try {
            const student = await userModel.findAll();
            return student;
        } catch (err) {
            console.log(err);
        }
    }
    async createStudent(req) {
        try {
            const student = await userModel.create(req);
            return student;
        } catch (err) {
            console.log(err);
        }
    }
    async updateStudent(req, email) {
        try {
            const student = await userModel.update(req, { where: { email:email} });
            return student;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteStudent(email) {
        try {
            const student = await userModel.destroy({ where: { email:email} });
            const result = await userModel.findAll();
            return result;
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = new UserData();

