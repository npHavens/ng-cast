angular.module('video-player')

.component('app', {

  templateUrl: 'src/templates/app.html',

  controller: function() {
    // console.log('login from app.js: ', this);
    this.videos = exampleVideoData;

    // this.myName = 'kevin';
  }

});

