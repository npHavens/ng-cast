angular.module('video-player')
  .component('videoPlayer', {
    templateUrl: 'src/templates/videoPlayer.html',

    controller: function() {

      console.log('this: ', this);
      // this.buildURL = function(id) {
      //   console.log('id: ', id);
      //   return "http://www.youtube.com/embed/" + id;
      // }
      // this.videoURL = `https://www.youtube.com/embed/${this.video.id.videoId}`;
      // console.log(this.videoURL);
    },

    bindings: {
      video: '<',
      id: '<'
    }
  });
