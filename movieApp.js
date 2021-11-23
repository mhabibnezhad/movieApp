var movieApp = angular.module('myMovieApp', ['ngRoute', 'ngAnimate']);
movieApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider
	        .when("/", {
			templateUrl: "home.html",
			controller: "defaultController"
		})
		.when("/error", {
			templateUrl: "error.html",
			controller: "errorController"
		})
		.when("/viewMovies", {
			templateUrl: "movies.html",
			controller: "movieController"
		})
		.otherwise({
			redirectTo: "404.html"
		});
	
}]);

movieApp.controller("movieController",["$scope","$http", function ($scope, $http) {
	console.log("movie controller is called");
	// do something
	$scope.username = ""
	$scope.password = ""

	$scope.check = function (username, password) {
		username = $scope.username;
		password = $scope.password;

		if (username == "mahmoud" && password == "1234") {
			$http.get("movieCollection.json").then(function (response) {
				$scope.myData = response.data.movieList;
			});
			$scope.message1 = "Here are the movies for you:"
			$scope.message2 = "No error"
		}
		else {
			$scope.myData = null
			console.log("error page/message should be shown")
			$scope.message1 = "No movie to show!"
			$scope.message2 = "Your username/password is wronge! Please try again."
		}

	};
	
}]);

movieApp.controller("errorController",["$scope","$http",  function ($scope, $http) {
	console.log("error controller is called");
	// do something
	$scope.message1 = "No movie to show!"
	$scope.message2 = "Your username/password is wronge! Please try again."

}]);

movieApp.controller("defaultController",["$scope","$http",  function ($scope, $http) {
	console.log("home controller");
	// do something
	$scope.message1 = "You are home!"
	$scope.message2 = "You are home again."

}]);

movieApp.run(['$location', '$rootScope', function($location, $rootScope) {
      $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

          if (current.hasOwnProperty('$$route')) {

              $rootScope.title = current.$$route.title;
          }
      });
}]);
