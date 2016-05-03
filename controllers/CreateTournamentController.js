/**
 * Created by ML on 02.05.16.
 */


app.controller('CreateTournamentController', ['$scope', function($scope) {

    $scope.saveNewTournament  = function () {
            $scope.saved = localStorage.getItem('tournamentData');
            $scope.savedTournaments = [];
             if($scope.saved != null) {
                 $scope.savedTournaments.push($scope.saved);
             }

            $scope.savedTournaments.push("\n" + JSON.stringify($scope.fields));
            localStorage.setItem('tournamentData', $scope.savedTournaments);
    };
}]);
