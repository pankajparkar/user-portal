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
            debugger
            return $http.get('/api/users.json')
                .then(unWrapData)
                .catch(catchError);
        }

        function saveUser(){
            //modify local data here
        }

        function getUserById(){
            //retrieve from localStorage and lookup by id
        }

        function catchError(response){
            console.log(response)
            return response.data;
        }

        function unWrapData(response){
            return response.data;
        }
    }

})();