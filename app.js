const express = require('express');
const bodyParser = require('body-parser');

var app = express();

var PORT = process.env.PORT || 5000;
//Body Parser init
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));

//View Engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))

//Routes setup
const newsRouter = require('./src/routes/news');
app.use('/', newsRouter);
app.use('/article', newsRouter);

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));

module.exports = {app};
