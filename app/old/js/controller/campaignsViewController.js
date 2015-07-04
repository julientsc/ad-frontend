myApp.controller('campaignsViewController', ['$scope', function($scope) {
 	$scope.data = {
 		title:"Add a new campaign",
		detail:"Aliquam erat volutpat. Proin et vulputate diam. Ut vitae dui vel massa placerat porttitor. In id pulvinar tellus, et ultricies est. Nunc eros nisi, ornare et orci nec, interdum vehicula urna. Quisque consequat diam non faucibus tristique. Etiam sapien leo, feugiat vitae erat sit amet, gravida porta libero.",
		form:[
		{
			label:"Campaign Information",
			description:"Mauris eget fermentum nulla, eget mattis mi. Vivamus rutrum pretium arcu. Fusce orci nunc, pellentesque ac risus vel, accumsan semper sem. Vivamus hendrerit velit ut.",
			parts: [
			{
				id:"name",
				label:"Campaign name",
				type:"text",
				value:"campaign name",
				help:"ullam neque ex, imperdiet quis lacus quis, tempus lobortis purus. Sed scelerisque tincidunt erat id porta. Suspendisse vehicula nunc in aliquam congue.",
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
		}
		,
		{
			label:"Difffusion Zone",
			description:"Mauris eget fermentum nulla, eget mattis mi. Vivamus rutrum pretium arcu. Fusce orci nunc, pellentesque ac risus vel, accumsan semper sem. Vivamus hendrerit velit ut.",
			parts: [
			{
				id:"zone",
				label:"Address",
				type:"map",
				value:"v",
				mandatory: true,
				geoZones: []
			}
			]
		}
		,
		{
			label:"Gallery",
			description:"Mauris eget fermentum nulla, eget mattis mi. Vivamus rutrum pretium arcu. Fusce orci nunc, pellentesque ac risus vel, accumsan semper sem. Vivamus hendrerit velit ut.",
			parts: [
			{
				id:"zone",
				label:"Address",
				type:"gallery",
				value:"v",
				mandatory: true
			}
			]
		}
		] 
		
 	};
 	
}]);