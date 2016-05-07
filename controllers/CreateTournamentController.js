/**
 * Created by ML on 02.05.16.
 */

app.controller('CreateTournamentController', ['$scope', '$location', '$routeParams', function ($scope, $location, $routeParams) {

    angular.element(document).ready(function () {
        if($routeParams.tournamentIndex != null){
            $scope.isEditMode = true;
        }else{
            $scope.isEditMode = false;
        }
        $scope.init();
    });

    $scope.saveNewTournament = function () {

        var td  = localStorage.getItem('tournamentData');
        $scope.savedTournaments = [];
        if (td[0] != null) {
            var data = JSON.parse(td);
            for(var n = 0; n < data.length; n++){
                $scope.savedTournaments.push(data[n]);
            }
        }

        //Vorhandene Daten überschreiben
        if($scope.isEditMode){
            data[$routeParams.tournamentIndex] = $scope.fields;
            $scope.savedTournaments = data;
        }
        //Neue Daten hinzufügen
        else {
            $scope.savedTournaments.push($scope.fields);
        }

        localStorage.setItem('tournamentData', JSON.stringify($scope.savedTournaments));
        $location.path('/submitForm/Gespeichert!/ Das Turnier wurde erfolgreich angelegt!');
    };

    $scope.init = function () {
        if($scope.isEditMode) {
            var data  = JSON.parse(localStorage.getItem('tournamentData'));
            $scope.fields = data[$routeParams.tournamentIndex];
            $scope.newTournamentHeader = "Turnier bearbeiten";
            $scope.submitBtnTxt = "Speichern";
        }
        else{
            $scope.newTournamentHeader = "Neues Turnier erstellen";
           $scope.submitBtnTxt = "Turnier anlegen";
            $scope.fields = {
                name: "", tournamentId: null, count: 3, duration: 15, type: "RoundRobin", status:"inactive"
            };
            $scope.fields.teams = [{id:1, name:"Team 1"},{id:2, name:"Team 2"},{id:3, name:"Team 3"}];
            $scope.fields.resultsRoundRobin = [
                {id:1, opponent: 2, score: 0, result: "even"},
                {id:1, opponent: 3, score: 0, result: "even"},
                {id:2, opponent: 1, score: 0, result: "even"},
                {id:2, opponent: 3, score: 0, result: "even"},
                {id:3, opponent: 1, score: 0, result: "even"},
                {id:3, opponent: 2, score: 0, result: "even"}];

            $scope.fields.resultsMix = [
                {id:1, opponent: 2, score: 0, result: "even"},];

            var i = localStorage.getItem("tournamentId");
            if (i != null) {
                $scope.tournamentId = parseInt(i) + 1;
            }
            else {
                $scope.tournamentId = 1000;
            }
            localStorage.setItem("tournamentId", $scope.tournamentId);
            $scope.fields.tournamentId = $scope.tournamentId;
        }
        $scope.changedTeamCount();

       $scope.$apply();
    };

    $scope.changedTeamCount = function () {
        var length = $scope.fields.count,
            i;
       if($scope.fields.type != null) {
           if ($scope.fields.type == "RoundRobin") {
               if (length < 3) {
                   return;
               }
           }
           else{
               if (length < 4) {
                   return;
               }
           }
       }

        for (i = $scope.fields.teams.length; i < $scope.fields.count; i++) {
           $scope.fields.teams.push({id: (i + 1), name: "Team " + (i + 1)});
        }

        for (i = $scope.fields.teams.length; i >= $scope.fields.count; i--) {
            $scope.fields.teams.splice(i,1);
        }
    };

    $scope.typeChanged = function (){
        if($scope.fields.type != "RoundRobin") {
          if($scope.fields.count < 4){
              $scope.fields.count = 4;
              $scope.changedTeamCount();
          }
          $("#count").attr("placeholder", "mind. 4 Teams");
        }
        else{
            $("#count").attr("placeholder", "mind. 3 Teams");
        }

    }
}]);
