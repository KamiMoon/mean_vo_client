'use strict';

angular.module('meanVoApp')
    .factory('OrganizationService', function($resource) {
        return $resource('/api/organizations/:id/:controller', {
            id: '@_id'
        }, {
            update: {
                method: 'PUT'
            },
            get: {
                method: 'GET',
                params: {
                    id: 'me'
                }
            }
        });
    });