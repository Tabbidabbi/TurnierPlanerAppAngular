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
        .when('/roundRobin_view/:tournamentId', {
            templateUrl: 'views/roundRobin_view.html',
            controller: 'RoundRobinController'
        })
        .otherwise({
            redirectTo: '/'
        });
});


app.controller('HomeViewController', ['$scope', function($scope) {
    $scope.appTitle = "Turnier Planer App";

}]);


