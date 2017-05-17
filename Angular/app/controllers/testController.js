angular.module("testApp")
	.controller("testController", function($scope){
		$scope.titre = "Page de testuuuuuuu desu";

		$scope.clients = [
			{name : 'sanchez olvéra', firstname:'Roberto', age:29, country:'Spain', img:['snow.jpg', 'papikahello.png']},
			{name : 'kartoffeln', firstname:'Hanz', age:17, country:'Germany', img:['uzuki.jpg', 'uzuki2.jpg']}, 
			{name : 'mcSwag', firstname:'David', age:42, country:'England', img:['riko.jpg', 'v.jpg']},
			{name : 'dupré', firstname:'Jacques', age:70, country:'France', img:['ifshrug.jpg', 'unspecified.png']},
			{name : 'gam', firstname:'Clem', age:20, country:'France', img:['pouceenhaut.jpg','shrug.jpg']}
			];

	});
