angular.module("carsApp", ["ngRoute"]);

angular.module("carsApp").config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'views/cars.html',
		})
		.when('/cars',{
			templateUrl: 'views/clients.html',
		})
		.when('/cars/:id',{
			templateUrl: 'views/details.html',
			controller: "carController"
		})
		.when('/404',{
			templateUrl: 'views/404.html',
		})
		.otherwise({redirectTo:'/404'});
});

angular.module("carsApp")
	.controller('mainController', function($http, $scope, carFactory){
		
		var cbFailure = function(res) {
			console.log("ERREUR " + res.status);
		};

		carFactory.getAll().then(function(res){
			$scope.cars = res.data;
			carFactory.set(res.data);
		}, cbFailure);

	})
	.controller("carController", function($scope, $routeParams, carFactory){

		if (carFactory.isDataLoaded()) {
			displayCar();
		}
		else{
			carFactory.getAll().then(function(cars){
				carFactory.set(cars.data);
				displayCar();
			});
		}

		function displayCar(){
			$scope.car = carFactory.getById($routeParams.id);
		};
			
	});