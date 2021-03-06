// Route to APIs
// GET/POST/DELETE

const fs = require('fs');
const db = require('../db/db.json');

module.exports = function(app) {


    // GET
    app.get('/api/notes', (req, res) => {
        res.json(db.map((note, i) => ({ ...note, id: i + '' })));
    });

    

    // POST
    app.post('/api/notes', (req, res) => {
        db.push(req.body);
        fs.writeFileSync('./db/db.json', JSON.stringify(db, null, '\t'));
        res.json(req.body);
    });

    // DELETE
    app.delete('/api/notes/:id', (req, res) => {
        db.splice(req.params.id, 1);
        fs.writeFileSync('./db/db.json', JSON.stringify(db, null, '\t'));
        res.status(200).end();
    });

}

