angular.module('evancodes', [
	'evancodes.main',
	'evancodes.posts',
  'evancodes.services',
  'evancodes.about',
	'ui.router',
  'ngSanitize',
  'ngMaterial'
])

.config(function($urlRouterProvider, $stateProvider, $mdThemingProvider) {  
  $urlRouterProvider.otherwise('/main');
  $stateProvider
    .state('main', {
      templateUrl: 'client/templates/main.html',
      controller: 'MainController',
      url: '/main'
    })
    .state('posts', {
      templateUrl: 'client/templates/post.html',
      controller: 'PostController',
      url: '/posts/:id',
    })
});