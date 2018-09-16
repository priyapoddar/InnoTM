app.controller('RegisterPageController', function ($scope,$http,$location,homeservice) {

    $scope.UserData = {};
    $scope.registerfun=function(){

        $scope.UserData;
        homeservice.postUserList($scope.UserData).then(function(result){
            $location.path('/Login');
        })
    };



});