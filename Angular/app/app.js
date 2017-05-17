// main module
angular.module("testApp", ["ngRoute"]);

angular.module("testApp").config(function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'views/clients.html',
		})
		.when('/test',{
			templateUrl: 'views/test.html',
			controller : 'testController'
		})
		.when('/clients',{
			templateUrl: 'views/clients.html',
		})
		.when('/clients/:name',{
			templateUrl: 'views/details.html',
			controller: 'clientController'
		})
		.when('/404',{
			templateUrl: 'views/404.html',
		})
		.otherwise({redirectTo:'/404'});
});
//one controller
angular.module("testApp")
	.controller("mainController", function($http, $scope, clientFactory, countryFactory){
			
		// $http.get("http://localhost:4000/clients")
		// 	.then(function(clients){
		// 		$scope.clients = clients.data
		// 	});

		var cbFailure = function(res) {
			console.log("ERREUR " + res.status);
		};

		$scope.titre = "Formation Angular";
		clientFactory.getAll().then(function(clients){
			$scope.clients = clients.data;
			clientFactory.set(clients.data);
		}, cbFailure);

		countryFactory.getAll().then(function(res){
			$scope.countries = res.data;
		}, cbFailure);
		

		$scope.reset = function(){
			$scope.text='';
		}
		$scope.hide = true;
		$scope.isVisible = false;
		$scope.btnClass = "class1";

		$scope.switch = function(){
			($scope.btnClass == "class1")?$scope.btnClass = "class2":$scope.btnClass = "class1";
		}

		$scope.criterium = "name";
		$scope.reverse = false;

		$scope.changeOrder = function(criterium){
			if ($scope.criterium == criterium) $scope.reverse = !$scope.reverse;
			else $scope.criterium = criterium;
		}

		$scope.client = {name: "", firstname:"", age:"", country:"France", img:['uzuki.jpg', 'uzuki2.jpg']};
		$scope.error = false;

		$scope.isOneFieldEmpty = function(obj, excludedKeys){
			for(var key in obj){
				for(var key2 in excludedKeys){
					if (key != excludedKeys[key2]){
						if (obj[key] === "") return true;	
					}
				}
			}
			return false;
		}


		$scope.registerCustomer = function(){
					
			if ($scope.isOneFieldEmpty($scope.client, ["country"])) $scope.error = true;
			else{
				clientFactory.insert($scope.client).then(function(res){
					$scope.clients.push($scope.client);
					$scope.client = {name: "", firstname:"", age:"", country:"France", img:['uzuki.jpg', 'uzuki2.jpg']};		
				}, cbFailure);
			}
		}

		$scope.deleteCustomer = function(name){
			for (var i = 0; i < $scope.clients.length; i++) {
					if ($scope.clients[i].name === name) {
						$scope.clients.splice(i,1);
					}
				}	
		}
	})
	.controller("menuController", function($scope){
		$scope.menus = [
			{label:"Accueil", url:"index.html"},
			{label:"Clients", url:"#/clients"},
			{label:"Aide", url:"aide.html"},
			{label:"Test", url:"#/test"}
		];
	})
	.controller("clientController", function($scope, $routeParams, $interval, clientFactory, testService){

		if (clientFactory.isDataLoaded()) {
			displayCustomer();
		}
		else{
			clientFactory.getAll().then(function(clients){
				clientFactory.set(clients.data);
				displayCustomer();
			});
		}

		function displayCustomer(){
			$scope.client = clientFactory.getByName($routeParams.name);
			clientFactory.getAll().then(function(clients){
				$scope.clients = clients.data;
			});
			var i = 0;
			$scope.displayImg = function(img){
				return $scope.client.img[i];
			}
			$interval(function(){
				i++;
				if(i>1) i=0;
			}, 2000);
				
		}
 
		

		console.log(testService.getPlayers());

	});
