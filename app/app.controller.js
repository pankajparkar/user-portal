(function (){
    'use strict';
    angular.module('user-portal')
    .controller('MainController', MainController);
    
    MainController.$inject = [];

    function MainController(){
        var main = this;

        function $onInit(){
            console.log(main);
        }
    }

})();