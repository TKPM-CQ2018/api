const staffModel = require("../models/staff.model");

exports.detail = async (req, res, next) => {
  //console.log('hello')
  listStaff = await staffModel.getAllStaff();
  //console.log(listStaff)
  res.send(listStaff);
};
