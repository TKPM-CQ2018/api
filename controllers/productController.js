const product = require("../models/product.model");
const staffModel = require("../models/staff.model");
exports.detail = async(req, res, next) => {
    listProduct = await product.getAllProduct();
    console.log(listProduct);
    listStaff = await staffModel.getAllStaff()
    console.log(listStaff)
    res.send(listProduct);
};