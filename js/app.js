
angular.module('app',['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            //.state('eggly', {
            //    url: '',
            //    abstract: true
            //})
            .state('categories', {
                url: '/',
                views: {
                    'categories': {
                        //controller: 'CategoriesCtrl',
                        templateUrl: 'partials/partial1.html'
                    },
                    'hobbits': {
                        //controller: 'CategoriesCtrl',
                        templateUrl: 'partials/hobbits.html'
                    }
                }
            })



        $urlRouterProvider.otherwise('/');
    })



