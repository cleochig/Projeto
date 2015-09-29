// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'includes/login.html'
        }
      }
    })

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'includes/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.cadprg', {
    url: '/cadprg',
    views: {
      'menuContent': {
        templateUrl: 'includes/cadprg.html'
      }
    }
  })

  .state('app.cadtal', {
      url: '/cadtal',
      views: {
        'menuContent': {
          templateUrl: 'includes/cadtal.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'includes/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/includes/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'includes/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
