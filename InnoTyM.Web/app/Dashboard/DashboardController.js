app.controller('DashboardController', function ($scope, $location) {


$scope.addtheMoney = function () {

    $location.path('/AddMoney');
}

$scope.sendMoney = function () {

    $location.path('/Transaction');
}
$scope.transhist = function () {

    $location.path('/Transaction');
}
});