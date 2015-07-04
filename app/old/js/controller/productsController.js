myApp.controller('productsController', ['$scope', function($scope) {
 	$scope.data = {
 		title: "Products",
		description: "Nam metus felis, mattis at justo sed, tincidunt gravida leo. In dictum lacus eu nulla malesuada congue. Donec commodo arcu id turpis dapibus, a pharetra enim hendrerit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In a enim vitae turpis fermentum mattis. Vestibulum sodales volutpat pretium. Nullam euismod lorem eu.",
 		add: "Add new product",
 		addLink: "#/products/add",
 		parts: {
	 		
			"1. Editable product": {
	 			header:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tempor purus. Quisque viverra tempus pellentesque. Suspendisse sed diam eget libero feugiat lacinia id eu felis. Donec sed convallis sem. In rutrum sapien eu sodales tristique.",
	 			footer:"this is the footer",
	 			content: [
		 			{id:"1", name:"Product 1", dateAdded:"01.01.2015", status:"Validated", editable:true},
		 			{id:"2", name:"Product 2", dateAdded:"02.01.2015", status:"Validated", editable:true},
		 			{id:"3", name:"Product 3", dateAdded:"03.01.2015", status:"Validated", editable:true},
		 			{id:"4", name:"Product 4", dateAdded:"04.01.2015", status:"Validated", editable:true}
	 			]
	 		},
	 		"2. Validated Products": {
	 			header:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tempor purus. Quisque viverra tempus pellentesque. Suspendisse sed diam eget libero feugiat lacinia id eu felis. Donec sed convallis sem. In rutrum sapien eu sodales tristique.",
	 			footer:"this is the footer",
	 			content: [
		 			{id:"1", name:"Product 1", dateAdded:"01.01.2015", status:"Validated", editable:false},
		 			{id:"2", name:"Product 2", dateAdded:"02.01.2015", status:"Validated", editable:false},
		 			{id:"3", name:"Product 3", dateAdded:"03.01.2015", status:"Validated", editable:false},
		 			{id:"4", name:"Product 4", dateAdded:"04.01.2015", status:"Validated", editable:false}
	 			]
	 		},
	 		"3. Attributed Products": {
	 			header:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet tempor purus. Quisque viverra tempus pellentesque. Suspendisse sed diam eget libero feugiat lacinia id eu felis. Donec sed convallis sem. In rutrum sapien eu sodales tristique.",
	 			footer:"this is the footer",
	 			content: [
		 			{id:"1", name:"Product 1", dateAdded:"01.01.2015", status:"Validated", editable:false},
		 			{id:"2", name:"Product 2", dateAdded:"02.01.2015", status:"Validated", editable:false},
		 			{id:"3", name:"Product 3", dateAdded:"03.01.2015", status:"Validated", editable:false},
		 			{id:"4", name:"Product 4", dateAdded:"04.01.2015", status:"Validated", editable:false}
	 			]
	 		}
 		}
 	}
}]);
