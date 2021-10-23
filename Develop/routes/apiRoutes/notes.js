
const router = require('express').Router();
const fs = require('fs');
const noteArray = require('../../db/db.json');

router.get('/notes', (req,res) => {
    res.json(noteArray);
});

router.post('/notes', (req,res) => {

});

module.exports = router;