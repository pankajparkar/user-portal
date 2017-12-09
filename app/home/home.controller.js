(function (){
    'use strict';
    angular.module('user-portal')
    .controller('HomeController', HomeController);
    
    HomeController.$inject = ['UserService', '$uibModal'];

    function HomeController(userService, $uibModal){
        var home = this;

        //methods
        home.$onInit = $onInit;
        home.openUserDetails = openUserDetails;

        function getUsers(){
            userService.getUsers().then(function(users){
                home.users = users;
            });
        }

        function openUserDetails(user){
            console.log(user)
            $uibModal.open({
                template: '<up-user-details user="$resolve.user"></up-user-details>',
                resolve: {
                    user: function(){
                        return user;
                    }
                }
            })
        }

        function $onInit(){
            getUsers();
        }
    }

})();