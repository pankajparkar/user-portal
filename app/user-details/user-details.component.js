(function (){
    'use strict';
    angular.module('user-portal')
    .component('upUserDetails', {
        templateUrl: '/app/user-details/user-details.component.html',
        controller: 'UserDetailsController',
        controllerAs: "userDetails",
        bindings: {
            user: '<'
        }
    });
    
})();