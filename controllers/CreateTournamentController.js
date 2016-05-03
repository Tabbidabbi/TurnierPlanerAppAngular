/**
 * Created by ML on 02.05.16.
 */


    $scope.saveNewTournament  = function () {
            $scope.saved = localStorage.getItem('tournamentData');
            $scope.tournaments = (localStorage.getItem('tournamentData') !== null) ? JSON.parse($scope.saved) : [{}] ;
            //localStorage.setItem('tournamentData', JSON.stringify($scope.tournaments));
            $scope.tournaments.push("{($scope.fields)}");
            localStorage.setItem('tournamentData', JSON.stringify($scope.tournaments));
            console.log("added!" + JSON.stringify($scope.tournaments));
        };
}]);
