'use strict';

/**
 * @ngdoc function
 * @name meanVoApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the meanVoApp
 */
angular.module('meanVoApp')
    .controller('UserCtrl', function($scope, UserService) {
        $scope.users = UserService.query();
    });