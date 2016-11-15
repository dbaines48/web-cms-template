angular.module('myCMSApp', ['ngRoute']);

angular.module('myCMSApp').
config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html'
      controller: 'HomeController',
    })
    .when('/madres', {

    })
    .when('/cuidador',{

    })
    .when('/madres-comunitarias', {

    })
    .when('/profesores', {

    })
    .when('/otro-profesional', {

    })
    .otherwise({
      redirectTo: '/'
    })
});
