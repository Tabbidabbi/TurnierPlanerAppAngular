/**
 * Created by ML on 02.05.16.
 */

app.config(function($routeProvider){
    $routeProvider
        .when('/roundRobin_view', {
            templateUrl: 'views/roundRobin_view.html',
            controller: 'RoundRobinController'
        })
        .otherwise({
            redirectTo: '/'
        });
});