module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');

    app.post('/notes', notes.create);
    app.get('/notes', notes.getAll);
    app.get('/notes/:id', notes.getSingle);
    app.put('/notes/:id', notes.update);
    app.delete('/notes/:id', notes.delete);
}