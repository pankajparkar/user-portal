(function (){
    'use strict';
    angular.module('user-portal')
    .controller('FilterByController', FilterByController);
    
    FilterByController.$inject = ['UserService'];

    function FilterByController(userService){
        var filterBy = this;

        //methods
        filterBy.$onInit = $onInit;

        function $onInit(){

        }
    }

})();