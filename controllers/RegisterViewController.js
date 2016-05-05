/**
 * Created by Tobias on 03.05.2016.
 */
app.controller('RegisterViewController', ['$scope', function($scope) {

    $scope.saveNewUser  = function () {
        $scope.savedUser = [];
        if (userdata = localStorage.getItem('userData')) {

            $scope.savedUser = JSON.parse(userdata);
        }
        $scope.savedUser.push($scope.myUser);

        localStorage.setItem('userData', JSON.stringify($scope.savedUser));
        console.log("Users: " + $scope.savedUser);
    };
    $scope.showUser = function() {

        $scope.myUser = {email: ""}

        $scope.loadUser = [];
        $scope.loadUser = JSON.parse(localStorage.getItem('userData'));




        //document.getElementById("registerName").value = $scope.loadUser[0].name;
        $scope.myUser.email = $scope.loadUser[0].email;
        console.log($scope.loadUser);



    }
}]);
