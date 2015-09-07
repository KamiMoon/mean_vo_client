'use strict';

/**
 * @ngdoc function
 * @name meanVoApp.controller:ProfileCtrl
 * @description
 * # ProfileCtrl
 * Controller of the meanVoApp
 */
angular.module('meanVoApp')
    .controller('ProfileCtrl', function($scope, $routeParams, UserService) {

        var id = $routeParams.id;

        console.log(id);

        $scope.user = UserService.get({
            id: id
        });

    });