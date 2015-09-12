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
                html += '"';
                if (scope.name) {
                    var someClass = "{'has-error': errors." + scope.name + "}";

                    html += ' ng-class="' + someClass + '   "';
                }
                html += '>';
                html += '<label class="col-lg-2 control-label">' + scope.label + '</label>';
                html += '<div class="col-lg-10">';
                html += '<input type="' + scope.type + '"';
                if (scope.ngModel) {
                    html += ' ng-model="' + scope.ngModel + '"';
                }
                html += ' class="form control"';
                if (scope.required) {
                    html += ' required ';
                }
                if (scope.name) {
                    html += ' name="' + scope.name + '" ';
                }

                html += '/>';
                html += '</div>';
                if (scope.name) {
                    html += '<p class="help-block" ng-if="errors.' + scope.name + '">';
                    html += '{{errors.' + scope.name + '}}</p>';
                }

                html += '</div>';
            }

            return html;
        };

        return {
            restrict: 'E',
            require: '?ngModel',
            replace: true,
            /*scope: {
                ngModel: '=ngModel',
                name: '@?',
                label: '@?',
                type: '@?',
                required: '@?'
            },*/
            link: function postLink(scope, element, attrs) {
                //default values
                attrs.label = attrs.label || '';
                attrs.type = attrs.type || 'text';

                element.html(getTemplate(attrs));

                $compile(element.contents())(scope);
            }
        };
    });