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
    address: 
    {
            street : $scope.newPost.address.street,
            suite : $scope.newPost.address.suite,
            city : $scope.newPost.address.city
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

$scope.removeUser = function(index)
{
    $scope.fiveDay.splice(index, 1);
}
  //ne radi kako treba - na stacku predlažu upgrade na 1.6.*
  $scope.removePost = function () {
            var data = 
            {
              id: $scope.newPost.id
            } 
            //Error: $scope.newPost is undefined
            //možemo direktno proslijediti vrijdnost ili preko $routeParams i indexa dokhvatiti 'id'
            $http.delete('http://jsonplaceholder.typicode.com/users/' + data)
            .success(function (data, status, headers, config) {
                $scope.ServerResponse = data;
            })
              .error(function (data, status, header) {
                $scope.ServerResponse = htmlDecode("Data: " + data +
                    "\n\n\n\nstatus: " + status +
                    "\n\n\n\nheaders: " + header +
                    "\n\n\n\nconfig: " + config);
            });
        };
}]);
