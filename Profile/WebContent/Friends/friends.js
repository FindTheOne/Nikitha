var myApp = angular.module("myModule", []);
myApp.controller("myController", function($scope, $http, $window) {
	var method = "GET";
	var url = "http://findtheone-env.us-west-1.elasticbeanstalk.com/rest/user/saumeel/friends";
	$scope.friends;
	$scope.friendsDetail =[];
	$http({  
        method : method,  
        url : url
    }).then(function success(response){
    	console.log('first '+response.data.friends);
    	$scope.friends = response.data.friends;
    	for(var i=0; i< $scope.friends.length ; i++ ) {
    		var url = "http://findtheone-env.us-west-1.elasticbeanstalk.com/rest/user/"+$scope.friends[i];
    		console.log(url);
    		$http({  
    	        method : method,  
    	        url : url
    	    }).then(function success(response){
    	    	$scope.friendsDetail.push(response.data.Result);
    	    });
    		
    	}
    	
        	
    }, function error(response){
    	console.log('error');	
    });
});
