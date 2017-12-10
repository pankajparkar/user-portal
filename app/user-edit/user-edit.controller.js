(function (){
    'use strict';
    
    angular.module('user-portal')
    .controller('UserEditController', UserEditController);
    
    UserEditController.$inject = ['UserService'];

    function UserEditController(userService){
        var userEdit = this;

        //methods
        userEdit.$onInit = $onInit;
        userEdit.getDepartment = getDepartment;
        userEdit.save = save;

        function getDepartment(){
            //TODO: 
        }

        function save(){
            //TODO: 
            userService.save();
        }

        function $onInit(){
            console.log(userEdit);
        }
    }

})();