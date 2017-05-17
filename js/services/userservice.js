app.factory('userservice', ['$http', function($http) { 
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
