'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('kodiak', ['kodiak.filters', 'kodiak.directives', 'kodiak.controllers', 'ui.state', 'ui.bootstrap', 'ui.date', 'ui.slider']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    // enable xhr
    $httpProvider.defaults.useXDomain = true;

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'partials/landing.html',
            controller: 'landingCtrl'
        });

    $stateProvider
        .state('signup', {
            url: '/signup',
            templateUrl: 'partials/signup.html',
            controller: 'SignupCtrl'
        });

    $stateProvider
        .state('gen', {
           url: '/gen',
           templateUrl: 'partials/gen.html'
        });

    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        });

    $stateProvider
        .state('articles', {
            url: '/class/{classId}',
            templateUrl: 'partials/articles.html',
            controller: 'articlesCtrl'
        });
});