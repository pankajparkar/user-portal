(function (){
    'use strict';
    angular.module('user-portal')
        .service('LocalStorageService', LocalStorageService);
    
    LocalStorageService.$inject = [];

    function LocalStorageService(){
        var localStorage = this;
        //TODO
    }

})();