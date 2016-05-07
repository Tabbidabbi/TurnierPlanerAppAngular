/**
 * Created by Tobias on 03.05.2016.
 */

//app.controller('LoginViewController', [
//    '$scope', '$rootScope', '$firebaseAuth', function($scope, $rootScope, $firebaseAuth) {
//        var ref = new Firebase('https://brilliant-heat-1322.firebaseio.com/');
//        $rootScope.auth = $firebaseAuth(ref);
//
//
//        $scope.signIn = function () {
//            $rootScope.auth.$authWithPassword({
//                email: $scope.email,
//                password: $scope.password
//            }).then(function(authData) {
//                $rootScope.alert.message = '';
//            }, function(error) {
//                if (error = 'INVALID_EMAIL') {
//                    console.log('email invalid or not signed up � trying to sign you up!');
//                    //$scope.signUp();
//                } else if (error = 'INVALID_PASSWORD') {
//                    console.log('wrong password!');
//                } else {
//                    console.log(error);
//                }
//            });
//        }
//
//        $scope.signUp = function() {
//            $rootScope.auth.$createUser($scope.email, $scope.password, function(error, user) {
//                if (!error) {
//                    $rootScope.alert.message = '';
//                } else {
//                    $rootScope.alert.class = 'danger';
//                    $rootScope.alert.message = 'The username and password combination you entered is invalid.';
//                }
//            });
//        }
//    }
//]);
app.controller('LoginViewController',['$scope','$firebaseAuth','$location','CommonProp',function($scope,$firebaseAuth,$location,CommonProp) {
    var firebaseObj = new Firebase("https://brilliant-heat-1322.firebaseio.com");
    var loginObj = $firebaseAuth(firebaseObj);

    $scope.user = {};
    $scope.SignIn = function(e){
        e.preventDefault();
        var username = $scope.user.email;
        var password = $scope.user.password;


        loginObj.$authWithPassword({
            email: username,
            password: password
        })
            .then(function(user) {
                //Success callback

                console.log('Authentication successful');
                CommonProp.setUser(user.password.email);
                $location.path('/welcome_view');

            }, function(error) {
                //Failure callback
                console.log('Authentication failure');
            });
    }
}]);
