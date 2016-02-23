'use strict';

/**
 * @ngdoc overview
 * @name trabajoApp
 * @description
 * # trabajoApp
 *
 * Main module of the application.
 */
angular
  .module('trabajoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/crearEmpresa', {
        templateUrl: 'views/crearempresa.html',
        controller: 'CrearempresaCtrl',
        controllerAs: 'crearEmpresa'
      })
      .when('/crearUsuario', {
        templateUrl: 'views/crearusuario.html',
        controller: 'CrearusuarioCtrl',
        controllerAs: 'crearUsuario'
      })
      .when('/verEmpresa', {
        templateUrl: 'views/verempresa.html',
        controller: 'VerempresaCtrl',
        controllerAs: 'verEmpresa'
      })
      .when('/asignarUsuario', {
        templateUrl: 'views/asignarusuario.html',
        controller: 'AsignarusuarioCtrl',
        controllerAs: 'asignarUsuario'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
