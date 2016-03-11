'use strict';

/**
 * @ngdoc overview
 * @name tutorialPluralsightApp
 * @description
 * # tutorialPluralsightApp
 *
 * Main module of the application.
 */
angular
  .module('tutorialPluralsightApp', ['ui.router']);

angular.module('tutorialPluralsightApp')
  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: "views/home.html"
      });
    $stateProvider
      .state('about', {
        url: '/about',
        templateUrl: "views/about.html"
      });
    $stateProvider
      .state('contact', {
        url: '/contact',
        templateUrl: "views/contact.html"
      })
  });