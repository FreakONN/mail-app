app.factory('userservice', ['$http', function($http)
{
    var service = {getUsers: getUsers, addUser: addUser};
    return service;

    function getUsers(callback)
    {
        $http.get('http://jsonplaceholder.typicode.com/users')
            .success(function(data) {
                callback(data);
            })
            .error(function(err) {
                callback(err);
            });

    }

    function addUser($scope, callback)
    {
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
                //console.log(data);
                $scope.users.push($scope.newPost);
                $scope.newPost = {};
                callback(true);
            })
            .error(function(error, status, headers, config){
                console.log(error);
                callback(false);
            });
    }

}]);
