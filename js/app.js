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
                    },
                    'hobbits': {
                        controller: 'HobbitController',
                        templateUrl: 'partials/hobbits.html'
                    }
                }
            })


        $urlRouterProvider.otherwise('/');
    })

    .service('bookmarks',function(){

        var bookmarks = [
            {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development"},
            {"id": 1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development"},
            {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design"},
            {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design"},
            {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise"},
            {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise"},
            {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor"},
            {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor"},
            {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor"}
        ];

        return {
            getBookmarks:bookmarks
        }
    })

    .controller('ElfController',['bookmarks', function (bookmarks) {

        var vm = this;
        vm.bookmarks = bookmarks.getBookmarks;

        console.log('ElfController init',bookmarks.getBookmarks);
    }])
    .controller('HobbitController', function () {
        console.log('HobbitController init')
    })






