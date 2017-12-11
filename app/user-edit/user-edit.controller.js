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
            userService.getUserDepartment().then(function(departments){
                userEdit.departments = departments;
            });
        }

        function save(){
            //TODO: 
            userService.save();
        }

        function $onInit(){
            getDepartment();
        }
    }

})();