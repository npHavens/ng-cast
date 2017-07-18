angular.module('video-player')
  .component('videoPlayer', {
    templateUrl: 'src/templates/videoPlayer.html',

    controller: function() {
      // test = () => console.log('this.video: ', this.video);
      // this.test();

      // var ctrl = this;
      // ctrl.buildURL = function() {
      //   console.log('this.video.id.videoId: ', ctrl.video.id.videoId);
      //   return '"http://www.youtube.com/embed/"+ctrl.video.id.videoId';
      // };
      // this.test = function() {
      //   return '<h3>test</h3>';
      // }

    },

    bindings: {
      video: '<',
      id: '<'
    }
  });
