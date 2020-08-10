"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/home', function (req, res) {
    res.send('Home');
});
app.listen(port, function () {
    console.log("App listening on port: " + port);
});
