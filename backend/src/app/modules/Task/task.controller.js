const catchAsync = require("../../../shared/catchAsync");
const { sendResponseOK } = require("../../../shared/response");
const taskService = require("./task.service");

const createTask = catchAsync(async (req, res) => {
  const result = await taskService.createTask(req.body,req.user._id);
  sendResponseOK(res, "Task created", result);
});

const getAllTask = catchAsync(async (req, res) => {
  let page = parseInt(req.query.page) || 1;
  const result = await taskService.getAllTask(page, req.query.title);
  sendResponseOK(res, "Task get success", result);
});

const updateTask = catchAsync(async (req, res) => {
  const result = await taskService.updateTask(req.body, req.params.id);
  sendResponseOK(res, "Task updated", result);
});

const deleteTask = catchAsync(async (req, res) => {
  const result = await taskService.deleteTask(req.params.id);
  sendResponseOK(res, "Task deleted", result);
});

const getTask = catchAsync(async (req, res) => {
  const result = await taskService.getTask(req.params.id);
  sendResponseOK(res, "Task get", result);
});

const updateStatus = catchAsync(async (req, res) => {
  const result = await taskService.getTask(req.params.id);
  sendResponseOK(res, "Task status updated", result);
});

module.exports = {
  createTask,
  deleteTask,
  getAllTask,
  updateTask,
  getTask,
  updateStatus,
};
