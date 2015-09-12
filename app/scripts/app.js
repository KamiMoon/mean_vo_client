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
    .config(function($routeProvider, $httpProvider) {

        $httpProvider.interceptors.push('authInterceptor');

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
                controllerAs: 'profile',
                authenticate: true
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
    }).factory('authInterceptor', function($rootScope, $q, $cookieStore, $location) {
        return {
            // Add authorization token to headers
            request: function(config) {
                config.headers = config.headers || {};
                if ($cookieStore.get('token')) {
                    config.headers.Authorization = 'Bearer ' + $cookieStore.get('token');
                }
                return config;
            },

            // Intercept 401s and redirect you to login
            responseError: function(response) {
                if (response.status === 401) {
                    $location.path('/login');
                    // remove any stale tokens
                    $cookieStore.remove('token');
                    return $q.reject(response);
                } else {
                    return $q.reject(response);
                }
            }
        };
    }).run(function($rootScope, AuthService, $location) {
        $rootScope.successMessage = '';

        // Redirect to login if route requires auth and you're not logged in
        $rootScope.$on('$routeChangeStart', function(event, next) {
            AuthService.isLoggedInAsync(function(loggedIn) {
                if (next.authenticate && !loggedIn) {
                    event.preventDefault();
                    $location.path('/login');
                }
            });
        });
    });