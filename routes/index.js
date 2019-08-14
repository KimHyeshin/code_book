const express = require('express');
const router = express.Router();

// db
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('/db.json')
const db = low(adapter)

router.get('/',function(req, res){
    var data = db.get('posts').value()
    console.log(data)
    res.render('index.ejs', { data:data })
});


module.exports = router;
