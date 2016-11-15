angular.module('myCMSApp', ['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'views/home.html',
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
