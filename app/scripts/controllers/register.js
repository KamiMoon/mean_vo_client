'use strict';

/**
 * @ngdoc function
 * @name meanVoApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the meanVoApp
 */
angular.module('meanVoApp')
    .controller('RegisterCtrl', function($scope) {
        $scope.form = {};

        $scope.submit = function() {
            console.log($scope.form);
        };
    });