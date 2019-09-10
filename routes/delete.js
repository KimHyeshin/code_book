const express = require('express');
const router = express.Router();

// db
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

// fs
const fs = require('fs');
// ejs
const ejs = require('ejs');

// router.get('/',function(req, res){
//     console.log("GET")
//     var data = db.get('posts').value()
//     res.render('index.ejs', { data:data })
// });

router.post('/:keywordEng',function(req,res){
    console.log("delete POST");

    let keywordEng = req.params.keywordEng;

    console.log("keywordEng : " + keywordEng);

    // data 삭제하기
    db.get('posts')
        .remove({ keywordEng: keywordEng })
        .write();

    // data 불러오기
    let data = db.get('posts').sortBy('keywordEng').value();

    // html str 만들기
    // 1. file read
    let html_str = fs.readFileSync('views/list.ejs', 'utf-8');

    // 2. compile
    let template = ejs.compile(html_str);
    let html = template({ data:data });
    // console.log(html);
    res.json({ data:html, count:data.length });
});


module.exports = router;
