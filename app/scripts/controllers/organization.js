'use strict';

angular.module('meanVoApp')
    .controller('OrganizationCtrl', function($scope, OrganizationService) {

        $scope.organizations = OrganizationService.query();
    }).controller('OrganizationAddCtrl', function($scope, OrganizationService, ValidationService) {

        $scope.organization = {};

        $scope.save = function(form) {

            OrganizationService.save($scope.organization).$promise.then(function() {
                ValidationService.displaySuccess();
            }, function(err) {
                ValidationService.displayErrors(form, err);
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