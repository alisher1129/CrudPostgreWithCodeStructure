const express = require("express")
const route = express.Router();
const useControl = require("../controller/userController");

route.get("/output",useControl.getAllStudents);
route.post("/input",useControl.createStudents);
route.put("/change/:email",useControl.updateStudents);
route.delete("/khatam/:email",useControl.deleteStudents);

module.exports = route;

