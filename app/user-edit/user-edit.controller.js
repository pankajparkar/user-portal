(function (){
    'use strict';
    
    angular.module('user-portal')
    .controller('UserEditController', UserEditController);
    
    UserEditController.$inject = ['UserService', '$state'];

    function UserEditController(userService, $state){
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

        function removeUser(){
            //TODO: remove user logic
            alert("Data deleted successfully.")
            $state.go('user');
        }

        function save(){
            if(userEdit.userForm.$valid) {
                userService.saveUser();
            }else {
                alert('Please fill require field(s).')
            }
        }

        function requiredValidation(field){
            return userEdit.userForm.$submitted && field.$error.required;
        }

        function $onInit(){
            getDepartment();
        }
    }

})();