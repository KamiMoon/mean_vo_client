'use strict';

/**
 * @ngdoc directive
 * @name meanVoApp.directive:bInput
 * @description
 * # bInput
 */
angular.module('meanVoApp')
    .directive('bInput', function($compile) {

        var getTemplate = function(scope) {
            var html = '';

            if (scope.type === 'submit') {

                if (!scope.label) {
                    scope.label = 'Submit';
                }

                html += '<div class="form-group"><div class="col-lg-offset-2 col-lg-10"><input class="btn btn-primary" type="submit" value="{{label}}"></div></div>';
            } else {
                html += '<div class="form-group';
                if (scope.required) {
                    html += ' required';
                }
                html += '">';
                html += '<label class="col-lg-2 control-label">{{label}}</label>';
                html += '<div class="col-lg-10">';
                html += '<input type="{{type}}" ng-model="text" class="form control"';
                if (scope.required) {
                    html += ' required="required" ';
                }
                html += '/>';
                html += '</div></div>';
            }

            return html;
        };

        return {
            restrict: 'E',
            require: '?ngModel',
            replace: true,
            scope: {
                text: '=ngModel',
                label: '@?',
                type: '@?',
                required: '@?'
            },
            link: function postLink(scope, element, attrs) {
                //default values
                scope.label = scope.label || '';
                scope.type = scope.type || 'text';

                element.html(getTemplate(scope));
                $compile(element.contents())(scope);
            }
        };
    });