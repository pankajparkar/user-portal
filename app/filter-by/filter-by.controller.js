(function (){
    'use strict';
    angular.module('user-portal')
    .controller('FilterByController', FilterByController);
    
    FilterByController.$inject = ['UserService'];

    function FilterByController(userService){
        var filterBy = this;

        //methods
        filterBy.$onInit = $onInit;
        filterBy.filterChanged = filterChanged;

        function getDepartment(){
            userService.getUserDepartment().then(function(departments){
                filterBy.departments = departments;
            });
        }

        function filterChanged(){
            filterBy.updateFilter({filter: filterBy.filter});
        }

        function $onInit(){
            getDepartment();
        }
    }

})();