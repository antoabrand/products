//imports 
let express = require('express')
let apiRoutes = require('./apis/api-routes');

// Initialize the app
let app = express();

// Use Api routes in the App
app.use('/api', apiRoutes);

// Setup server port
var port = process.env.PORT || 8080;

//default route
app.get('/', (req, res) => res.send('HEB Challenge API server!'));

// Launch app to listen to specified port
app.listen(port, function () {
     console.log("Running HEB-Challenge server on port " + port);
});