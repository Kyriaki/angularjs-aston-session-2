angular.module('testApp')
	.directive("client", function(){

		var controller = function($scope){
			$scope.isVisible=true;
		}

		return{
			restrict: 'E',
			templateUrl : "app/directives/templates/clientTemplate.html",
			scope: {
				message:'@',
				data:'='	
			},
			link: function(scope, element, attrs){
				scope.displayMessage = function(element){
					console.log(element);
				}
			},
			controller: controller
		};
	});