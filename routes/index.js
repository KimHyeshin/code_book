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

router.get('/',function(req, res){
    console.log("GET")
    var data = db.get('posts').sortBy('keywordEng').value()
    res.render('index.ejs', { data:data })
});

router.post('/',function(req,res){
    console.log("POST")

    var searchOptions = req.body.searchOptions;
    var searchText = req.body.searchText;
    console.log("searchOptions : " + searchOptions)
    console.log("searchText : " + searchText)

    var regExpEng = /[a-zA-Z]/;
    // var regExpKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    var key = '';
    if(regExpEng.test(searchText)){
        key = 'keywordEng'
    }else{
        key = 'keywordKor'
    }

    // data 불러오기
    var data = db.get('posts').sortBy('keywordEng').value();
    var result = []

    // data 가공
    if(searchOptions == 'contains'){
        for(var i=0;i<data.length;i++){
            console.log(data[i][key])
            console.log(data[i][key].indexOf(searchText))
            if(data[i][key].indexOf(searchText) !== -1){
                result.push(data[i])
            }
        }
    }else if(searchOptions == 'startsWith'){
        for(var i=0;i<data.length;i++){
            if(data[i][key].indexOf(searchText) === 0){
                result.push(data[i])
            }
        }
    }

    // html str 만들기
    // 1. file read
    var html_str = fs.readFileSync('views/list.ejs', 'utf-8');

    // 2. compile
    var template = ejs.compile(html_str);
    var html = template({ data:result })
    // console.log(html);
    res.json({ data:html, count:result.length })
});


module.exports = router;
