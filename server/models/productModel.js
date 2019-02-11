//Imports
var mongoose = require("mongoose");

// Setup schema
var productSchema = mongoose.Schema({
    ID: {
        type: String,
        required: true
    },
    Description: String,
    lastSold: String,
    ShelfLife: String,
    Department: String,
    Price: String,
    Unit: String,
    xFor: String,
    Cost: String
});

// Export Product model
var Products = (module.exports = mongoose.model("product", productSchema));

module.exports.get = function(callback, limit) {
    Products.find(callback);
};