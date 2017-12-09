(function (){
    'use strict';
    angular.module('user-portal')
    .controller('UserListController', UserListController);
    
    UserListController.$inject = ['UserService'];

    function UserListController(userService){
        var userList = this;

        //methods
        userList.$onInit = $onInit;

        function getUsers(){
            userService.getUsers().then(function(users){
                userList.users = users;
            });
        }

        function $onInit(){
            getUsers();
        }
    }

})();