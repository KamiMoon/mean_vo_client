'use strict';

angular.module('meanVoApp')
    .factory('UserService', function($resource) {
        return $resource('/api/users/:id/:controller', {
            id: '@_id'
        }, {
            changePassword: {
                method: 'PUT',
                params: {
                    controller: 'password'
                }
            },
            update: {
                method: 'PUT'
            }
        });
    });