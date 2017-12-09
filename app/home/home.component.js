(function (){
    'use strict';
    angular.module('user-portal')
    .component('upHome', {
        templateUrl: '/app/home/home.component.html',
        controller: 'HomeController',
        controllerAs: "home"
    });
    
})();