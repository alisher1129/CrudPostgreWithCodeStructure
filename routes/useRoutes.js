const express = require("express")
const route = express.Router();
const useControl = require("../controller/userController");
const stControl = require("../controller/studentController");
const ctControl = require("../controller/cityController");
const auControl = require("../controller/authorController");
const bControl = require("../controller/bookController");

//user routes
route.get("/output", useControl.getAllStudents);
route.post("/input", useControl.createStudents);
route.put("/change/:email", useControl.updateStudents);
route.delete("/khatam/:email", useControl.deleteStudents);

//students routes
route.get("/student", stControl.getAllStudents);
route.post("/student", stControl.createStudents);
route.put("/student/:id", stControl.updateStudents);
route.delete("/student/:id", stControl.deleteStudents);

//city routes
route.get("/city", ctControl.getAllStudents);
route.post("/city/:id", ctControl.createStudents);
route.put("/city/:id", ctControl.updateStudents);
route.delete("/city/:id", ctControl.deleteStudents);

//One to many
//author routes
route.get("/author", auControl.getAllAuthors);
route.post("/author", auControl.createAuthors);
route.put("/author/:id", auControl.updateAuthors);
route.delete("/author/:id", auControl.deleteAuthors);

// book routes
route.get("/book", bControl.getAllBooks);
route.post("/book", bControl.createBooks);
route.put("/book/:id", bControl.updateBooks);
route.delete("/book/:id", bControl.deleteBooks);


module.exports = route;

