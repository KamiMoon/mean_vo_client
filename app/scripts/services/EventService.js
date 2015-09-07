'use strict';

angular.module('meanVoApp')
    .factory('EventService', function($resource) {
        return $resource('/api/events/:id/:controller', {
            id: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    });