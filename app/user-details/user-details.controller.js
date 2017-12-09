(function (){
    'use strict';
    angular.module('user-portal')
    .controller('UserDetailsController', UserDetailsController);
    
    UserDetailsController.$inject = [];

    function UserDetailsController(){
        var userDetails = this;

        //methods
        userDetails.$onInit = $onInit;

        function $onInit(){
            console.log(userDetails);
        }
    }

})();