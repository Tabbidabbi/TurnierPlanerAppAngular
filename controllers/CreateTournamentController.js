/**
 * Created by ML on 02.05.16.
 */


app.controller('CreateTournamentController', ['$scope', function($scope) {

    $scope.saveNewTournament  = function () {
            $scope.saved = localStorage.getItem('tournamentData');
            $scope.savedTournaments = [];
             if($scope.saved != null) {
                 savedTournaments.push($scope.saved);
             }

            savedTournaments.push("\n" + JSON.stringify($scope.fields));
            localStorage.setItem('tournamentData', savedTournaments);
    };
}]);
