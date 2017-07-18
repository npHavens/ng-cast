angular.module('video-player')
  .component('videoList', {
    templateUrl: 'src/templates/videoList.html',

    controller: function() {

      //console.log(this)

    },

    bindings: {
      videos: '<',
      onClick: '<'


    }
  });
