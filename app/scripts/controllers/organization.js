'use strict';

angular.module('meanVoApp')
    .controller('OrganizationCtrl', function($scope, OrganizationService, ValidationService) {

        $scope.organizations = OrganizationService.query();

        $scope.searchParams = {};

        $scope.search = function() {

            $scope.organizations = OrganizationService.query($scope.searchParams);

        };

        $scope.delete = function(id) {
            if (id) {

                var r = confirm("Are you sure you want to delete?");
                if (r == true) {
                    OrganizationService.delete({
                        id: id
                    }).$promise.then(function() {
                        ValidationService.displaySuccess();

                        $scope.organizations = OrganizationService.query($scope.searchParams);

                    }, function() {
                        alert('Delete Failed');
                    });
                }

            }
        };

    }).controller('OrganizationAddCtrl', function($scope, OrganizationService, ValidationService, $location) {

        $scope.organization = {};

        $scope.save = function(form) {

            OrganizationService.save($scope.organization).$promise.then(function(organization) {
                ValidationService.displaySuccess();
                $location.path('/organization/view/' + organization._id);
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