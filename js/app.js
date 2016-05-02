/**
 * Created by Tobias on 01.05.2016.
 */
var app = angular.module('turnierPlanerApp', ['ngRoute']);


app.config(function($routeProvider){
    $routeProvider
        .when('/register_view', {
        templateUrl: 'views/register_view.html',
        controller: 'RegisterViewController'
    })
        .otherwise({
            redirectTo: '/'
        });

});




app.controller('HomeViewController', ['$scope', function($scope) {


    $scope.appTitle = "Turnier Planer App";




}]);

app.controller('RegisterViewController', ['$scope', function($scope) {


    $scope.user = [
        {name:"Hans", age:"30", gender:"male"},
        {name:"Volker", age:"40", gender:"male"},
        {name:"Wiebke", age:"22", gender:"female"},
        {name:"Heidi", age:"35", gender:"female"},


    ]



}]);


