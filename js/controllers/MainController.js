//we used the forecast service to fetch data from the server
//First we added forecast into MainController as a dependency so that it's available to use. 
//Then within the controller we used forecast to asynchronously fetch the weather data from the server and store it into $scope.fiveDay
app.controller('MainController', ['$scope', 'forecast',  '$http',  function($scope, forecast, $http) { 
    $scope.fiveDay = []; 
    forecast.success(function(data) { 
    $scope.fiveDay = data;
  });

$scope.addUser = function(){
  $http.post("http://jsonplaceholder.typicode.com/users",{
    id: $scope.newPost.id,
    name: $scope.newPost.name,
    username: $scope.newPost.username,
    email: $scope.newPost.email,
    adress:
    {
       street: $scope.newPost.street,
       suite: $scope.newPost.suite,
       city: $scope.newPost.city
    }
   
  })

  .success(function(data, status, headers, config){
    console.log(data);
    $scope.fiveDay.push($scope.newPost);
    $scope.newPost = {};
  })
  .error(function(error, status, headers, config){
    console.log(error);
  });
}
}]);
