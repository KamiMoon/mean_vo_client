'use strict';

/**
 * @ngdoc directive
 * @name meanVoApp.directive:bNavBar
 * @description
 * # bNavBar
 */
angular.module('meanVoApp')
    .directive('bNavBar', function($location, AuthService) {
        return {
            templateUrl: 'views/ui/navBar.html',
            restrict: 'E',
            scope: {},
            link: function postLink(scope) {
                scope.menu = [{
                    'title': 'Home',
                    'link': '/'
                }];

                scope.isCollapsed = true;
                scope.isLoggedIn = AuthService.isLoggedIn;
                scope.isAdmin = AuthService.isAdmin;
                scope.getCurrentUser = AuthService.getCurrentUser;

                scope.logout = function() {
                    AuthService.logout();
                    $location.path('/login');
                };

                scope.isActive = function(route) {
                    return route === $location.path();
                };

            }
        };
    });