/**
 * Created by ML on 02.05.16.
 */

app.controller('CreateTournamentController', ['$scope', '$location', '$routeParams', function ($scope, $location, $routeParams) {
    $scope.edit = false;

    if ($routeParams != null) {
        $scope.allSavedTournamentsData = JSON.parse(localStorage.getItem('tournamentData'));

        if ($scope.allSavedTournamentsData != null) {
            var i = $routeParams.tournamentId;
            console.log($scope.allSavedTournamentsData[i].tournamentId);
            $scope.fields = {tournamentId: $scope.allSavedTournamentsData[i].tournamentId};
           $scope.fields = $scope.allSavedTournamentsData[i];
           /* $scope.fields.tournamentId = $scope.allSavedTournamentsData[i].tournamentId;
            $scope.fields.name = $scope.allSavedTournamentsData[i].name;
            $scope.fields.count = $scope.allSavedTournamentsData[i].count;
            $scope.fields.duration = $scope.allSavedTournamentsData[i].duration;
            for (var j = 0; j < $scope.allSavedTournamentsData.teams.length; j++) {
                $scope.fields.teams.teams[j] = $scope.allSavedTournamentsData[i].teams[j].teamname;
            }
            */
        }
        else {
            console.log("data = null");
        }
    }

    $scope.saveNewTournament = function () {
        $scope.successTournamentSavedMessage = "";
        $scope.successTournamentSavedTitle = "";

        if ($scope.edit) {
        }
        else {
            var data = localStorage.getItem('tournamentData');
            $scope.savedTournaments = [];
            if (data != null) {
                //data = data.substr(1, data.length - 2);
                $scope.savedTournaments.push(data);
            }
            $scope.savedTournaments.push($scope.fields);
            localStorage.setItem('tournamentData', JSON.stringify($scope.savedTournaments));
            $location.path('/submitForm');
        }
    };

    $scope.init = function () {
        if ($scope.edit == false) {
            var i = localStorage.getItem("tournamentId");
            if (i != null) {
                $scope.tournamentIndex = parseInt(i) + 1;
            }
            else {
                $scope.tournamentIndex = 1000;
            }

            localStorage.setItem("tournamentId", $scope.tournamentIndex);
            $scope.fields = {tournamentId: $scope.tournamentIndex};
        }
    };

    $scope.changedTeamCount = function () {
        $scope.fields.teams = [];

        $('#teamnames').empty();

        $scope.fields.teams = [];

        for (var i = 0; i < $scope.fields.count; i++) {
            $scope.fields.teams[i] = {teamid: (i + 1), teamname: "Team " + (i + 1)};
            //console.log("team " + i + ": " + JSON.stringify($scope.fields.teams[i]));
            var teamid = (i + 1);
            var teamname = "Team " + (i + 1);
            $('#teamnames').append('<div class="form-group"><label class="control-label col-sm-5" for="' + teamname + '">' + teamname + ':</label> <div class="col-sm-6"> <input type="text" class="form-control" name="team' + teamid + 'f" id="team' + teamid + '" ng-model="fields.' + teamname + '" value="' + teamname + '"> </div> </div>');
        }

    }
}])
;
