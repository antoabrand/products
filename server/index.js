// got to give props to David Inyang-Etoh for his amazing mongo node express rest tutorial
// https://medium.com/@dinyangetoh/how-to-build-simple-restful-api-with-nodejs-expressjs-and-mongodb-99348012925d

// Imports
let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

const HOST_URL = "localhost:27017";
const DB_NAME = "heb";
const port = process.env.PORT || 8080;

//incase my comp stops working and I need to borrow a laptop that doesn't have mongodb installed -- Keeping credentials in my head for Reasons ;)
//  const mongoCloudConnection =
//     "mongodb://<username>:<pw>@cluster0-shard-00-00-dojwr.mongodb.net:27017,cluster0-shard-00-01-dojwr.mongodb.net:27017,cluster0-shard-00-02-dojwr.mongodb.net:27017/heb?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

// Initialize the app
let app = express();
app.use(cors());

let apiRoutes = require("./apis/api-routes");

// app.use(
//     bodyParser.urlencoded({
//         extended: true
//     })
// );

// for if i want to submit a request body - but for this use case I don't have to
// app.use(bodyParser.json());

//connection string for just in case 
// mongoose.connect(mongoCloudConnection)

// Connect to Mongoose and set connection variable
mongoose.connect(`mongodb://${HOST_URL}/${DB_NAME}`);

var db = mongoose.connection;

// Use Api routes in the App - default route with be prefixed with /api
app.use("/api", apiRoutes);

// Launch app to listen to specified port
app.listen(port, function() {
    console.log("Running HEB express app on port " + port);
});
