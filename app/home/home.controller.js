(function (){
    'use strict';
    angular.module('user-portal')
    .controller('HomeController', HomeController);
    
    HomeController.$inject = [];

    function HomeController(){
        var home = this;

        function $onInit(){
            console.log(main);
        }
    }

})();