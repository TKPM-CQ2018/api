const productModel = require("../models/productModel");
const product = require("../model/product.model")
exports.detail = async(req, res, next) => {
    listProduct = await product.getAllProduct();
    console.log(listProduct)
    res.send(listProduct);
};