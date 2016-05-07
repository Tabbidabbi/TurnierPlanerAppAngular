/**
 * Created by ML on 02.05.16.
 */

app.controller('CreateTournamentController', ['$scope', '$location', '$routeParams', function ($scope, $location, $routeParams) {

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
        if ($routeParams != null) {
            $scope.edit = true;
        }else{
            $scope.edit = false;
        }


        if ($scope.edit == false) {
            var i = localStorage.getItem("tournamentId");
            if (i != null) {
                $scope.tournamentIndex = parseInt(i) + 1;
            }
            else {
                $scope.tournamentIndex = 1000;
            }

            $scope.changedTeamCount(3);

            localStorage.setItem("tournamentId", $scope.tournamentIndex);
            $scope.fields.tournamentId =  $scope.tournamentIndex;
        }else{
            $scope.allSavedTournamentsData = JSON.parse(localStorage.getItem('tournamentData'));

            if ($scope.allSavedTournamentsData != null) {
                $scope.fields = function(){
                    var data = $scope.allSavedTournamentsData[$routeParams];
                    return data;

                };
                /*var i = $routeParams.tournamentId;
                console.log($scope.allSavedTournamentsData[i].tournamentId);

                // $scope.fields = $scope.allSavedTournamentsData[i];
                // $scope.fields.tournamentId = $scope.allSavedTournamentsData[i].tournamentId;
                $scope.fields = {tournamentId: $scope.allSavedTournamentsData[i].tournamentId};
                $scope.fields = {name: $scope.allSavedTournamentsData[i].name};
                $scope.fields = {count: $scope.allSavedTournamentsData[i].count};
                $scope.fields = {duration: $scope.allSavedTournamentsData[i].duration};

                $scope.changedTeamCount($scope.allSavedTournamentsData[i].count);

                var teams = [];
                teams = $scope.allSavedTournamentsData[i].teams;

                for (var j = 0; j < teams.length; j++) {
                    var team = "team" + j;
                    var teamName = teams[j].teamname;
                    console.log(teams[j]);
                    var fteam =  $scope.fields.teams[j];
                    fteam = {team: teamName};
                }*/
                /* $scope.fields.tournamentId = $scope.allSavedTournamentsData[i].tournamentId;
                 $scope.fields.name = $scope.allSavedTournamentsData[i].name;
                 $scope.fields.count = $scope.allSavedTournamentsData[i].count;
                 $scope.fields.duration = $scope.allSavedTournamentsData[i].duration;
                 for (var j = 0; j < $scope.allSavedTournamentsData.teams.length; j++) {
                 $scope.fields.teams.teams[j] = $scope.allSavedTournamentsData[i].teams[j].teamname;
                 }
                 */
            }
        }
    };

    $scope.changedTeamCount = function (count) {
        $scope.fields.teams = [];

        $('#teamnames').empty();

        $scope.fields.teams = [];
        var length = $scope.fields.count;
        if(count != null){
            length = count;
        }

        for (var i = 0; i < length; i++) {
            $scope.fields.teams[i] = {teamid: (i + 1), teamname: "Team " + (i + 1)};
            var teamid = (i + 1);
            var teamname = "Team " + (i + 1);
            $('#teamnames').append('<div class="form-group"><label class="control-label col-sm-5" for="' + teamname + '">' + teamname + ':</label> <div class="col-sm-6"> <input type="text" class="form-control" name="team' + teamid + 'f" id="team' + teamid + '" ng-model="fields.' + teamname + '" value="' + teamname + '"> </div> </div>');
        }
    }
}])
;
