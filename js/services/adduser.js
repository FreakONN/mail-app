app.factory('adduser', ['$http', function ($http) {
return $http.post("http://jsonplaceholder.typicode.com/users",
    {
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
}]);