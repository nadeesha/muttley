'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('kodiak', ['kodiak.filters', 'kodiak.directives', 'kodiak.controllers', 'ui.state', 'ui.bootstrap', 'ui.date', 'ui.slider']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

    // enable xhr
    $httpProvider.defaults.useXDomain = true;

    // xsrf config
    $httpProvider.defaults.xsrfCookieName = 'XSRF-TOKEN';
    $httpProvider.defaults.xsrfHeaderName = 'x-csrf-token';

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'partials/landing.html',
           controller: 'landingCtrl'
        });

    $stateProvider
        .state('gen', {
           url: '/gen',
           templateUrl: 'partials/gen.html'
        });   

});
