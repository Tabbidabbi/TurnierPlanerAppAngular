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

app.controller('CreateTournamentController', ['$scope', function($scope) {
    $scope.saveNewTournament=function(){
        /* while compiling form , angular created this object*/
        var data=$scope.fields;
        /* post to server*/
        //$http.post(url, data);
        console.log(data);

    }

}]);