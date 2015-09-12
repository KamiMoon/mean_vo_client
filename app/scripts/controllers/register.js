'use strict';

/**
 * @ngdoc function
 * @name meanVoApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the meanVoApp
 */
angular.module('meanVoApp')
    .controller('RegisterCtrl', function($scope, UserService, ValidationService, AuthService, $location) {
        $scope.user = {};

        $scope.save = function(form) {

            console.log($scope.user);

            //if (form.$valid) {
            AuthService.createUser($scope.user)
                .then(function() {
                    // Account created, redirect to home
                    //$location.path('/');
                    ValidationService.displaySuccess('You have been registered. Check your email to verify.');
                    $location.path('/thanks');
                }, function(err) {
                    ValidationService.displayErrors(form, err);
                });
            //} else {
            //    console.log(form);
            //}


        };
    });