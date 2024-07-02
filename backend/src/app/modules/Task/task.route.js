// const express = require("express");
// const missionController = require("./mission.controller");
// const auth = require("../../middlewares/auth");

// const missionRouter = express.Router();

// missionRouter.route("/create-mission").post(auth.authCheckAdmin ,missionController.createMission);
// missionRouter.route("/update-mission/:id").put(auth.authCheckAdmin, missionController.updateMission);
// missionRouter.route("/delete-mission/:id").delete(auth.authCheckAdmin, missionController.deleteMission);
// missionRouter.route("/get-all-missions").get(auth.authCheckAdmin, missionController.getAllMission);
// missionRouter.route("/get-all-missions/user").get(auth.authCheckUser, missionController.getAllMission);
// module.exports = missionRouter;