myApp.config(['$routeProvider',
		function($routeProvider) {
			$routeProvider
				.when('/profile/', {
					templateUrl: 'pages/profile.html'
				})

				.when('/campaigns/', {
					templateUrl: 'pages/campaigns.html',
					controller: 'campaignsController'
				})
				.when('/campaigns/add', {
					templateUrl: 'pages/campaigns-add.html',
					controller: 'campaignsAddController'
				})
				.when('/campaigns/:campaignId', {
					templateUrl: 'pages/campaigns-view.html',
					controller: 'campaignsViewController'
				})
				.when('/campaigns/:campaignId/edit', {
					templateUrl: 'pages/campaigns-edit.html',
					controller: 'campaignsEditController'
				})
				

				.when('/products/', {
					templateUrl: 'pages/products.html',
					controller: 'productsController'
				})
				.when('/products/add', {
					templateUrl: 'pages/products-add.html',
					controller: 'productsAddController'
				})
				.when('/products/:productId', {
					templateUrl: 'pages/products-view.html',
					controller: 'productsViewController'
				})
				.when('/products/:productId/edit', {
					templateUrl: 'pages/products-edit.html',
					controller: 'productsEditController'
				})

				.when('/tickets/', {
					templateUrl: 'pages/tickets.html',
					controller: 'ticketsController'
				})
				.when('/tickets/:ticketId', {
					templateUrl: 'pages/tickets-view.html',
					controller: 'ticketsViewController'
				})

				.when('/account', {
					templateUrl: 'pages/account.html',
					controller: 'accountController'
				})
				.when('/account/edit', {
					templateUrl: 'pages/account.html',
					controller: 'accountEditController'
				})

				.when('/contact', {
					templateUrl: 'pages/contact.html',
					controller: 'contactController'
				})

				.otherwise({
					templateUrl: 'pages/default.html'
				});
		}
		]);