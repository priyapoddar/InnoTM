app.controller('AddMoneyController', function ($scope, $location, $rootScope, homeservice, localStorageService) {
    $scope.add = {};
    $scope.add = localStorageService.get('UserData');
    $scope.addM = {};

    $scope.addMoney = function () {

        $scope.add.Amount = parseInt($scope.add.Amount) + parseInt($scope.addM.Amount);
        $scope.add.Amount = '' + $scope.add.Amount;

        homeservice.UpdateUserList($scope.add).then(function (response) {

            alert("Money Successfully Added");
            localStorageService.set('UserData', $scope.add);
            $scope.add.value = {};
            $rootScope.status = true;
            $location.path('/Dashboard');
        });
    }, function (error) {
        alert("Error");
    }
});
