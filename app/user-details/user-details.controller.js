(function (){
    'use strict';
    angular.module('user-portal')
    .controller('UserDetailsController', UserDetailsController);
    
    UserDetailsController.$inject = ['$state'];

    function UserDetailsController($state){
        var userDetails = this;

        //methods
        userDetails.$onInit = $onInit;
        userDetails.redirect = redirect;

        function redirect(id){
            userDetails.close();
            $state.go('user-edit', {id: id});
        }

        function $onInit(){
            console.log(userDetails);
        }
    }

})();