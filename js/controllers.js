var myNameSpace = angular.module('myApp', []);

myNameSpace.controller('MyController',function MyController ($scope) {
		$scope.author = {
			'name' : 'Bijay Ranjit',
			'title' : 'Software Engineer',
			'company': 'home'
		}
	});