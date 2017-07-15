angular.module('video-player')

.controller('AppCtrl', function($scope) {
  $scope.message = 'Hello';
})

.component('app', {
  // template: '<h1>TEST</h1>'

  templateUrl: 'src/templates/app.html',

  bindings: {
    message: '<'
  }

  // controller: function() {
    // this.myName = 'kevin';
  // }

});
