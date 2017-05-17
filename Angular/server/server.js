var http = require('http');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var clients = [
			{name : 'sanchez olvéra', firstname:'Roberto', age:29, country:'Spain', img:['snow.jpg', 'papikahello.png']},
			{name : 'kartoffeln', firstname:'Hanz', age:17, country:'Germany', img:['uzuki.jpg', 'uzuki2.jpg']}, 
			{name : 'mcSwag', firstname:'David', age:42, country:'England', img:['riko.jpg', 'v.jpg']},
			{name : 'dupré', firstname:'Jacques', age:70, country:'France', img:['ifshrug.jpg', 'unspecified.png']},
			{name : 'gam', firstname:'Clem', age:20, country:'France', img:['pouceenhaut.jpg','shrug.jpg']}
			];

var countries = ['France', 'England', 'Spain', 'Germany'];

app.get('/test', function(req, res){
	res.send("Merci mon chien");
});

app.get('/clients', function(req, res){
	res.json(clients);
});

app.post('/clients', function(req, res){
	clients.push(req.body);
	res.sendStatus(200);
});

app.get('/countries', function(req, res){
	res.json(countries);
});

app.get('/clients/:name', function(req, res){
	var name = req.params.name;
	for(var i = 0; i< clients.length; i++){
		if(clients[i].name === name) res.json(clients[i]);
	}
});


app.listen(4000, function(){
	console.log("Serveur écoute port 4000...");
});