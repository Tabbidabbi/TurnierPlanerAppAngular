/**
 * Created by Tobias on 01.05.2016.
 */
var app = angular.module('turnierPlanerApp', ['ngRoute','firebase']);

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
        .when('/home_view', {
            templateUrl: 'views/home_view.html',
            controller: 'HomeViewController'
        })
        .otherwise({
            redirectTo: '/'
        });
});


app.controller('HomeViewController', ['$scope', function($scope) {
    $scope.appTitle = "Turnier Planer App";

}]);

app.factory("Auth", ["$firebaseAuth",
    function($firebaseAuth) {
        var ref = new Firebase("https://brilliant-heat-1322.firebaseio.com/");
        return $firebaseAuth(ref);
    }
]);
app.controller('AlertCtrl', [
    '$scope', '$rootScope', function($scope, $rootScope) {
        $rootScope.alert = {};
    }
]);
app.service('CommonProp', function() {
    var user = '';

    return {
        getUser: function() {
            return user;
        },
        setUser: function(value) {
            user = value;
        }
    };
});



