'use strict';

angular.module('faculdade',['ngRoute','ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/',{templateUrl:'views/landing.html',controller:'LandingPageController'})
      .when('/Cursos',{templateUrl:'views/Curso/search.html',controller:'SearchCursoController'})
      .when('/Cursos/new',{templateUrl:'views/Curso/detail.html',controller:'NewCursoController'})
      .when('/Cursos/edit/:CursoId',{templateUrl:'views/Curso/detail.html',controller:'EditCursoController'})
      .when('/Disciplinas',{templateUrl:'views/Disciplina/search.html',controller:'SearchDisciplinaController'})
      .when('/Disciplinas/new',{templateUrl:'views/Disciplina/detail.html',controller:'NewDisciplinaController'})
      .when('/Disciplinas/edit/:DisciplinaId',{templateUrl:'views/Disciplina/detail.html',controller:'EditDisciplinaController'})
      .when('/Faculdades',{templateUrl:'views/Faculdade/search.html',controller:'SearchFaculdadeController'})
      .when('/Faculdades/new',{templateUrl:'views/Faculdade/detail.html',controller:'NewFaculdadeController'})
      .when('/Faculdades/edit/:FaculdadeId',{templateUrl:'views/Faculdade/detail.html',controller:'EditFaculdadeController'})
      .otherwise({
        redirectTo: '/'
      });
  }])
  .controller('LandingPageController', function LandingPageController() {
  })
  .controller('NavController', function NavController($scope, $location) {
    $scope.matchesRoute = function(route) {
        var path = $location.path();
        return (path === ("/" + route) || path.indexOf("/" + route + "/") == 0);
    };
  });
