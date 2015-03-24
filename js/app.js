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
                        controller: 'ElfController as elfCtrl',
                        templateUrl: 'partials/elf.html'
                    }}
            })


        $urlRouterProvider.otherwise('/');
    })

    .controller('ElfController',['bookmarks', function (bookmarks) {




    }])






