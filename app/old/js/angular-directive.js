myApp.directive('fieldText', function() {
	return {
		scope: {
			data: '=data'
		},
		templateUrl: 'field/text.html'
	};
});
myApp.directive('fieldDouble', function() {
	return {
		scope: {
			data: '=data'
		},
		templateUrl: 'field/double.html'
	};
});
myApp.directive('fieldAddress', function() {
	return {
		scope: {
			data: '=data'
		},
		templateUrl: 'field/address.html'
	};
});

myApp.directive('fieldPassword', function() {
	return {
		scope: {
			data: '=data'
		},
		templateUrl: 'field/password.html'
	};
});
myApp.directive('fieldEmail', function() {
	return {
		scope: {
			data: '=data'
		},
		templateUrl: 'field/email.html'
	};
});
myApp.directive('fieldMap', function() {
	return {
		scope: {
			data: '=data'
		},
		templateUrl: 'field/map.html'
	};
});
myApp.directive('fieldTextarea', function() {
	return {
		scope: {
			data: '=data'
		},
		templateUrl: 'field/textarea.html'
	};
});

myApp.directive('fieldGallery', function() {
	return {
		scope: {
			data: '=data'
		},
		templateUrl: 'field/gallery.html'
	};
});

myApp.directive('fieldDatelaps', function() {
	return {
		scope: {
			data: '=data'
		},
		templateUrl: 'field/datelaps.html'
	};
});
myApp.directive('fieldForm', function() {
	return {
		scope: {
			formular: '=data'
		},
		templateUrl: 'field/form.html'
	};
});