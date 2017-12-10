(function (){
    'use strict';
    
    angular.module('user-portal')
    .component('upUserEdit', {
        templateUrl: '/app/user-edit/user-edit.component.html',
        controller: 'UserEditController',
        controllerAs: "userEdit",
        bindings: {
            user: '<'
        }
    });
    
})();