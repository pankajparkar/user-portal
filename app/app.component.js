(function (){
    'use strict';
    angular.module('user-portal')
    .component('upApp', {
        templateUrl: '/app/app.component.html',
        controller: 'MainController',
        controllerAs: "main"
    });
    
})();