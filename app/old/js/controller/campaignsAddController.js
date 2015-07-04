myApp.controller('campaignsAddController', ['$scope', '$http', function($scope, $http) {

	$http.get('http://localhost:8080/AdPrgm/rest/campaign/new').success(function(data) {
		$scope.data = data;
	});

	$scope.sendData = function() {
		$http.post('http://localhost:8080/AdPrgm/rest/campaign/new', $scope.data).
		success(function(data, status, headers, config) {
			alert("SUCESS");
		}).
		error(function(data, status, headers, config) {
   			alert("ERROR" + status + data);
		});
	}

}]);