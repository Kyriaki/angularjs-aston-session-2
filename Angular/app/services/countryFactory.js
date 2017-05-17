angular.module("testApp")
	.factory('countryFactory', function($http){
		var factory = {};

		factory.getAll = function(){
			return $http.get('http://localhost:4000/countries');
		};

		return factory;
	});