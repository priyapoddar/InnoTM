app.controller('TransactionController', function ($scope, $rootScope, $location, $timeout, localStorageService, homeservice) {
    $scope.Transaction = {};
    $scope.Sender = {};
    $scope.Sender = localStorageService.get('UserData');
    $scope.Receiver = {};
    //$scope.Receiver = localStorageService.get('userData');

    $scope.sendM = function () {
        var currentDate = new Date();

        //if ($scope.Transaction.Amount_Transferred <= $scope.Sender.Amount) {
        var filter = "?$filter=Email eq " + "'" + $scope.Transaction.Email + "'";

        homeservice.getUserList(filter).then(function (response) {

            $scope.Receiver = response.data;

            $scope.Receiver.UserID = response.data.UserID;
            $scope.Receiver.Name = response.data.Name;
            $scope.Receiver.Email = response.data.Email;
            $scope.Receiver.Phone = response.data.Phone;
            $scope.Receiver.Amount = '' + parseFloat(response.data.Amount).toString();
            $scope.Receiver.Password = response.data.Password;

            //$scope.receiver.ReferenceId = $scope.sender.value.UserId;
            //$scope.receiver.Gender = response.data.value[0].Gender;
            //$scope.receiver.ImageUrl = response.data.value[0].ImageUrl;


            //            Transaction_ID int primary key NOT NULL,

            //UserID int NOT NULL,
            //RefID int NOT NULL,
            //Transaction_date date NOT NULL,
            //Initial_Amount money NOT NULL,
            //Amount_Transaction money NOT NULL,
            //Transaction_type nvarchar(300) NOT NULL,
            //Tansaction_status int NOT NULL,




            $scope.debit = {
                'UserID': $scope.Sender.UserID,
                'ReferenceID': $scope.Receiver.UserID,
                'InitialAmount': '' + parseFloat($scope.Sender.Amount).toString(),
                'AmountTransferred': '' + $scope.Transaction.AmountTransferred,
                'TransactionType': "2",
                'TransactionDate': currentDate,
                'Status': 1
            };

            homeservice.transfer($scope.debit).then(function (response) {
                $scope.credit = {
                    'UserID': $scope.Receiver.UserID,
                    'ReferenceID': $scope.Sender.UserID,
                    'InitialAmount': '' + parseFloat($scope.Receiver.Amount).toString(),
                    'AmountTransferred': '' + $scope.Transaction.AmountTransferred,
                    'TransactionType': "1",
                    'TransactionDate': currentDate,
                    'Status': 1
                };
                homeservice.transfer($scope.credit).then(function (response) {

                    $scope.Receiver.Amount = '' + parseFloat($scope.Receiver.Amount) + parseFloat($scope.Transaction.AmountTransferred);
                    $scope.Sender.Amount = '' + parseFloat($scope.Sender.Amount) - parseFloat($scope.Transaction.AmountTransferred);
                    $scope.Sender.Amount = '' + $scope.Sender.Amount;
                    $scope.Receiver.Amount = '' + $scope.Receiver.Amount;
                    alert("Transaction finish");

                    homeservice.UpdateUserList($scope.Receiver).then(function (response) {
                        localStorageService.set('UserData', $scope.Sender);
                        //$scope.sender.value = {};

                        homeservice.UpdateUserList($scope.Sender).then(function (response) {
                            localStorageService.set('UserData', $scope.Receiver);
                            $scope.Receiver = {};
                            alert("success");
                            $location.path('/Dashboard');
                        });
                    });
                });

            });

        });

        //}
        // else {
        //     alert("you don't have sufficient amount to transfer")
        // }
    }, function (error) {
        alert(error);
    }

});

