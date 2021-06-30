const staffModel = require("../models/staff.model");

exports.detail = async(req, res, next) => {
    const listStaff = await staffModel.getAllStaff()
    res.send(listStaff);
};