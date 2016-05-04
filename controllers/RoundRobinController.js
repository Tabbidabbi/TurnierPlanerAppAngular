/**
 * Created by ML on 03.05.16.
 */

app.controller('RoundRobinController', ['$scope','$routeParams', function($scope, $routeParams) {

    $scope.initData = function () {
        $scope.currentUserId = $routeParams.tournamentId-4;
        console.log($scope.currentUserId);
        var data = [];
        data = JSON.parse(localStorage.getItem('tournamentData'));
        console.log(data);

        $scope.currentTournament = data[$scope.currentUserId];
        console.log($scope.currentTournament);
    }

}]);