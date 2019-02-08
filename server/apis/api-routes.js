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

// API routes
router.route("/products").get(productController.index);

// Export API routes
module.exports = router;
