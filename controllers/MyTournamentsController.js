/**
 * Created by ML on 02.05.16.
 */

app.controller('MyTournamentsController', ['$scope', '$location', function($scope, $location) {

    $scope.tournaments = [];

    $scope.savedTournamentsData = [];
    var data = localStorage.getItem('tournamentData');
    if (data[0] != null) {

        $scope.savedTournamentsData = JSON.parse(data);
        if ($scope.savedTournamentsData != null) {
            for (var i = 0; i < $scope.savedTournamentsData.length; i++) {
                $scope.savedTournamentsData.forEach(function (data) {
                    data.id = i;
                    data.tournamentStatus = "inactive";
                });

                $scope.tournaments.push($scope.savedTournamentsData[i]);
            }
        }
    }
    $scope.editTournament = function(index){
        $location.path('/createTournament_view/'+index);
    };

    $scope.deleteTournament = function(index){
        $scope.tournaments.splice(index, 1);
        localStorage.setItem('tournamentData', $scope.tournaments);
    };
}]);
