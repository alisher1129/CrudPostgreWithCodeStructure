const studentModel = require("../models/studentModel");


class studentData {

    async getAllStudent() {
        try {
            const student = await studentModel.findAll();
            return student;
        } catch (err) {
            console.log(err);
        }
    }
    async createStudent(req) {
        try {
            const student = await studentModel.create(req);
            return student;
        } catch (err) {
            console.log(err);
        }
    }
    async updateStudent(req, id) {
        try {
            const student = await studentModel.update(req, { where: { id: id } });
            return student;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteStudent(id) {
        try {
            const student = await studentModel.destroy({ where: { id: id } });
            const result = await studentModel.findAll();
            return result;
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = new studentData();

