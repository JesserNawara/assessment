angular.module('app')
.component('feed', {
  bindings: {
    changeView: '<'
  },
  templateUrl: '/templates/feed.html'
});