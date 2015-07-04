myApp.controller('campaignsController', ['$scope', function($scope) {
 	$scope.data = {
 		title: "Campaigns",
 		description: "Nam metus felis, mattis at justo sed, tincidunt gravida leo. In dictum lacus eu nulla malesuada congue. Donec commodo arcu id turpis dapibus, a pharetra enim hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In a enim vitae turpis fermentum mattis. Vestibulum sodales volutpat pretium. Nullam euismod lorem eu.",
 		add: "Add new campaign",
 		addLink: "#/campaigns/add",
 		parts: {
	 		"1. Editable Campaigns": {
	 			header:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tempor purus. Quisque viverra tempus pellentesque. Suspendisse sed diam eget libero feugiat lacinia id eu felis. Donec sed convallis sem. In rutrum sapien eu sodales tristique.",
	 			footer:"this is the footer",
	 			content: [
		 			{id:"1", name:"Campaign name 1", dateStart:"01.01.2015", dateStop:"05.02.2015", status:"Validated", editable:true},
		 			{id:"2", name:"Campaign name 2", dateStart:"01.01.2015", dateStop:"05.02.2015", status:"Validated", editable:true},
		 			{id:"3", name:"Campaign name 3", dateStart:"01.01.2015", dateStop:"05.02.2015", status:"Validated", editable:true},
		 			{id:"4", name:"Campaign name 4", dateStart:"01.01.2015", dateStop:"05.02.2015", status:"Validated", editable:true}
	 			]
	 		},
	 		"2. Validated Campaigns": {
	 			header:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tempor purus. Quisque viverra tempus pellentesque. Suspendisse sed diam eget libero feugiat lacinia id eu felis. Donec sed convallis sem. In rutrum sapien eu sodales tristique.",
	 			footer:"this is the footer",
	 			content: [
		 			{id:"1", name:"Campaign name 1", dateStart:"01.01.2015", dateStop:"05.02.2015", status:"Validated", editable:false},
		 			{id:"2", name:"Campaign name 2", dateStart:"01.01.2015", dateStop:"05.02.2015", status:"Validated", editable:false},
		 			{id:"3", name:"Campaign name 3", dateStart:"01.01.2015", dateStop:"05.02.2015", status:"Validated", editable:false},
		 			{id:"4", name:"Campaign name 4", dateStart:"01.01.2015", dateStop:"05.02.2015", status:"Validated", editable:false}
	 			]
	 		},
	 		"3. Previous Campaigns": {
	 			header:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tempor purus. Quisque viverra tempus pellentesque. Suspendisse sed diam eget libero feugiat lacinia id eu felis. Donec sed convallis sem. In rutrum sapien eu sodales tristique.",
	 			footer:"this is the footer",
	 			content: [
		 			{id:"1", name:"Campaign name 1", dateStart:"01.01.2015", dateStop:"05.02.2015", status:"Validated", editable:false},
		 			{id:"2", name:"Campaign name 2", dateStart:"01.01.2015", dateStop:"05.02.2015", status:"Validated", editable:false},
		 			{id:"3", name:"Campaign name 3", dateStart:"01.01.2015", dateStop:"05.02.2015", status:"Validated", editable:false},
		 			{id:"4", name:"Campaign name 4", dateStart:"01.01.2015", dateStop:"05.02.2015", status:"Validated", editable:false}
	 			]
	 		}
 		}
 	}
}]);
