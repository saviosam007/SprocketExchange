/**
 * Created by SavioJoseph on 8/23/2016.
 */
var express = require("express");
var app     = express();
var path    = require("path");
var bodyParser=require('body-parser');
var mongojs=require('mongojs');
var db=mongojs('sprocketdetail',['detail','history']);
app.use(express.static(__dirname + '/app'));
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

//Get request to get the sprocket current value
app.get('/sprocketValue', function (req,res) {
   var randomSprocket=Math.floor((Math.random() * 100) + 1);
    console.log(randomSprocket);
    res.send({currentValue:randomSprocket});
});

app.get('/sprocketdetail',function(req,res){
   db.detail.find(function (err,docs) {
       res.send(JSON.stringify(docs));
   })
});

app.post('/sprocketHistory',function(req,res){
    db.history.insert(req.body,function(err,docs){
        res.json(docs);
    });
});
//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    res.sendFile(path.join(__dirname+'/index.html'));
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
console.log("Running on Port 5000");