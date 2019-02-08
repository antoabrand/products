// Imports
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

const HOST_URL = 'localhost:27017';
const DB_NAME = 'heb';
const port = process.env.PORT || 8080;

// Initialize the app
let app = express();
let apiRoutes = require("./apis/api-routes")


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose.connect(`mongodb://${HOST_URL}/${DB_NAME}`);
var db = mongoose.connection;

//default route
app.get('/', (req, res) => res.send('Hello HEB Challenge'));
// Use Api routes in the App
app.use('/api', apiRoutes)
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running HEB express app on port " + port);
});