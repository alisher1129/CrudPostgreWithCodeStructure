const {
    getAllActor,
    createActor,
    updateActor,
    deleteActor,
} = require("../services/actorService");

class actorController {
    async getAllActors(req, res) {
        try {
            const result = await getAllActor();
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async createActors(req, res) {
        try {
            console.log(req.body);
            const result = await createActor(req.body);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async updateActors(req, res) {
        try {
            const result = await updateActor(req.body, req.params.id);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
    async deleteActors(req, res) {
        try {
            const result = await deleteActor(req.params.id);
            res.json(result);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new actorController();