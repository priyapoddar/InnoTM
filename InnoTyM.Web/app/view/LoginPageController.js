app.controller('LoginPageController', function ($scope,$http,homeservice,$location,localStorageService) {
  $scope.login = {}
    $scope.loginfun = function () {
        $scope.Users = [];

        
            homeservice.getUserList().then(function (result) {
                $scope.Users = result.data.value;
                
                var status = 1;
                angular.forEach($scope.Users, function (value, key) {
                    
                     if (value.Email == $scope.login.Email && value.Password == $scope.login.Password) {
                         alert("login successfull");
                         $location.path('/Dashboard');
                         localStorageService.set('UserData', value);

                         status = 2;
                       

                    }
                    else if (($scope.Users.length - 1) == key && status == 1) {
                        alert("login failed");
                    }
                });




            }, function (error) {
                alert(error);
            }
            
            );
        
    }
    $scope.showRegisterPage = function () {

        $location.path('/Register');
    }

    });