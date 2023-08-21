const express = require("express")
const route = express.Router();


const AcControl = require("../controller/actorController");
const MvControl = require("../controller/movieController");
const aMcontrol = require("../controller/actorMovieController");

//Actor Routes
route.get("/actor", AcControl.getAllActors);
route.post("/actor", AcControl.createActors);
route.put("/actor/:id", AcControl.updateActors);
route.delete("/actor/:id", AcControl.deleteActors);


//Movie Routes
route.get("/movie", MvControl.getAllMovies);
route.post("/movie", MvControl.createMovies);
route.put("/movie/:id", MvControl.updateMovies);
route.delete("/movie/:id", MvControl.deleteMovies);


//actorMovie Routes
route.get("/actorMovie", aMcontrol.getAllActorMovies);
route.post("/actorMovie", aMcontrol.createActorMovies);


module.exports = route;
