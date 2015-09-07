'use strict';

angular.module('meanVoApp')
    .controller('OrganizationCtrl', function($scope, OrganizationService) {

        $scope.organizations = OrganizationService.query();
    }).controller('OrganizationAddCtrl', function($scope, OrganizationService) {

        $scope.organization = {};

        $scope.save = function(form) {
            console.log($scope.organization);

            OrganizationService.save($scope.organization).$promise.then(function() {
                console.log('SAVED');
            }, function(err) {
                console.log(err);

                err = err.data;
                $scope.errors = {};

                // Update validity of form fields that match the mongoose errors
                angular.forEach(err.errors, function(error, field) {

                    if (form[field]) {
                        form[field].$setValidity('mongoose', false);
                        $scope.errors[field] = error.message;
                    }

                });
            });
        };

    }).controller('OrganizationEditCtrl', function($scope, $routeParams, OrganizationService) {

        var id = $routeParams.id;

        $scope.organization = OrganizationService.get({
            id: id
        });

        $scope.save = function() {
            console.log($scope.organization);

            OrganizationService.update({
                id: $scope.organization._id
            }, $scope.organization).$promise.then(function() {
                console.log("SAVED");
            });
        };

    }).controller('OrganizationViewCtrl', function($scope, $routeParams, OrganizationService) {

        var id = $routeParams.id;

        $scope.organization = OrganizationService.get({
            id: id
        });

    });