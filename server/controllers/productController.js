// Import product model
Product = require("../models/productModel");

// Get all products
exports.index = function(req, res) {
    Product.get(function(err, products) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "Products retrieved successfully",
            data: products
        });
    });
};
