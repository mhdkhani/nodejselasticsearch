const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const expressEjsLayout = require('express-ejs-layouts');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use('/js', express.static(path.join(__dirname, 'assets/js')))
app.use('/css', express.static(path.join(__dirname, 'assets/css')))
app.use(expressEjsLayout);
app.use('/',require('./routes/index'));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
