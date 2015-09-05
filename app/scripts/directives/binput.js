'use strict';

/**
 * @ngdoc directive
 * @name meanVoApp.directive:bInput
 * @description
 * # bInput
 */
angular.module('meanVoApp')
    .directive('bInput', function() {
        return {
            require: 'ngModel',
            scope: {
                text: '=ngModel',
                label: '@',

            },
            template: '<div class="form-group">' +
                '<label class="col-lg-2 control-label">{{label}}</label>' +
                '<div class="col-lg-10">' + '<input type="text" ng-model="text" class="form control" />' + '</div></div>',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {}
        };
    });