const staffModel = require("../models/staffModel");

exports.detail = (req, res, next) => {
  res.send(staffModel.list());
};
