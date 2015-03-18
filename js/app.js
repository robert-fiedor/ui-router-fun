angular.module('app', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            //.state('eggly', {
            //    url: '',
            //    abstract: true
            //})
            .state('categories', {
                url: '/',
                views: {
                    'elfs': {
                        controller: 'ElfController',
                        templateUrl: 'partials/elf.html'
                    },
                    'hobbits': {
                        controller: 'HobbitController',
                        templateUrl: 'partials/hobbits.html'
                    }
                }
            })


        $urlRouterProvider.otherwise('/');
    })

    .controller('ElfController', function () {
        console.log('ElfController init')
    })
    .controller('HobbitController', function () {
        console.log('HobbitController init')
    })






