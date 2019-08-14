// const express = require('express');
// const router = express.Router();
// const low = require('lowdb')
// const FileSync = require('lowdb/adapters/FileSync')
// const adapter = new FileSync('/db.json')
// const db = low(adapter)
// // fs
// var fs = require('fs');
// // ejs
// var ejs = require('ejs');
//
// router.post('/getItems',function(req,res){
//
//     console.log(getItems)
//
//     var searchOptions = req.body.searchOptions;
//     var searchText = req.body.searchText;
//     //
//     console.log(searchOptions)
//     console.log(searchText)
//     //
//     // // data 불러오기
//     // var data = db.get('posts').value();
//     // var result = []
//     //
//     // // data 가공
//     // if(searchOptions == 'contains'){
//     //     for(var i=0;i<data.length;i++){
//     //         console.log(data[i].keyword)
//     //         console.log(data[i].keyword.indexOf(searchText))
//     //         if(data[i].keyword.indexOf(searchText) !== -1){
//     //             result.push(data[i])
//     //         }
//     //     }
//     // }else if(searchOptions == 'startsWith'){
//     //     for(var i=0;i<data.length;i++){
//     //         if(data[i].keyword.indexOf(searchText) === 0){
//     //             result.push(data[i])
//     //         }
//     //     }
//     // }
//     //
//     // // html str 만들기
//     // // 1. file read
//     // var html_str = fs.readFileSync(__dirname + '/list.ejs', 'utf-8');
//     // console.log(html_str)
//     //
//     // // 2. compile
//     // var template = ejs.compile(html_str);
//     // console.log(template({ data:result }));
//     //
//     // // 전달
//     // // header 설정
//     // res.writeHead(200,{'Content-Type':'text/html'});
//     // res.end(template({ data:result }), 'utf-8'); // 브라우저로 전송
//
//     // console.log(result)
//     // res.json({ data:result })
//     // res.render('searchResult.ejs', { data:result, searchOptions:searchOptions, searchText:searchText })
// });
