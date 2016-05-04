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
        .when('/createTournament_view', {
            templateUrl: 'views/createTournament_view.html',
            controller: 'CreateTournamentController'
        })
        .when('/login_view', {
            templateUrl: 'views/login_view.html',
            controller: 'LoginViewController'
        })
        .when('/myTournaments_view', {
            templateUrl: 'views/myTournaments_view.html',
            controller: 'MyTournamentsController'
        })
        .otherwise({
            redirectTo: '/'
        });

});



app.controller('HomeViewController', ['$scope', function($scope) {
    $scope.appTitle = "Turnier Planer App";

}]);



app.controller('MyTournamentsController', ['$scope', function($scope) {

    $scope.tournaments = [
        {id:1, name: "Test1", tournamentStatus: "out" },
        {id:2, name: "Mein Test2", tournamentStatus: "inactive" },
        {id:3, name: "Test3", tournamentStatus: "active" }
    ]

}]);

