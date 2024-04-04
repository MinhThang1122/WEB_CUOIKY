const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public/pages'));
app.use(express.static('public/stylesheets/css'));
app.use(express.static('public/stylesheets/fonts'));
app.use(express.static('public/stylesheets/js'));
app.use(express.static('public/images'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));