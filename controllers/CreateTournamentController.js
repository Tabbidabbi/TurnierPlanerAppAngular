/**
 * Created by ML on 02.05.16.
 */

app.controller('CreateTournamentController', ['$scope', function($scope) {

    $scope.saveNewTournament = function () {
        var data = localStorage.getItem('tournamentData');
        $scope.savedTournaments = [];
        if (data != null) {
            data = data.substr(1, data.length - 2);
            $scope.savedTournaments.push(data);
        }
        $scope.savedTournaments.push(JSON.stringify($scope.fields));
        localStorage.setItem('tournamentData', "[" + $scope.savedTournaments + "]");
        $scope.successTournamentSavedMessage = "Turnier wurde erfolgreich gespeichert";
    };

    $scope.init = function()
    {
        $scope.successTournamentSavedMessage = "";

        var i = localStorage.getItem("tournamentId");
        if (i != null) {
            $scope.tournamentIndex = parseInt(i)+1;
        }
        else{
            $scope.tournamentIndex = 1000;
        }

        localStorage.setItem("tournamentId", $scope.tournamentIndex);
        $scope.fields = {tournamentId : $scope.tournamentIndex};
    };

    $scope.changedTeamCount = function() {
        $scope.fields.team = [];

       $('#teamnames').empty();

        for (var i = 1; i <= $scope.fields.count; i++) {
            $scope.fields.team[i] = {teamid: i, teamname: "Team " + i};
            console.log("team " + i + ": " + JSON.stringify($scope.fields.team[i]));

            var teamid = i;
            var teamname = "Team " + i;
            $('#teamnames').append('<div class="form-group"><label class="control-label col-sm-5" for="' + teamname + '">' + teamname + ':</label> <div class="col-sm-6"> <input type="text" class="form-control" name="team' + teamid + 'f" id="team' + teamid + '" ng-model="fields.' + teamname + '" value="' + teamname + '"> </div> </div>');
        }

    }
}]);
