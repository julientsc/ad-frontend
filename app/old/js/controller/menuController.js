myApp.controller('menuController', ['$scope', function($scope) {
 	$scope.data = {
 		title: "Mobile App Ad",
 		link: "#/",
 		items: [
 			{label:"Home", link:"#/"},
 			{label:"Campaigns", link:"#/campaigns"},
 			{label:"Products", link:"#/products"},
 			{label:"Tickets", link:"#/tickets"},
 			{label:"My account", link:"#/account"},
 			{label:"Contact", link:"#/contact"}
 		]
 	};
}]);
