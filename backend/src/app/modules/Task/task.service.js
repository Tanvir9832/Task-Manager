const httpStatus = require("http-status");
const ApiError = require("../../../error/apiError");
const repository = require("../../repository/repository");
const Task = require("./task.model");

const createTask = async (data, id) => {
  try {
    if (data.title.trim().length === 0)
      throw new ApiError(httpStatus.BAD_REQUEST, "Title is missing");

    if (data.description.trim().length === 0)
      throw new ApiError(httpStatus.BAD_REQUEST, "Description is missing");

    const result = await repository.create(Task, { ...data, owner: id });
    return result;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      error.message || "Internal Server Error"
    );
  }
};

const getAllTask = async (page, title, userId) => {
  try {
    const data = await repository.getAll(
      Task,
      { title: { $regex: title.trim(), $options: "i" }, owner: userId },
      [],
      "",
      page,
      { createdAt: -1 }
    );
    return data;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      error.message || "Internal Server Error"
    );
  }
};

const updateTask = async (data, taskId, userId) => {
  try {
    const task = await repository.getOneById(Task, taskId);

    if (task.owner.toString() !== userId.toString())
      throw new ApiError(httpStatus.BAD_REQUEST, "Invalid post");

    const updates = {
      title: data.title,
      description: data.description,
    };

    for (key in updates) {
      if (updates[key] === undefined || updates[key].trim().length === 0) {
        delete updates[key];
      }
    }

    Object.assign(task, updates);
    await task.save();
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      error.message | "Internal Server Error"
    );
  }
};

const deleteTask = async (taskId, userId) => {
  try {
    const task = await repository.getOneById(Task, taskId);

    if (task.owner.toString() !== userId.toString())
      throw new ApiError(httpStatus.BAD_REQUEST, "Invalid post");

    const data = await Task.findByIdAndDelete(taskId);
    if (data) return true;
    return false;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      error.message || "Internal Server Error"
    );
  }
};

const getTask = async (taskId, userId) => {
  try {
    const task = await repository.getOneById(Task, taskId);

    if (!task) throw new ApiError(httpStatus.BAD_REQUEST, "Invalid post");

    if (task.owner.toString() !== userId.toString())
      throw new ApiError(httpStatus.BAD_REQUEST, "Invalid post");
    return task;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      error.message || "Internal Server Error"
    );
  }
};

const updateStatus = async (taskId, userId) => {
  try {
    const task = await repository.getOneById(Task,taskId)
    if (!task)
      throw new ApiError(httpStatus.BAD_REQUEST, error.message | "invalid post");

    if(task.owner.toString()!==userId.toString())
        throw new ApiError(httpStatus.BAD_REQUEST, error.message | "invalid post");

    task.status = !task.status;
    await task.save();
    return task.status;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      error.message | "Internal Server Error"
    );
  }
};

module.exports = {
  createTask,
  getAllTask,
  updateTask,
  deleteTask,
  getTask,
  updateStatus,
};
