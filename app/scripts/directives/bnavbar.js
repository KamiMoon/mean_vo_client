'use strict';

/**
 * @ngdoc directive
 * @name meanVoApp.directive:bNavBar
 * @description
 * # bNavBar
 */
angular.module('meanVoApp')
    .directive('bNavBar', function() {
        return {
            templateUrl: 'views/ui/navBar.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {}
        };
    });