myApp.directive('displayMap', function() {
	return {
		scope: {
			geoZones: '=data'		
		},
		controller: function($scope, $compile, $http) {
			$scope.init = function() {
				console.log("init()");

				$scope.circleItems = [];
				$scope.selectedCircles = [];
				
				var mapOptions = {
					zoom: 7,
					center: new google.maps.LatLng(47.00016, 8.01427),
					streetViewControl: false,
					scrollwheel: false
				};

				$scope.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

				hasCircle = false;
				for(geoZoneId in $scope.geoZones) {
					$scope.addExistingCircle($scope.geoZones[geoZoneId]);
					hasCircle=true;
				}
				if(hasCircle) {
					$scope.changeSelection(0, false);
				}
			}
			
			$scope.addExistingCircle = function(geoZone, isNew) {
				console.log("addExistingCircle()");

				pos = new google.maps.LatLng(geoZone.center.latitude, geoZone.center.longitude);

				circle = new google.maps.Circle({
					center: pos,
					radius: geoZone.radius,
					map: $scope.map
				});
				google.maps.event.addListener(circle, 'dragend', $scope.move);
				google.maps.event.addListener(circle, 'radius_changed', $scope.move);
				google.maps.event.addListener(circle, 'click', $scope.click);

				console.log($scope.circleItems);
				$scope.circleItems.push(circle);

				if(isNew) {
					$scope.geoZones.push(geoZone);
				}

				$scope.changeSelection($scope.geoZones.lenght - 1, false);
			}

			$scope.addCircle = function() {
				console.log("addCircle()");

				bound = $scope.map.getBounds();
				ne = bound.getNorthEast();
				sw = bound.getSouthWest();
				x1 = Math.abs(ne.lat()-sw.lat());
				y1 = Math.abs(ne.lng()-sw.lng());
				v1 = Math.min(x1, y1);

				radius = v1 * 30000;

				geo = {};
				geo.center = {};
				geo.center.latitude = $scope.map.center.lat();
				geo.center.longitude = $scope.map.center.lng();
				geo.radius = radius;

				$scope.addExistingCircle(geo, true);


				idSelected = 0;
				for(i in $scope.geoZones)
					idSelected = i;
				console.log("test : " + i);
					//$scope.changeSelection(i, false);
				}
				
				$scope.move= function (event) {
					console.log("move()");
					for(circleId in $scope.circleItems) {
						if($scope.circleItems[circleId] == this) {
							pos = this.center;
							radius = this.radius;
							$scope.$apply(function(){
								$scope.geoZones[circleId].center.latitude = pos.lat();
								$scope.geoZones[circleId].center.longitude = pos.lng();
								$scope.geoZones[circleId].radius = radius;
							});
							break;
						}
					}
				}

				$scope.click= function (event) {
					console.log("click()");
					for(circleId in $scope.circleItems) {
						if($scope.circleItems[circleId] == this) {
							$scope.$apply(function(){
								$scope.changeSelection(circleId, false);
							});
							break;
						}
					}
				}

				$scope.processPrice= function (val) {
					var p = Math.sqrt(val) / 10;
					var q = Math.round((p)/0.05, 0)*0.05;
					return q;
				}

				$scope.km= function (val) {
					return val / 1000;
				}

				$scope.km2= function (val) {
					return $scope.km(val) * $scope.km(val) * $scope.PI ;
				}
				$scope.oneMore= function (val) {
					return parseInt(val) + 1; 
				}

				$scope.removePoint = function (id) {
					console.log("removePoint");
					console.log(id);

					$scope.circleItems[id].setMap(null);
					$scope.circleItems.splice(id,1);
					$scope.selectedCircles.splice(id,1);
					$scope.geoZones.splice(id,1);
				}

				$scope.selectedCircleOption = {
					strokeColor:"#228b22",
					strokeOpacity:0.8,
					fillColor:"#228b22",
					fillOpacity:0.6
				}
				$scope.unselectedCircleOption = {
					strokeColor:"#228b22",
					strokeOpacity:0.8,
					fillColor: "228b22",
					fillOpacity: 0.3
				}
				$scope.changeSelection = function (id, center) {


					for(circleId in $scope.circleItems) {
						$scope.selectedCircles[circleId] = false;
						$scope.circleItems[circleId].setEditable(false);
						$scope.circleItems[circleId].setDraggable(false);
						$scope.circleItems[circleId].setOptions($scope.unselectedCircleOption);
					}
					console.log("===");
					console.log(id);
					console.log($scope.circleItems);
					console.log("===");
					if($scope.circleItems[id]!=null) {

						$scope.selectedCircles[id] = true;
						console.log($scope.circleItems[id]);
						$scope.circleItems[id].setEditable(true);
						$scope.circleItems[id].setDraggable(true);
						$scope.circleItems[id].setOptions($scope.selectedCircleOption);

						if(center) {
							$scope.map.setCenter($scope.circleItems[id].getCenter());
						}
					}
				}
				$scope.totalAmount = function (id) {
					amount = 0;

					for(circleId in $scope.geoZones) {
						amount += $scope.processPrice($scope.geoZones[circleId].radius);
					}
					
					return amount;
				}
			},
			templateUrl: 'component/map.html' 
		};
	});