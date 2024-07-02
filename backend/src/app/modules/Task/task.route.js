const express = require("express");
const taskController = require("./task.controller");
const auth = require("../../middleware/authentication");

const taskRouter = express.Router();

taskRouter.route("/create-task").post(auth.authCheckUser ,taskController.createTask);
// taskRouter.route("/get-task/:id").post(auth.authCheckUser ,taskController.getTask);
// taskRouter.route("/update-task/:id").put(auth.authCheckUser, taskController.updateTask);
// taskRouter.route("/delete-task/:id").delete(auth.authCheckUser, taskController.deleteTask);
// taskRouter.route("/get-all-tasks").get(auth.authCheckUser, taskController.getAllTask);

module.exports = taskRouter;