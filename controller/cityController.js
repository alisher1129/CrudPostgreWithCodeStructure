const {
    getAllStudent,
    createStudent,
    updateStudent,
    deleteStudent,
} = require("../services/cityService");

class cityController {
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
            const result = await createStudent(req.body,  req.params.id);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async updateStudents(req, res) {
        try {
            const result = await updateStudent(req.body, req.params.id);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async deleteStudents(req, res) {
        try {
            const result = await deleteStudent(req.params.id);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new cityController();