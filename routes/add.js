var express = require('express');
var router = express.Router();

// db
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

// fs
var fs = require('fs');
// ejs
var ejs = require('ejs');

// router.get('/',function(req, res){
//     console.log("GET")
//     var data = db.get('posts').value()
//     res.render('index.ejs', { data:data })
// });

router.post('/',function(req,res){
    console.log("add POST")

    var keywordEng = req.body.keywordEng;
    var keywordKor = req.body.keywordKor;
    var author = req.body.author;
    var date = new Date().toISOString().slice(0,10);

    console.log("keywordEng : " + keywordEng)
    console.log("keywordKor : " + keywordKor)
    console.log("author : " + author)
    console.log("date : " + date)

    // data 저장하기
    db.get('posts')
        .push({
            keywordEng: keywordEng,
            keywordKor: keywordKor,
            author: author,
            date: date,
        })
        .write()

    // data 불러오기
    var data = db.get('posts').value();

    // html str 만들기
    // 1. file read
    var html_str = fs.readFileSync('views/list.ejs', 'utf-8');

    // 2. compile
    var template = ejs.compile(html_str);
    var html = template({ data:data })
    // console.log(html);
    res.json({ data:html, count:data.length })
});


module.exports = router;
