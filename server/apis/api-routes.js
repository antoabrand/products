// Import and intialize express router
let router = require("express").Router();

// Set default API response
router.get("/", function(req, res) {
    res.json({
        status: "API Its Working",
        message: "Welcome to HEB's coding challenge!"
    });
});

// Import product controller
var productController = require("../controllers/productController");

// API route /products gets routed to the productController func 
router.route("/products").get(productController.getAllProducts);

// Export API routes
module.exports = router;
