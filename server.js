// Module requirement for Express
const express = require('express');



// Express assigned to app variable
const app = express();

// Variable assigned to PORT for server
const PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));

// Route to reach HTMLs & APIs
require('./routes/routesAPI.js')(app);
require('./routes/routesHTML.js')(app);


//  Added listener for assigned PORT for server
app.listen(PORT, () => {
    console.log("App running on PORT " + PORT);
});
