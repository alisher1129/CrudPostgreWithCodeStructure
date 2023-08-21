const actorModel = require("../models/actorModdel")


class actorData {

    async getAllActor() {
        try {
            const actor = await actorModel.findAll();
            return actor;
        } catch (err) {
            console.log(err);
        }
    }
    async createActor(req) {
        try {
            const actor = await actorModel.create(req);
            return actor;
        } catch (err) {
            console.log(err);
        }
    }
    async updateActor(req, id) {
        try {
            const actor = await actorModel.update(req, { where: { id: id } });
            return actor;
        } catch (err) {
            console.log(err);
        }
    }
    async deleteActor(id) {
        try {
            const actor = await actorModel.destroy({ where: { id: id } });
            const result = await actorModel.findAll();
            return result;
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = new actorData();

