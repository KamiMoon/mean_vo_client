'use strict';

/**
 * @ngdoc function
 * @name meanVoApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the meanVoApp
 */
angular.module('meanVoApp')
    .controller('UserCtrl', function($scope) {
        $scope.users = [{
            id: 1,
            username: 'EricKiza87',
            first_name: 'Eric',
            last_name: 'Kizaki',
            created: '9/5/2015 15:52',
            address: '7327 Western Ave',
            city: 'Omaha',
            abbrev: 'NE',
            zip: '68114',
            email: 'erickizaki@gmail.com',
            phone: '402-917-0381'
        }];


    });