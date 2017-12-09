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
                    component: 'upHome'
                }
            }
        ]
    }
    
    ConfigBlock.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function ConfigBlock($stateProvider, $urlRouterProvider, $locationProvider){
        var states = getStates();
        states.forEach(function (state){
            $stateProvider.state(state.name, state.definition)
        });
        console.log(states);

        $urlRouterProvider.otherwise('/home');
        $locationProvider.hashPrefix('');
    }

})();