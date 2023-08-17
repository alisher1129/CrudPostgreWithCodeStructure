const cityModel = require("../models/cityModel");
const studentModel = require("../models/studentModel");

class cityData {

    async getAllStudent() {
        try {
            const student = await cityModel.findAll();
            return student;
        } catch (err) {
            console.log(err);
        }
    }
    async createStudent(req,studentId) {
        try {
            const newCity = await cityModel.create(req);
           const newStudent = await studentModel.findByPk(studentId);
           if(!newStudent){
            return { error: "User not found" };
           }
           await newStudent.setCity(newCity);
           return newCity;
        } catch (err) {
            console.log(err);
        }
    }

    async updateStudent(req, id) {
        try {
            const student = await cityModel.update(req, { where: { id: id } });
            return student;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteStudent(id) {
        try {
            const student = await cityModel.destroy({ where: { id: id } });
            const result = await cityModel.findAll();
            return result;
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = new cityData();

