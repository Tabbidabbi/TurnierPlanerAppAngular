/**
 * Created by ML on 07.05.16.
 */

app.controller('SubmitController', ['$scope','$routeParams', function($scope, $routeParams) {
    $scope.successTournamentSavedMessage = "";
    $scope.successTournamentSavedTitle = "";

    if($routeParams.alertTitle != null){
        if($routeParams.alertMessage != null){
            $scope.successTournamentSavedMessage = $routeParams.alertMessage;
            $scope.successTournamentSavedTitle = $routeParams.alertTitle;

        }
    }

}]);
