angular.module('testApp')
	.service('testService', function(){
		this.players = ['Pogba', 'Lloris', 'Evra'];
		this.getPlayers = function(){
			return this.players; 
		}
	});