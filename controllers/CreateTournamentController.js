/**
 * Created by ML on 02.05.16.
 */

app.controller('CreateTournamentController', ['$scope', function($scope) {

    $scope.saveNewTournament  = function () {
            $scope.saved = localStorage.getItem('tournamentData');
            $scope.tournaments = (localStorage.getItem('tournamentData') !== null) ? JSON.parse($scope.saved) : [{}] ;

            /*var counter = 1;
            angular.forEach($scope.fields, function(value, key) {
                console.log("value: " + value + ", key: " + key);
                if(value == ("Team"+counter)) {
                   if (key == "") {
                       key = ("Team"+counter);
                       console.log(key);
                   }
               }
            })*/

            //localStorage.setItem('tournamentData', JSON.stringify($scope.tournaments));
            $scope.tournaments.push(JSON.stringify($scope.fields));
            localStorage.setItem('tournamentData', JSON.stringify($scope.tournaments));
            console.log("added!" + JSON.stringify($scope.tournaments));
        };
}]);
