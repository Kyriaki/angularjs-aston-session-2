angular.module("testApp")
	.filter("capitalize", function(){
		return function(item){
			var str = item.split(" ");
			item = "";
			str.forEach(function(element){
				var firstLetter = element[0].toUpperCase();
				element = firstLetter + element.substr(1) + " ";
				item += element;
			})
			
			return item;
		}
	})
	.filter("ellipse", function(){
		return function(item, nbChars, symbol){
			if(item.length > nbChars){
				return item.substr(0,nbChars) + symbol;
			}
			else{
				return item;
			}
		}

	});