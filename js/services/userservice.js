/*better way: 
1) http://corpus.hubwiz.com/2/angularjs/21821150.html
2) http://viralpatel.net/blogs/angularjs-service-factory-tutorial/
3) http://stackoverflow.com/questions/21821150/can-i-have-multiple-functions-in-my-angularjs-factory
4) http://stackoverflow.com/questions/36655564/angular-have-multiple-functions-in-one-service
5) http://stackoverflow.com/questions/33393436/angularjs-best-practice-factory-with-multiple-methods
*/
app.factory('userservice', ['$http', '$filter', function($http,$filter) 
{ 
		var getUrl = function() 
		{
       		return $http.get('http://jsonplaceholder.typicode.com/users') 
			.success(function(data) 
			{ 
			console.log(data);
           	}) 
          	.error(function(err) { 
           	console.log(err);
            return err; 
        	}); 
    	};
    	var addUsers = function() 
    	{

	    	$http.post("http://jsonplaceholder.typicode.com/users",
		   	{
		 	    id: $scope.newPost.id,
		 	    name: $scope.newPost.name,
		 	    username: $scope.newPost.username,
		 	    email: $scope.newPost.email,
		 	    address: 
		 	    {
		 	            street : $scope.newPost.address.street,
		 	            suite  : $scope.newPost.address.suite,
		 	            city   : $scope.newPost.address.city
		 	    }
		   	})
			.success(function(data, status, headers, config)
			{
			   console.log(data);
			   $scope.users.push($scope.newPost);
			   $scope.newPost = {};
			})
			  .error(function(error, status, headers, config){
			    console.log(error);
			});
		};

    	var removeUsers = function(index)
    	{
        	$scope.users.splice(index, 1);
    	};

    return {
        getUrl : getUrl,
        addUsers : addUsers,
        removeUsers : removeUsers
    };



 //  return $http.get('http://jsonplaceholder.typicode.com/users') 
 //            .success(function(data) { 
 //            console.log(data);
 //              return data; 
 //            }) 
 //            .error(function(err) { 
 //            console.log(err);
 //              return err; 
 //            }); 


 //    addUsers : function()
 //    {
	//   	$http.post("http://jsonplaceholder.typicode.com/users",
	//   	{
	// 	    id: $scope.newPost.id,
	// 	    name: $scope.newPost.name,
	// 	    username: $scope.newPost.username,
	// 	    email: $scope.newPost.email,
	// 	    address: 
	// 	    {
	// 	            street : $scope.newPost.address.street,
	// 	            suite : $scope.newPost.address.suite,
	// 	            city : $scope.newPost.address.city
	// 	    }
	//   	})

	// 	.success(function(data, status, headers, config)
	// 	{
	// 	   console.log(data);
	// 	    $scope.users.push($scope.newPost);
	// 	    $scope.newPost = {};
	// 	  })
	// 	  .error(function(error, status, headers, config){
	// 	    console.log(error);
	// 	  });
	// };

	// //simple remove array remove function 
	// removeUsers : function(index)
	// {
	//     $scope.users.splice(index, 1);
	// };


}]);
