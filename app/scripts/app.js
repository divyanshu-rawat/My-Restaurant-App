'use strict';

 // Removing Dependency that I have used for ng-route 
// angular.module('confusionApp', ['ngRoute'])



 // ############################################----Config function for angular ngROoute---############################################
 // .config(function($routeProvider) {
 //        $routeProvider
 //            // route for the contactus page
 //            .when('/contactus', {
 //                templateUrl : 'contact.html',
 //                controller  : 'ContactController'
 //            })
 //            // route for the menu page
 //            .when('/menu', {
 //                templateUrl : 'menu.html',
 //                controller  : 'MenuController'
 //            })
 //            // route for the dish details page
 //            .when('/menu/:id', {
 //                templateUrl : 'dishdetail.html',
 //                controller  : 'dishDetailController'
 //            })
 //            .otherwise('/contactus');
 //    })

 // ################################################################################################################################

 // Implementing ngUiRoute Now.. #########################

     angular.module('confusionApp', ['ui.router'])

        .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
                    // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html'
                    },
                    'content': {
                        templateUrl : 'views/home.html',
                        controller  : 'IndexController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
            })
                    // route for the aboutus page
                    // as about us is specified as a nested state of app i.e- app.aboutus
                    // content specifies that whatever is inside there will only replace the content part of my view.
                    // the only part that is going to change is my content header and footer will remain as such.
            
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl : 'views/aboutus.html',
                        controller  : 'AboutController' 
                   }
                }
            })
                    // route for the contactus page
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contact.html',
                        controller  : 'ContactController'
                     }
                }
            })

            // route for the menu page
            .state('app.menu', {
                url: 'menu',
                views: {
                    'content@': {
                        templateUrl : 'views/menu.html',
                        controller  : 'MenuController'
                    }
                }
            })

            // route for the dishdetail page
            .state('app.dishdetails', {
                url: 'menu/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/dishdetail.html',
                        controller  : 'dishDetailController'
                   }
                }
            });
            $urlRouterProvider.otherwise('/');
    })

;

