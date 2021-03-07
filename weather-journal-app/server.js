// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port = 3000;
const server = app.listen(port, listening);
function listening() {
    console.log(`server started on port: ${port}`);
};


// set the server routes to handle data exchange requests (GET, and POST)
app.get('/getWeather', getWeather);

function getWeather(req, res) {
    //console.log("Sending projectData in body:" + JSON.stringify(projectData));
    res.send(projectData);
}

app.post('/setWeather', setWeather);

function setWeather(req, res) {
    projectData.temperature = req.body.temperature;
    projectData.date = req.body.date;
    projectData.city = req.body.city;
    projectData.userResponse = req.body.userResponse;
    //console.log("Current projectData after posting:" + JSON.stringify(projectData));
}