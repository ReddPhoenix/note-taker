// Route to HTML pages
const path = require('path');

module.exports = function(app) {
    // Route to reach index.html
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // Attempting to fix CSS
    // app.get("/notes", (req, res) => {
    //     res.sendFile(path.join(__dirname, "public" ,"./notes.html"));
    // });

    // Route to reach notes.html
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    });

};