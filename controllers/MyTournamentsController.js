/**
 * Created by ML on 02.05.16.
 */



app.controller('MyTournamentsController', ['$scope', function($scope) {

    var counter = 3;
    $scope.tournaments = [
        {id:1, name: "Test1", tournamentStatus: "out" },
        {id:2, name: "Mein Test2", tournamentStatus: "inactive" },
        {id:3, name: "Test3", tournamentStatus: "active" }
    ]

    $scope.savedTournamentsData = [];
    $scope.savedTournamentsData = JSON.parse(localStorage.getItem('tournamentData'));

    if($scope.savedTournamentsData != null) {
        for (var i = 0; i < $scope.savedTournamentsData.length; i++) {
            $scope.savedTournamentsData.forEach(function (data) {
                data.id = (i + 3);
                data.tournamentStatus = "inactive";
            });

            $scope.tournaments.push($scope.savedTournamentsData[i]);

        }
        console.log($scope.tournaments);

    }
}]);
