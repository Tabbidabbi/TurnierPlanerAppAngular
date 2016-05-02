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

app.config(function($routeProvider){
    $routeProvider
        .when('/createTournament_view', {
            templateUrl: 'views/createTournament_view.html',
            controller: 'CreateTournamentController'
        })
        .otherwise({
            redirectTo: '/'
        });

});

app.config(function($routeProvider){
    $routeProvider
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

app.controller('RegisterViewController', ['$scope', function($scope) {


    $scope.user = [
        {name:"Hans", age:"30", gender:"male"},
        {name:"Volker", age:"40", gender:"male"},
        {name:"Wiebke", age:"22", gender:"female"},
        {name:"Heidi", age:"35", gender:"female"}
    ]

}]);

app.controller('MyTournamentsController', ['$scope', function($scope) {

    $scope.tournaments = [
        {id:1, name: "Test1", tournamentStatus: "out" },
        {id:2, name: "Mein Test2", tournamentStatus: "inactive" },
        {id:3, name: "Test3", tournamentStatus: "active" }
    ]

}]);

app.controller('CreateTournamentController', ['$scope', function($scope) {
    $scope.saveNewTournament=function(){
        /* while compiling form , angular created this object*/
        var data=$scope.fields;
        /* post to server*/
        //$http.post(url, data);
        alert.log(data);
    }

}]);