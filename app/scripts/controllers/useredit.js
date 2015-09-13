'use strict';

/**
 * @ngdoc function
 * @name meanVoApp.controller:UsereditCtrl
 * @description
 * # UsereditCtrl
 * Controller of the meanVoApp
 */
angular.module('meanVoApp')
    .controller('UsereditCtrl', function($scope, $routeParams, AuthService, Upload) {

        var id = $routeParams.id;

        console.log(id);

        $scope.user = AuthService.getCurrentUser();

        /*
                $scope.save = function() {
                    console.log($scope.user);

                    UserService.update({
                        id: $scope.user._id
                    }, $scope.user).$promise.then(function() {
                        console.log("SAVED");
                    });
                };
                */
        $scope.save = function() {
            console.log($scope.user);

            var request = Upload.upload({
                url: '/api/users/' + $scope.user._id,
                file: $scope.photo
            });

            request.success(function(data, status, headers, config) {
                console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
            }).error(function(data, status, headers, config) {
                console.log('error status: ' + status);
            });
        };

    });