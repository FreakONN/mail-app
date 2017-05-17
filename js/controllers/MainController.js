//we used the forecast service to fetch data from the server
//First we added forecast into MainController as a dependency so that it's available to use. 
//Then within the controller we used forecast to asynchronously fetch the weather data from the server and store it into $scope.fiveDay
app.controller('MainController', ['$scope', 'userservice',  '$http',  function($scope, userservice, $http) { 
    $scope.users = []; 
    userservice.success(function(data) { 
    $scope.users = data;
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
    $scope.users.push($scope.newPost);
    $scope.newPost = {};
  })
  .error(function(error, status, headers, config){
    console.log(error);
  });
}

//simple remove array remove function 
$scope.removeUser = function(index)
{
    $scope.users.splice(index, 1);
}
  //not working properly localy - raised issue on stack
  $scope.removePost = function () {
            var data = 
            {
              id: $scope.newPost.id
            } 
            //Error: $scope.newPost is undefined
            //forwarding paramaeters directly or with pulling them with $routeParams and index 'id'
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
