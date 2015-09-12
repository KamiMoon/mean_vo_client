'use strict';

/**
 * @ngdoc overview
 * @name meanVoApp
 * @description
 * # meanVoApp
 *
 * Main module of the application.
 */
angular
    .module('meanVoApp', [
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/register', {
                templateUrl: 'views/register.html',
                controller: 'RegisterCtrl',
                controllerAs: 'register'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            }).when('/thanks', {
                templateUrl: 'views/thanks.html'
            })
            .when('/events', {
                templateUrl: 'views/events.html',
                controller: 'EventsCtrl',
                controllerAs: 'events'
            })
            .when('/opportunities', {
                templateUrl: 'views/opportunities.html',
                controller: 'OpportunitiesCtrl',
                controllerAs: 'opportunities'
            })
            .when('/leaderboards', {
                templateUrl: 'views/leaderboards.html',
                controller: 'LeaderboardsCtrl',
                controllerAs: 'leaderboards'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contact'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl',
                controllerAs: 'login'
            })
            .when('/faq', {
                templateUrl: 'views/faq.html',
                controller: 'FaqCtrl',
                controllerAs: 'faq'
            })
            .when('/user', {
                templateUrl: 'views/user/user.html',
                controller: 'UserCtrl',
                controllerAs: 'user'
            })
            .when('/profile/:id', {
                templateUrl: 'views/user/profile.html',
                controller: 'ProfileCtrl',
                controllerAs: 'profile'
            })
            .when('/userEdit/:id', {
                templateUrl: 'views/user/useredit.html',
                controller: 'UsereditCtrl',
                controllerAs: 'userEdit'
            })
            .when('/organization/', {
                templateUrl: 'views/organization/index.html',
                controller: 'OrganizationCtrl'
            })
            .when('/organization/add', {
                templateUrl: 'views/organization/add.html',
                controller: 'OrganizationAddCtrl'
            })
            .when('/organization/edit/:id', {
                templateUrl: 'views/organization/add.html',
                controller: 'OrganizationEditCtrl'
            })
            .when('/organization/view/:id', {
                templateUrl: 'views/organization/view.html',
                controller: 'OrganizationViewCtrl'
            }).when('/event/', {
                templateUrl: 'views/event/index.html',
                controller: 'EventCtrl'
            })
            .when('/event/add', {
                templateUrl: 'views/event/add.html',
                controller: 'EventAddCtrl'
            })
            .when('/event/edit/:id', {
                templateUrl: 'views/event/add.html',
                controller: 'EventEditCtrl'
            })
            .when('/event/view/:id', {
                templateUrl: 'views/event/view.html',
                controller: 'EventViewCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).run(function($rootScope) {
        $rootScope.successMessage = '';
    });