'use strict';

angular.module('meanVoApp')
    .controller('LoginCtrl', function($scope, AuthService, $location, ValidationService) {
        $scope.user = {};

        $scope.save = function(form) {

            //if (form.$valid) {
            AuthService.login({
                    email: $scope.user.email,
                    password: $scope.user.password
                })
                .then(function() {
                        // Logged in, redirect to home
                        ValidationService.displaySuccess('Logged In');

                        $location.path('/');
                    },
                    function(err) {
                        ValidationService.error(err.message);
                    });
            //}
        };
    });