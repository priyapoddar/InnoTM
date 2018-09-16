/// <reference path="Transaction/Transaction.html" />
/// <reference path="Transaction/Transaction.html" />
/// <reference path="Transaction/Transaction.html" />
/// <reference path="Transaction/Transaction.html" />
/// <reference path="Transaction/Transaction.html" />
/// <reference path="Add Money/AddMoney.html" />
/// <reference path="Add Money/AddMoney.html" />
/// <reference path="Add Money/AddMoney.html" />
/// <reference path="view/RegisterPage.html" />
/// <reference path="view/RegisterPage.html" />
/// <reference path="view/LoginPage.html" />
/// <reference path="Home/homeinno.html" />
var app = angular.module('myApp',['ngRoute','LocalStorageModule']);
app.config(function ($routeProvider) {

    $routeProvider.when('/Login',{
    templateUrl: 'app/view/LoginPage.html',
    controller: 'LoginPageController'

    });
    $routeProvider.when('/Home', {
        templateUrl: 'app/Home/homeinno.html',
        controller: 'HomeController'

    });
    $routeProvider.when('/Register', {
        templateUrl: 'app/view/RegisterPage.html',
        controller: 'RegisterPageController'

    });
    $routeProvider.when('/AddMoney', {
        templateUrl: 'app/Add Money/AddMoney.html',
        controller: 'AddMoneyController'

    });
    $routeProvider.when('/Transaction', {
        templateUrl: 'app/Transaction/Transaction.html',
        controller: 'TransactionController'

    });
    $routeProvider.when('/Dashboard', {
        templateUrl: 'app/Dashboard/Dashboard.html',
        controller: 'DashboardController'

    });
    $routeProvider.otherwise({
        redirectTo : '/Home',
    });


});