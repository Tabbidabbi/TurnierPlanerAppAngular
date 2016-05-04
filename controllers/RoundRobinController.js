/**
 * Created by ML on 03.05.16.
 */

app.controller('RoundRobinController', ['$scope','$routeParams', function($scope, $routeParams) {


    $scope.initData = function() {
        $scope.currentUserId = $routeParams.tournamentId;
        console.log($scope.currentUserId);

        $scope.currentTournament = $scope.savedTournamentsData[$scope.currentUserId];
        console.log(JSON.parse($scope.currentTournament));
    };

}]);