(function (){
    'use strict';
    
    angular.module('user-portal')
    .controller('UserEditController', UserEditController);
    
    UserEditController.$inject = [];

    function UserEditController(){
        var userEdit = this;

        //methods
        userEdit.$onInit = $onInit;

        function $onInit(){
            console.log(userEdit);
        }
    }

})();