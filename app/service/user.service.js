(function (){
    'use strict';
    angular.module('user-portal')
        .service('UserService', UserService);
    
        UserService.$inject = ['$http'];

    function UserService($http){
        var userService = this;
        
        //methods
        userService.getUsers = getUsers;
        userService.saveUser = saveUser;
        userService.getUserById = getUserById;

        function getUsers(){
        }

        function saveUser(){
            
        }

        function getUserById(){
            
        }
    }

})();