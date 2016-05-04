/**
 * Created by Tobias on 03.05.2016.
 */


app.controller('RegisterViewController', ['$scope', function($scope) {

    $scope.saveNewUser  = function () {
        $scope.saved = localStorage.getItem('userData');
        $scope.savedUsers = [];
        if($scope.saved != null) {
            $scope.savedUsers.push($scope.saved);
        }

        $scope.savedUsers.push("\n" + JSON.stringify($scope.myUser));
        localStorage.setItem('userData', $scope.savedUsers);
        console.log("Users: " + $scope.savedUsers);
    };
}]);
