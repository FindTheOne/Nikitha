    var myApp = angular.module("myModule", []);

    myApp.controller("myController", function($scope, $http, $window) {
    	$scope.form = {  
                username : "",  
                password : ""  
            }; 

    	$scope.submitDetails = function() { 
    		var method = "POST";
    		var url = "http://localhost:8080/finalProject/rest/login";
    		$http({  
                method : method,  
                url : url,  
                data : angular.toJson($scope.form),  
                headers : {  
                    'Content-Type' : 'application/json'  
                }  
            }).then( _success);  
        };  
        function _success(response) {  
           // _refreshCountryData();  
            //_clearFormData() 
        	if(response.data.message == 'user not found')
        	{ 
        		console.log(response.data.message);
        		$window.alert('Invalid Credentials. Please try again!');
        		
        	} else {
        		console.log(response.data.message); 
        		$window.location.href = '../Dashboard/index.html'
        	}
        		
        	
        }  
   
        function _error(response) {  
        	  
        }  

    });