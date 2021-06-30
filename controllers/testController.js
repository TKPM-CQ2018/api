const testModel = require("../models/testmodel");

exports.detail = (req, res, next) => {
  res.send(testModel.list());
};
