const httpStatus = require("http-status");
const ApiError = require("../../../error/apiError");
const repository = require("../../repository/repository");
const Task = require("./task.model");

const createTask = async (data, id) => {
  try {
    if (data.title.trim().length === 0)
      throw new ApiError(httpStatus.BAD_REQUEST,"Title is missing");

    if (data.description.trim().length === 0)
      throw new ApiError(httpStatus.BAD_REQUEST,"Description is missing");

    const result = await repository.create(Task, { ...data, owner: id });
    return result;
  } catch (error) {
    throw new ApiError(
        httpStatus.INTERNAL_SERVER_ERROR, error.message || "Internal Server Error"
      );
  }
};

const getAllTask = async (page, title) => {
  try {
    const result = await repository.getAll(
      Task,
      { title: { $regex: title.trim(), $options: "i" } },
      [],
      "",
      page,
      { createdAt: -1 }
    );

    const total = await Task.countDocuments();
    return { result, total };
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      error.message | "Internal Server Error"
    );
  }
};

const updateTask = async (data, id) => {
  try {
    const Task = await repository.getOneById(Task, id);
    const updates = {
      title: data.title,
      description: data.description,
    };

    for (key in updates) {
      if (updates[key] === undefined || updates[key].trim().length === 0) {
        delete updates[key];
      }
    }

    Object.assign(Task, updates);
    await Task.save();
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      error.message | "Internal Server Error"
    );
  }
};

const deleteTask = async (id) => {
  try {
    const data = await Task.findByIdAndDelete(id);
    return true;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      error.message | "Internal Server Error"
    );
  }
};

const getTask = async (id) => {
  try {
    const data = await Task.getOneById(id);
    if (!data)
      throw new ApiError(httpStatus.BAD_REQUEST, error.message | "false post");
    return data;
  } catch (error) {
    throw new ApiError(
      httpStatus.INTERNAL_SERVER_ERROR,
      error.message | "Internal Server Error"
    );
  }
};

const updateStatus = async (id) => {
  try {
    const data = await Task.getOneById(id);
    if (!data)
      throw new ApiError(httpStatus.BAD_REQUEST, error.message | "false post");
    if (data.status === "incomplete") data.status = "completed";
    else data.status = "incomplete";
    await data.save();
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
