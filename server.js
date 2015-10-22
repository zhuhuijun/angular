/**
 * Created by Administrator on 15-10-20.
 */
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');//cookie--req.cookies
var bodyParser = require('body-parser');//Form--req.body
var app = express();
app.use(bodyParser.json());//请求的数据类型是json/content-type:application/json
app.use(bodyParser.urlencoded({ extended: false }));//解析form数据
app.use(cookieParser());
//静态文件服务
app.use(express.static(path.join(__dirname, 'app', 'public')));
app.post('/user', function (req, res) {
    var uu = req.body;
    console.log(uu);
    res.json(uu);
});
app.post('/check', function (req, res) {
    var uu = req.body;
    var t = Math.floor(Math.random() * 100 / 2);
    console.log(t);
    var re = {exists: t > 30};
    res.json(re);
});
app.listen(8080);