angular.module("testApp")
	.factory('clientFactory', function($http){
		
		var factory = {};
		
		// factory.clients = [
		// 	{name : 'sanchez olvéra', firstname:'Roberto', age:29, country:'Spain', img:['snow.jpg', 'papikahello.png']},
		// 	{name : 'kartoffeln', firstname:'Hanz', age:17, country:'Germany', img:['uzuki.jpg', 'uzuki2.jpg']}, 
		// 	{name : 'mcSwag', firstname:'David', age:42, country:'England', img:['riko.jpg', 'v.jpg']},
		// 	{name : 'dupré', firstname:'Jacques', age:70, country:'France', img:['ifshrug.jpg', 'unspecified.png']},
		// 	{name : 'gam', firstname:'Clem', age:20, country:'France', img:['pouceenhaut.jpg','shrug.jpg']}
		// 	];

		// var clients = null;

		// $http.get("http://localhost:4000/clients")
		// 	.then(function(clients){
		// 		clients = clients.data
		// 	});

		var clients = null;

		factory.isDataLoaded = function (){
			if(clients === null) return false;
			else return true;
		}

		factory.set = function(data){
			clients = data;
		}

		factory.getAll = function(){
			return $http.get("http://localhost:4000/clients/");
		}

		factory.insert = function(client){
			return $http.post("http://localhost:4000/clients", client);
		}

		factory.getByName = function(name){
			var client = null;

			for(var i=0; i<clients.length; i++){
				if (clients[i].name === name) return clients[i];
				}
				return client;
		}

			

		return factory;
	});