angular.module('testApp')
	.directive("lorem", function(){

		return{
			restrict: 'AE',
			// template: "Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipisicing elit. Odit cum placeat nisi debitis, nihil minus blanditiis ut culpa impedit, magni, quia delectus explicabo libero alias itaque velit, optio molestiae esse."
			templateUrl : "app/directives/templates/lorem.html"
		}
	})