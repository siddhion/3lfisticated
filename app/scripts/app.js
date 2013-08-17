'use strict';

angular.module('maxmythicApp', ['ngResponsiveImages'])
  .config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix = '!';
    $routeProvider
      .when('/', {
        templateUrl: '/views/design.html',
        controller: 'MainCtrl'
      })
      .when('/design', {
        templateUrl: '/views/design.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: '/views/about.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: '/views/contact.html',
        controller: 'MainCtrl'
      })
      .when('/design/vance-and-gary-unhinged', {
        templateUrl: '/views/design/vance-and-gary-unhinged.html',
        controller: 'MainCtrl'
      })
      .when('/design/dam-funk', {
        templateUrl: '/views/design/dam-funk.html',
        controller: 'MainCtrl'
      })
      .when('/design/relationships', {
        templateUrl: '/views/design/relationships.html',
        controller: 'MainCtrl'
      })
      .when('/design/paintjob', {
        templateUrl: '/views/design/paintjob.html',
        controller: 'MainCtrl'
      })
      .when('/design/lemy-leopard-streets-of-house', {
        templateUrl: '/views/design/lemy-leopard-streets-of-house.html',
        controller: 'MainCtrl'
      })
      .when('/design/cloudsick', {
        templateUrl: '/views/design/cloudsick.html',
        controller: 'MainCtrl'
      })
      .when('/design/popr0n', {
        templateUrl: '/views/design/popr0n.html',
        controller: 'MainCtrl'
      })
      .when('/design/i-is-the-path', {
        templateUrl: '/views/design/i-is-the-path.html',
        controller: 'MainCtrl'
      })
      .when('/design/culture-blind', {
        templateUrl: '/views/design/culture-blind.html',
        controller: 'MainCtrl'
      })
      .when('/design/lounge-coffee', {
        templateUrl: '/views/design/lounge-coffee.html',
        controller: 'MainCtrl'
      })
      .when('/design/raverz', {
        templateUrl: '/views/design/raverz.html',
        controller: 'MainCtrl'
      })
      .when('/design/troonz', {
        templateUrl: '/views/design/troonz.html',
        controller: 'MainCtrl'
      })
      .when('/design/future-shock-logo', {
        templateUrl: '/views/design/future-shock-logo.html',
        controller: 'MainCtrl'
      })
      .when('/design/various-sketches', {
        templateUrl: '/views/design/various-sketches.html',
        controller: 'MainCtrl'
      })
      .when('/design/the-yellers', {
        templateUrl: '/views/design/the-yellers.html',
        controller: 'MainCtrl'
      })
      .when('/design/fame-logo', {
        templateUrl: '/views/design/fame-logo.html',
        controller: 'MainCtrl'
      })
      .when('/design/chaos-conspiracies', {
        templateUrl: '/views/design/chaos-conspiracies.html',
        controller: 'MainCtrl'
      })
      .when('/design/maxmythic-dot-com', {
        templateUrl: '/views/design/maxmythic-dot-com.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
