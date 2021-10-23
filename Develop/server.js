
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3004;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

app.use(express.json());

app.use('/api',apiRoutes);
app.use('/',htmlRoutes);

app.listen(PORT, () => {
    console.log(`Taking and saving notes on port ${PORT} since 2021.`);
});