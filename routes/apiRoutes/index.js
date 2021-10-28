
const router = require('express').Router();
const notesApi = require('./notes');

router.use(notesApi);

module.exports = router;