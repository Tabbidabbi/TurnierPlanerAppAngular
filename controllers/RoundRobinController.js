/**
 * Created by ML on 03.05.16.
 */

app.controller('RoundRobinController', ['$scope','$routeParams', function($scope, $routeParams) {

    $scope.initData = function () {
        $scope.currentUserId = $routeParams.tournamentId;
        var data = JSON.parse(localStorage.getItem('tournamentData'));
        $scope.currentTournament = data[$scope.currentUserId];
    }

}]);