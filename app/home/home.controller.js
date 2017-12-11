(function (){
    'use strict';
    angular.module('user-portal')
    .controller('HomeController', HomeController);
    
    HomeController.$inject = ['UserService', '$uibModal', '$filter'];

    function HomeController(userService, $uibModal, $filter){
        var home = this,
            usersCopy,
            filterFn = $filter('filter'),
            orderByFn = $filter('orderBy');

        home.filter = {};

        //methods
        home.$onInit = $onInit;
        home.openUserDetails = openUserDetails;
        home.filterChanged = filterChanged;

        function getUsers(){
            return userService.getUsers().then(function(users){
                usersCopy = angular.copy(users);
                home.users = users;
            });
        }

        function filterName(name){
            if(name && name.length){
                return (usersCopy || []).filter(function(user){
                    name = name.toLowerCase();
                    return ~user.FirstName.toLowerCase().indexOf(name) || 
                            ~user.LastName.toLowerCase().indexOf(name);
                });
            } else{
                return angular.copy(usersCopy);
            }
        }

        function filterChanged(filter){
            //filter first last name
            var users = filterName(filter.Name);

            //filter department
            users = filterFn(users, { Department: filter.Department });

            //sorting
            users = orderByFn(users, 'Salary', true);

            home.users = users;
        }

        function openUserDetails(user){
            console.log(user)
            $uibModal.open({
                size: 'md',
                template: '<up-user-details user="$ctrl.user" close="$ctrl.close()"></up-user-details>',
                controller: ['$uibModalInstance', function($uibModalInstance) {
                    this.user = user;
                    this.close = $uibModalInstance.close;
                }],
                controllerAs: '$ctrl'
            })
        }

        function $onInit(){
            getUsers();
        }
    }

})();