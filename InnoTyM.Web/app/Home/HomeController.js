app.controller('HomeController', function ($scope, homeservice,$location) {
    $scope.Users = [];

    $scope.getUserList=function(){
        homeservice.getUserList().then(function (result) {
            $scope.Users = result.data.value;

        });

    },function(error)
    {
        console.log(error);
    }
    $scope.gotologin = function () {

        $location.path('/Login');
    }
});