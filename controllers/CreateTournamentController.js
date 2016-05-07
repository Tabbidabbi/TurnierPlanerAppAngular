/**
 * Created by ML on 02.05.16.
 */

app.controller('CreateTournamentController', ['$scope', '$location', '$routeParams', function ($scope, $location, $routeParams) {

    angular.element(document).ready(function () {
        $scope.init();
    });

    if($routeParams.tournamentId != null){
        $scope.isEditMode = true;
    }else{
        $scope.isEditMode = false;
    }

    $scope.saveNewTournament = function () {
        $scope.successTournamentSavedMessage = "";
        $scope.successTournamentSavedTitle = "";

        var data = localStorage.getItem('tournamentData');
        $scope.savedTournaments = [];
        if (data != null) {
            //data = data.substr(1, data.length - 2);
            $scope.savedTournaments.push(data);
        }
        $scope.savedTournaments.push($scope.fields);
        localStorage.setItem('tournamentData', JSON.stringify($scope.savedTournaments));
        $location.path('/submitForm');

    };

    $scope.init = function () {
        $scope.fields = {name: "", torunamentId: null, count: 3, duration:15, type: "roundRobin",
            teams: ""};
        $scope.fields.teams = {teamid: 1, teamname: "Team 1"}, {teamid: 2, teamname: "Team 2"},{teamid: 3, teamname: "Team 3"};

        var i = localStorage.getItem("tournamentId");
        if (i != null) {
            $scope.tournamentIndex = parseInt(i) + 1;
        }
        else {
            $scope.tournamentIndex = 1000;
        }

        $scope.changedTeamCount();

        localStorage.setItem("tournamentId", $scope.tournamentIndex);
        $scope.fields.tournamentId = $scope.tournamentIndex;
    };

    $scope.changedTeamCount = function () {

        $('#teamnames').empty();

        $scope.fields.teams = [];
        var length = $scope.fields.count;

        for (var i = 0; i < length; i++) {
                $scope.fields.teams[i] = {teamid: (i + 1), teamname: "Team " + (i + 1)};
                //console.log("team " + i + ": " + JSON.stringify($scope.fields.teams[i]));
                var teamid = (i + 1);
                var teamname = "Team " + (i + 1);
                $('#teamnames').append('<div class="form-group"><label class="control-label col-sm-5" for="' + teamname + '">' + teamname + ':</label> <div class="col-sm-6"> <input type="text" class="form-control" name="team' + teamid + '" id="team' + teamid + '" ng-model="fields.' + teamname + '" value="' + teamname + '"> </div> </div>');
            }
        }
}]);
