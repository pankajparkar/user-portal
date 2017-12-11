(function (){
    'use strict';
    angular.module('user-portal')
    .component('upFilterBy', {
        templateUrl: '/app/filter-by/filter-by.component.html',
        controller: 'FilterByController',
        controllerAs: "filterBy",
        bindings: {
            filter: '<',
            updateFilter: '&'
        }
    });
    
})();