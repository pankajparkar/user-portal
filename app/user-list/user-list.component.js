(function (){
    'use strict';
    angular.module('user-portal')
    .component('upUserList', {
        templateUrl: '/app/user-list/user-list.component.html',
        controller: 'UserListController',
        controllerAs: 'userList',
        bindings: {
            users: '<',
            showUserDetails: '&'
        }
    });
    
})();