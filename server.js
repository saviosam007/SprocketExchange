/**
 * Created by SavioJoseph on 8/23/2016.
 */
var express = require("express");
var app     = express();
var path    = require("path");

app.use(express.static(__dirname + '/app'));
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(3000);

console.log("Running at Port 3000");