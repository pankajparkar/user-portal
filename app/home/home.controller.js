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
                size: 'md',
                template: '<up-user-details user="$ctrl.user" close="$ctrl.close()"></up-user-details>',
                controller: ['$uibModalInstance', function($uibModalInstance) {
                    this.user = user;
                    this.close = $uibModalInstance.close;
                }],
                controllerAs: '$ctrl'
            })
        }

        function $onInit(){
            getUsers();
        }
    }

})();