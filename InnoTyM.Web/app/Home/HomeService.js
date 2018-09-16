app.factory('homeservice', function ($http) {


    var homefactory = {};
    homefactory.getUserList= function (filter) {
        if (!filter) {
            filter = "";
        }
        return $http.get("http://localhost/InnoTyM.API/ODATA/Users");

    }
    homefactory.postUserList = function (model) {

        return $http.post("http://localhost/InnoTyM.API/ODATA/Users", model);
    }
    homefactory.UpdateUserList = function (add) {

        return $http.put("http://localhost/Innotym.Api/Odata/Users" + "(" + add.UserID + ")", add);
    }
    homefactory.getUser = function (filter) {
        return $http.get("http://localhost/Innotym.Api/Odata/Users?$filter=Email eq  " + "(" + filter + ")")

    }
    homefactory.transfer = function (model) {
        return $http.post("http://localhost/Innotym.Api/Odata/Transactions", model);
    }
      
    homefactory.updateUser = function (update) {
        return $http.put("http://localhost/Innotym.Api/Odata/Users" + "(" + update.UserID + ")", update)
    }
    return homefactory;

})

