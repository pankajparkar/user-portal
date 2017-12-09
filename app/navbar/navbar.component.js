(function (){
    'use strict';
    angular.module('user-portal')
    .component('upNavbar', {
        templateUrl: '/app/navbar/navbar.component.html',
        controller: 'NavbarController',
        controllerAs: "navbar"
    });
    
})();