(function (){
    'use strict';
    angular.module('user-portal')
    .controller('UserListController', UserListController);
    
    UserListController.$inject = [];

    function UserListController(){
        var userList = this;

        //methods
        userList.$onInit = $onInit;
        // userList.getDepartment = getDepartment;

        function $onInit(){
        }
    }

})();