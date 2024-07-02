const getOne = async (Model, matchQuery = {}, populate = [], select = "") => {
  try {
    return await Model.findOne(matchQuery).populate(populate).select(select);
  } catch (error) {
    console.log(error.message);
  }
};

const getOneById = async (Model, id, populate = [], select = "") => {
  try {
    return await Model.findById(id).populate(populate).select(select);
  } catch (error) {
    console.log(error);
  }
};

const getAll = async (
  Model,
  matchQuery = {},
  populate = [] || {},
  select = "",
  page = 1,
  sort = {},
  limit = 10
) => {
  try {
    const skip = (page - 1) * limit;
    return await Model.find(matchQuery)
      .sort(sort)
      .skip(skip)
      .populate(populate)
      .select(select)
      .limit(limit);
  } catch (error) {
    console.log(error);
  }
};

const deleteById = async (Model, id) => {
  try {
    return await Model.findByIdAndDelete(id);
  } catch (error) {
    console.log(deleteById);
  }
};

const create = async (Model, data) => {
  try {
    return await Model.create(data);
  } catch (error) {
    console.log(error);
  }
};

const deleteOne = async (Model, data) => {
  try {
    return await Model.deleteOne(data);
  } catch (error) {
    return res.status(500).json({
      message: "deleteOne query failed",
    });
  }
};

module.exports = {
  getAll,
  getOne,
  getOneById,
  deleteOne,
  create,
};
