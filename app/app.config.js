(function (){
    'use strict';
    angular.module('user-portal')
        .config(ConfigBlock);

    function getStates(){
        return [
            { 
                name: 'user', 
                definition: {
                    url: '/user',
                    template: '<up-home></up-home>'
                }
            },{ 
                name: 'user-edit', 
                definition: {
                    url: '/user/edit/{id:int}',
                    template: '<up-user-edit user="$resolve.user"></up-user-edit>',
                    resolve: {
                        user: ['UserService', '$stateParams', function(userService, $stateParams){
                            return userService.getUserById($stateParams.id)
                        }]
                    }
                }
            },{ 
                name: 'user-add', 
                definition: {
                    url: '/user/add',
                    template: '<up-user-edit user="{}"></up-user-edit>'
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

        $urlRouterProvider.otherwise('/user');
        $locationProvider.hashPrefix('');
    }

})();