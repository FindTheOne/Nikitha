var myApp = angular.module("myModule", []);
myApp.controller("myController", function($scope, $http, $window) {
	$scope.userImage = "http://saumeel.com/295Project/ProfileImages/buffalo.jpg";
	$scope.userName = "";
	$scope.emailid = "";
	$scope.interests = "";
	$scope.skills = "";
	$scope.friends = "";
	$scope.profileImag = "";
	
	var method = "GET";
	var url = "http://findtheone-env.us-west-1.elasticbeanstalk.com/rest/user/nikita";
	$http({  
        method : method,  
        url : url
    }).then(function success(response){
    	console.log(response.data);
    	$scope.userName = response.data.Result.userName;
    	$scope.emailid = response.data.Result.emailID;
    	$scope.interests = response.data.Result.interests;
    	$scope.skills = response.data.Result.skills;
    	$scope.friends = response.data.Result.friends;
        	
    }, function error(response){
    	console.log('error');	
    });
    
});