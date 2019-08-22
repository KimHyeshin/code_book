/**
 * server
 */
var express = require('express');
var app = express();
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
})

// db
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

// fs
var fs = require('fs');
// ejs
var ejs = require('ejs');

// parser
app.use(express.json());
app.use(express.urlencoded( {extended : true } ));


// template engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// route
var indexRoute = require('./routes/index');
var addRoute = require('./routes/add');
var deleteRoute = require('./routes/delete');
var modifyRoute = require('./routes/modify');
app.use('/', indexRoute);
app.use('/add', addRoute);
app.use('/delete', deleteRoute);
app.use('/modify', modifyRoute);

