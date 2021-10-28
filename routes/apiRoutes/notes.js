
const router = require('express').Router();
const path = require('path');
const fs = require('fs');
var noteArray = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req,res) => {
    res.json(noteArray);
});

router.post('/notes', (req,res) => {
    if(req.body) {
        const nextNote = req.body;
        nextNote.id = uuidv4();
        noteArray.push(nextNote);
        fs.writeFileSync(path.join(__dirname + '../../../db/db.json'), JSON.stringify(noteArray,null,4));
        res.sendFile(path.join(__dirname + '../../../public/notes.html'));
    }
});

router.delete('/notes/:id', (req,res) => {
    console.log(req.params.id);
    let newNotes = [];
    for(let i = 0; i < noteArray.length; i++) {
        if(noteArray[i].id !== req.params.id) {
            newNotes.push(noteArray[i]);
        }
    }
    noteArray = newNotes;
    fs.writeFileSync(path.join(__dirname + '../../../db/db.json'), JSON.stringify(noteArray,null,4));
    res.sendFile(path.join(__dirname + '../../../public/notes.html'));
});

module.exports = router;