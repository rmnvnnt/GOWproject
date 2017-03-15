var express = require("express");
var app = express();

app.use(express.static("static"));

app.get("/hello",function(req,res){
  res.send("Hello World");
});

app.listen(5678,function(err){
  console.log("Application started on port 5678.")
});
