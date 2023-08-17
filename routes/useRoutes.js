const express = require("express")
const route = express.Router();
const useControl = require("../controller/userController");
const stControl = require("../controller/studentController");
const ctControl = require("../controller/cityController");

//user routes
route.get("/output", useControl.getAllStudents);
route.post("/input", useControl.createStudents);
route.put("/change/:email", useControl.updateStudents);
route.delete("/khatam/:email", useControl.deleteStudents);

//students routes
route.get("/student", stControl.getAllStudents);
route.post("/inputstudent", stControl.createStudents);
route.put("/changestudent/:id", stControl.updateStudents);
route.delete("/finishstudent/:id", stControl.deleteStudents);

//city routes
route.get("/city", ctControl.getAllStudents);
route.post("/inputcity/:id", ctControl.createStudents);
route.put("/changecity/:id", ctControl.updateStudents);
route.delete("/finishcity/:id", ctControl.deleteStudents);
module.exports = route;

