/**
 * server
 */
var express = require('express');
var app = express();

/**
 * router
 */
app.use('/', require('./routes/index'));
app.use('/list', require('./routes/index'));

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
})
var bodyParser = require('body-parser');

// app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: true }));
