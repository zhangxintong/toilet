var express = require("express");
var app = express();

app.use(express.static("public")).listen(4000);