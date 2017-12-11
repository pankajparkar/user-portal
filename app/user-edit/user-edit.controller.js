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
        userEdit.requiredValidation = requiredValidation;
        userEdit.save = save;

        function getDepartment(){
            userService.getUserDepartment().then(function(departments){
                userEdit.departments = departments;
            });
        }

        function save(){
            if(userEdit.userForm.$valid) {
                userService.saveUser();
            }else {
                alert('Please fill require field(s).')
            }
        }

        function requiredValidation(field){
            return userEdit.userForm.$submitted && field.$dirty && field.$invalid;
        }

        function $onInit(){
            getDepartment();
        }
    }

})();