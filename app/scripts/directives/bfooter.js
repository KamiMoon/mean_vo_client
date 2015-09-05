'use strict';

/**
 * @ngdoc directive
 * @name meanVoApp.directive:bFooter
 * @description
 * # bFooter
 */
angular.module('meanVoApp')
    .directive('bFooter', function() {
        return {
            templateUrl: 'views/ui/footer.html',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {}
        };
    });