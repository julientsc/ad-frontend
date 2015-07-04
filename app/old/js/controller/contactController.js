myApp.controller('contactController', ['$scope', function($scope) {
 	$scope.data = {
 		title:"Contact",
		detail:"Aliquam erat volutpat. Proin et vulputate diam. Ut vitae dui vel massa placerat porttitor. In id pulvinar tellus, et ultricies est. Nunc eros nisi, ornare et orci nec, interdum vehicula urna. Quisque consequat diam non faucibus tristique. Etiam sapien leo, feugiat vitae erat sit amet, gravida porta libero.",
		form:[
		{
			label:"Contact Formular",
			description:"Mauris eget fermentum nulla, eget mattis mi. Vivamus rutrum pretium arcu. Fusce orci nunc, pellentesque ac risus vel, accumsan semper sem. Vivamus hendrerit velit ut.",
			parts: [
			{
				id:"name",
				label:"Firstname",
				type:"text",
				value:"campaign name",
				mandatory: true
			},
			{
				id:"name",
				label:"Lastname",
				type:"text",
				value:"campaign name",
				mandatory: true
			},
			{
				id:"description",
				label:"Message",
				type:"textarea",
				value:"v",
				help:"ullam neque ex, imperdiet quis lacus quis, tempus lobortis purus. Sed scelerisque tincidunt erat id porta. Suspendisse vehicula nunc in aliquam congue.",
				mandatory: true
			}
			]
		},
		{
			label:"Contact Formular 2",
			description:"Mauris eget fermentum nulla, eget mattis mi. Vivamus rutrum pretium arcu. Fusce orci nunc, pellentesque ac risus vel, accumsan semper sem. Vivamus hendrerit velit ut.",
			parts: [
			{
				id:"name",
				label:"Firstname",
				type:"text",
				value:"campaign name",
				mandatory: true
			},
			{
				id:"name",
				label:"Firstname",
				type:"map",
				value:"campaign name",
				mandatory: true,
				geoZones:[]
			}
			]
		}
		] 
		
 	};
}]);