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
            return $http.get('/api/users.json')
                .then(unWrapData)
                .catch(catchError);
        }

        function saveUser(){
            //TODO: modify local data here, localSToragee
        }

        function getUserById(id){
            //TODO: retrieve from localStorage and lookup by id
            return getUsers().then(function(users){
                return users.filter(function(user){
                    return user.Id == id;
                })[0];
            })
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