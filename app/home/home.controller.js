(function (){
    'use strict';
    angular.module('user-portal')
    .controller('HomeController', HomeController);
    
    HomeController.$inject = ['UserService'];

    function HomeController(userService){
        var home = this;

        //methods
        home.$onInit = $onInit;

        function getUsers(){
            userService.getUsers().then(function(users){
                debugger
                home.users = users;
            });
        }

        function $onInit(){
            getUsers();
        }
    }

})();