angular.module("carsApp")
	.factory('carFactory',function($http){
		var factory = {};

		var cars = null;

		factory.getAll = function(){
			return $http.get('http://localhost:4000/cars');
		};

		factory.set = function(data){
			cars = data;
		}

		factory.isDataLoaded = function (){
			if(cars === null) return false;
			else return true;
		};

		factory.getById = function(id){
			var car = null;

			for(var i=0; i<cars.length; i++){
				if (cars[i].id === id) return cars[i];
				}
				return car;
		};

		return factory;
	});
