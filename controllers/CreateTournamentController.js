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
            data[$scope.tournamentId] = $scope.fields;
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
                name: "", tournamentId: null, count: 3, duration: 15, type: "RoundRobin"
            };
            $scope.fields.teams = [{id:1, name:"Team 1"},{id:2, name:"Team 2"},{id:3, name:"Team 3"}];

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
        if(length < 3){
            return;
        }

        for (i = $scope.fields.teams.length; i < $scope.fields.count; i++) {
           $scope.fields.teams.push({id: (i + 1), name: "Team " + (i + 1)});
        }

        for (i = $scope.fields.teams.length; i >= $scope.fields.count; i--) {
            $scope.fields.teams.splice(i,1);
        }
    }
}]);
