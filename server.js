/**
 * server
 */
var express = require('express');
var app = express();
var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
})
var bodyParser = require('body-parser');

// app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({ extended: true }));

/**
 * db
 */
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

// Set some defaults (required if your JSON file is empty)
// db.defaults({ posts: [], user: {}, count: 0 })
//     .write()

// Add a post
// db.get('posts')
//     .push({ id: 1, title: 'lowdb is awesome'})
//     .write()


app.get('/',function(req,res){
    var data = db.get('posts').value()
    // console.log(data)
    res.render('index.ejs', { data:data })
});

app.post('/searchResult',function(req,res){

    var searchOptions = req.body.searchOptions;
    var searchText = req.body.searchText;

    // console.log('searchOptions')
    // console.log(searchOptions)
    // console.log('searchText')
    // console.log(searchText)

    var data = db.get('posts').value();
    var result = []

    if(searchOptions == 'contains'){
        for(var i=0;i<data.length;i++){
            console.log(data[i].keyword)
            console.log(data[i].keyword.indexOf(searchText))
            if(data[i].keyword.indexOf(searchText) !== -1){
                result.push(data[i])
            }
        }
    }else if(searchOptions == 'startsWith'){
        for(var i=0;i<data.length;i++){
            if(data[i].keyword.indexOf(searchText) === 0){
                result.push(data[i])
            }
        }
    }

    console.log(result)
    res.render('searchResult.ejs', { data:result, searchOptions:searchOptions, searchText:searchText })
});
