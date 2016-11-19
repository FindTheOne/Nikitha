var myApp = angular.module("myModule", []);
myApp.controller("myController", function($scope, $http, $window) {
	$scope.userImage = "http://saumeel.com/295Project/ProfileImages/buffalo.jpg";
	$scope.userImage2 = "http://saumeel.com/295Project/ProfileImages/saumeel.jpg";
	//$scope.message = response.data;
	/*var method = "GET";
	var url = "http://server-env.us-west-1.elasticbeanstalk.com/rest/hello/getInbox/pavan/saumeel";
	$http({  
        method : method,  
        url : url
    }).then(function success(response){
    	console.log(response.data);
    	$scope.message = response.data;
    	$scope.username = response.data.Result.userName;
    	//$scope.password = response.data.Result.pswd;
        	
    }, function error(response){
    	console.log('error');	
    });*/
    
});