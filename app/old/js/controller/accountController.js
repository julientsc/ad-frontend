myApp.controller('accountController', ['$scope', function($scope) {
 	$scope.data = {
 		title:"My Account",
		detail:"Aliquam erat volutpat. Proin et vulputate diam. Ut vitae dui vel massa placerat porttitor. In id pulvinar tellus, et ultricies est. Nunc eros nisi, ornare et orci nec, interdum vehicula urna. Quisque consequat diam non faucibus tristique. Etiam sapien leo, feugiat vitae erat sit amet, gravida porta libero.",
		form:[
		{
			label:"Personal Information",
			description:"Mauris eget fermentum nulla, eget mattis mi. Vivamus rutrum pretium arcu. Fusce orci nunc, pellentesque ac risus vel, accumsan semper sem. Vivamus hendrerit velit ut.",
			parts: [
			{
				id:"description",
				label:"Title",
				type:"text",
				value:"v",
				mandatory: true
			},
			{
				id:"name",
				label:"Firstname",
				type:"text",
				value:"campaign name",
				mandatory: true
			},
			{
				id:"price",
				label:"Lastname",
				type:"text",
				value:"204.45",
				mandatory: true
			},
			{
				id:"price",
				label:"Birthday",
				type:"text",
				value:"204.45",
				mandatory: true
			}
			]
		}, 
		{
			label:"Address",
			description:"Mauris eget fermentum nulla, eget mattis mi. Vivamus rutrum pretium arcu. Fusce orci nunc, pellentesque ac risus vel, accumsan semper sem. Vivamus hendrerit velit ut.",
			parts: [
			{
				id:"price",
				label:"Street",
				type:"text",
				value:"",
				mandatory: true
			},
			{
				id:"price",
				label:"City",
				type:"text",
				value:"",
				mandatory: true
			}
			]
		},
		{
			label:"Account information",
			description:"Mauris eget fermentum nulla, eget mattis mi. Vivamus rutrum pretium arcu. Fusce orci nunc, pellentesque ac risus vel, accumsan semper sem. Vivamus hendrerit velit ut.",
			parts: [
			{
				id:"price",
				label:"Email",
				type:"text",
				value:"",
				mandatory: true
			},
			{
				id:"price",
				label:"Password",
				type:"text",
				value:"",
				mandatory: true
			}
			]
		}
		
		] 
		
 	};
}]);