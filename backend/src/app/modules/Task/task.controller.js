const catchAsync = require("../../../shared/catchAsync");
const { sendResponseOK } = require("../../../shared/response");
const taskService = require("./task.service");

//! Create Task
const createTask = catchAsync(async (req, res) => {
  const data = await taskService.createTask(req.body, req.user._id);
  sendResponseOK(res, "Task created", data);
});

//!Get All Task
const getAllTask = catchAsync(async (req, res) => {
  let page = parseInt(req.query.page) || 1;
  const data = await taskService.getAllTask(
    page,
    req.query.title,
    req.user._id
  );
  sendResponseOK(res, "Task get success", data);
});

//!Update Task
const updateTask = catchAsync(async (req, res) => {
  const data = await taskService.updateTask(
    req.body,
    req.params.id,
    req.user._id
  );
  sendResponseOK(res, "Task updated", data);
});

//!Delete Task
const deleteTask = catchAsync(async (req, res) => {
  const data = await taskService.deleteTask(req.params.id,req.user._id);
  sendResponseOK(res, "Task deleted", data);
});

//!Get Task
const getTask = catchAsync(async (req, res) => {
  const data = await taskService.getTask(req.params.id, req.user._id);
  sendResponseOK(res, "Task get", data);
});

const updateStatus = catchAsync(async (req, res) => {
  const data = await taskService.updateStatus(req.params.id,req.user._id);
  sendResponseOK(res, "Task status updated", data);
});

module.exports = {
  createTask,
  deleteTask,
  getAllTask,
  updateTask,
  getTask,
  updateStatus,
};
