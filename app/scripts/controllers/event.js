'use strict';

angular.module('meanVoApp')
    .controller('EventCtrl', function($scope, EventService) {

        $scope.events = EventService.query();
    }).controller('EventAddCtrl', function($scope, $routeParams, $location, EventService, ValidationService) {

        var organization_id = $routeParams.organization_id;

        $scope.event = {
            organization_id: organization_id
        };

        $scope.save = function(form) {
            EventService.save($scope.event).$promise.then(function(event) {
                ValidationService.displaySuccess();
                $location.path('/event/view/' + event._id);
            }, function(err) {
                ValidationService.displayErrors(form, err);
            });
        };

    }).controller('EventEditCtrl', function($scope, $routeParams, EventService) {

        var id = $routeParams.id;

        $scope.event = EventService.get({
            id: id
        });

        $scope.save = function() {
            EventService.update({
                id: $scope.event._id
            }, $scope.event).$promise.then(function() {
                console.log("SAVED");
            });
        };

    }).controller('EventViewCtrl', function($scope, $routeParams, EventService) {

        var id = $routeParams.id;

        $scope.event = EventService.get({
            id: id
        });

    });