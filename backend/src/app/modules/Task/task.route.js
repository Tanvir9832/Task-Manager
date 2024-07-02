const express = require("express");
const taskController = require("./task.controller");
const auth = require("../../middlewares/auth");

const missionRouter = express.Router();

missionRouter.route("/create-mission").post(auth.authCheckAdmin ,taskController.createMission);
missionRouter.route("/update-mission/:id").put(auth.authCheckAdmin, taskController.updateMission);
missionRouter.route("/delete-mission/:id").delete(auth.authCheckAdmin, taskController.deleteMission);
missionRouter.route("/get-all-missions").get(auth.authCheckAdmin, taskController.getAllMission);
missionRouter.route("/get-all-missions/user").get(auth.authCheckUser, taskController.getAllMission);
module.exports = missionRouter;