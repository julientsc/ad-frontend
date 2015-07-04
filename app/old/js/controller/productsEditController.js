myApp.controller('productsEditController', ['$scope', function($scope) {
 	$scope.data = {
 		title:"Add a new product",
		detail:"Aliquam erat volutpat. Proin et vulputate diam. Ut vitae dui vel massa placerat porttitor. In id pulvinar tellus, et ultricies est. Nunc eros nisi, ornare et orci nec, interdum vehicula urna. Quisque consequat diam non faucibus tristique. Etiam sapien leo, feugiat vitae erat sit amet, gravida porta libero.",
		form:[
		{
			label:"Product Information",
			description:"Mauris eget fermentum nulla, eget mattis mi. Vivamus rutrum pretium arcu. Fusce orci nunc, pellentesque ac risus vel, accumsan semper sem. Vivamus hendrerit velit ut.",
			parts: [
			{
				id:"name",
				label:"Product name",
				type:"text",
				value:"campaign name",
				help:"ullam neque ex, imperdiet quis lacus quis, tempus lobortis purus. Sed scelerisque tincidunt erat id porta. Suspendisse vehicula nunc in aliquam congue.",
				mandatory: true
			},
			{
				id:"price",
				label:"Product price (CHF)",
				type:"text",
				value:"204.45",
				help:"ullam neque ex, imperdiet quis lacus quis, tempus lobortis purus.",
				mandatory: true
			},
			{
				id:"description",
				label:"Description",
				type:"textarea",
				value:"v",
				help:"ullam neque ex, imperdiet quis lacus quis, tempus lobortis purus. Sed scelerisque tincidunt erat id porta. Suspendisse vehicula nunc in aliquam congue.",
				mandatory: true
			}
			]
		}, 
		{
			label:"Diffusion dates",
			description:"Mauris eget fermentum nulla, eget mattis mi. Vivamus rutrum pretium arcu. Fusce orci nunc, pellentesque ac risus vel, accumsan semper sem. Vivamus hendrerit velit ut.",
			parts: [
			{
				id:"date",
				type:"datelaps",
				mandatory: true,
				dateStop: {
					label:"Stop date",
					help:"Vivamus rutrum pretium arcu. Fusce orci nunc, pellentesque ac risus vel, accumsan semper sem. Vivamus hendrerit velit ut.",
					value:""
				},
				dateStart: {
					label:"Stop date",
					help:"Vivamus rutrum pretium arcu. Fusce orci nunc, pellentesque ac risus vel, accumsan semper sem. Vivamus hendrerit velit ut.",
					value:""
				}
			}
			]
		},
		{
			label:"Gallery",
			description:"Mauris eget fermentum nulla, eget mattis mi. Vivamus rutrum pretium arcu. Fusce orci nunc, pellentesque ac risus vel, accumsan semper sem. Vivamus hendrerit velit ut.",
			parts: [
			{
				id:"name",
				label:"Product name",
				type:"gallery",
				value:"campaign name",
				help:"ullam neque ex, imperdiet quis lacus quis, tempus lobortis purus. Sed scelerisque tincidunt erat id porta. Suspendisse vehicula nunc in aliquam congue.",
				mandatory: true
			}
			]
		}
		] 
		
 	};
}]);