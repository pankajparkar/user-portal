(function (){
    'use strict';
    angular.module('user-portal')
    .controller('NavbarController', NavbarController);
    
    NavbarController.$inject = [];

    function NavbarController(){
        var navbar = this;

        function $onInit(){
            console.log(navbar);
        }
    }

})();