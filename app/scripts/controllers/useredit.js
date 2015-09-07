'use strict';

/**
 * @ngdoc function
 * @name meanVoApp.controller:UsereditCtrl
 * @description
 * # UsereditCtrl
 * Controller of the meanVoApp
 */
angular.module('meanVoApp')
    .controller('UsereditCtrl', function($scope, $routeParams, UserService) {

        var id = $routeParams.id;

        console.log(id);

        $scope.user = UserService.get({
            id: id
        });

        $scope.save = function() {
            console.log($scope.user);

            UserService.update({
                id: $scope.user._id
            }, $scope.user).$promise.then(function() {
                console.log("SAVED");
            });
        };

    });