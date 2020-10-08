// Module requirement for Express
const express = require('express');

// Express assigned to app variable
const app = express();

// Variable assigned to PORT for server
const PORT = 3000;

// Route to reach HTMLs & APIs
require('./routes/routesHTML.js');
require('./routes/routesAPI.js');


//  Added listener for assigned PORT for server
app.listen(PORT, () => {
    console.log("App running on PORT " + PORT);
});
