angular.module('video-player')
  .component('app', {

    templateUrl: 'src/templates/app.html',

    controller: function() {
     // console.log(this)
      this.videos = exampleVideoData;
      this.video = this.videos[0];
    }
  });
