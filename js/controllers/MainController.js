
app.controller('MainController', ['$scope', 'userservice',  '$http',  function($scope, userservice, $http) {
    $scope.users = [];
    $scope.users = userservice.getUsers(function(result)
    {
        $scope.users  = result;
    });

    $scope.addUser = function()
    {
        userservice.addUser($scope, function(result)
        {
            alert(result);
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
                id: $scope.newPost.id  //Error: $scope.newPost is undefined
            }

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
