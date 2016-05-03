/**
 * Created by ML on 02.05.16.
 */

app.config(function($routeProvider){
    $routeProvider
        .when('/roundRobin_view', {
            templateUrl: 'views/roundRobin_view.html',
            controller: 'RoundRobinController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('MyTournamentsController', ['$scope', function($scope) {

    $scope.tournaments = [
        {id:1, name: "Test1", tournamentStatus: "out" },
        {id:2, name: "Mein Test2", tournamentStatus: "inactive" },
        {id:3, name: "Test3", tournamentStatus: "active" }
    ]
        $scope.saved = localStorage.getItem('tournamentData');
        $scope.savedtournaments = (localStorage.getItem('tournamentData') !== null) ? JSON.parse($scope.saved) : [{}];
        $scope.tournaments.push(JSON.stringify( $scope.savedtournaments));
        console.log( $scope.tournaments);

}]);


