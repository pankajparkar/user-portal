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
        filterBy.sortingChange = sortingChange;

        function getDepartment(){
            userService.getUserDepartment().then(function(departments){
                filterBy.departments = departments;
            });
        }

        function filterChanged(){
            filterBy.updateFilter({filter: filterBy.filter});
        }

        function sortingChange(){
            filterBy.filter.Salary = !filterBy.filter.Salary;
            filterChanged();
        }

        function $onInit(){
            getDepartment();
        }
    }

})();