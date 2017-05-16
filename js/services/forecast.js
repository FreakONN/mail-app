//The forecast service needs to use AngularJS's built-in $http to fetch JSON from the server
//we add $http to the forecast service as a dependency
//Now $http is available to use inside forecast
app.factory('forecast', ['$http', function($http) { 
  return $http.get('http://jsonplaceholder.typicode.com/users') 
            .success(function(data) { 
            console.log(data);
              return data; 
            }) 
            .error(function(err) { 
            console.log(err);
              return err; 
            }); 
}]);
