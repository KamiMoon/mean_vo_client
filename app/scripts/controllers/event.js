'use strict';

angular.module('meanVoApp')
    .controller('EventCtrl', function($scope, EventService) {

        $scope.events = EventService.query();
    }).controller('EventAddCtrl', function($scope, EventService) {

        $scope.event = {};

        $scope.save = function() {
            EventService.save($scope.event).$promise.then(function() {
                console.log('SAVED');
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