/**
 * server
 */
const express = require('express');
const app = express();
let server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

// db
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

// fs
const fs = require('fs');
// ejs
const ejs = require('ejs');

// parser
app.use(express.json());
app.use(express.urlencoded( {extended : true } ));


// template engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// route
const indexRoute = require('./routes/index');
const addRoute = require('./routes/add');
const deleteRoute = require('./routes/delete');
const modifyRoute = require('./routes/modify');
app.use('/', indexRoute);
app.use('/add', addRoute);
app.use('/delete', deleteRoute);
app.use('/modify', modifyRoute);

