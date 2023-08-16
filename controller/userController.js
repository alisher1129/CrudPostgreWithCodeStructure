const {
    getAllStudent,
    createStudent,
    updateStudent,
    deleteStudent,
} = require("../services/service");

class userController {
    async getAllStudents(req, res) {
        try {
            const result = await getAllStudent();
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async createStudents(req, res) {
        try {
            console.log(req.body);
            const result = await createStudent(req.body);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async updateStudents(req, res) {
        try {
            const result = await updateStudent(req.body, req.params.email);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async deleteStudents(req, res) {
        try {
            const result = await deleteStudent(req.params.email);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new userController();