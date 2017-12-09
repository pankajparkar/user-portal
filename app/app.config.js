(function (){
    'use strict';
    angular.module('user-portal')
    .config(ConfigBlock)
    .run(function($state){

    });

    function getStates(){
        return [
            { 
                name: 'home', 
                definition: {
                    url: '/home',
                    template: '<up-home></up-home>'
                }
            }
        ]
    }
    
    ConfigBlock.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function ConfigBlock($stateProvider, $urlRouterProvider, $locationProvider){
        var states = getStates();
        states.forEach(function (state){
            debugger
            $stateProvider.state(state.name, state.definition)
        });

        //$urlRouterProvider.otherwise('/home');
        $locationProvider.hashPrefix('');
    }

})();