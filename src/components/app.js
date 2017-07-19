angular.module('video-player')
  .component('app', {

    templateUrl: 'src/templates/app.html',

    controller: function() {
     // console.log(this)

      this.videos = exampleVideoData;
      this.currentVideo = this.videos[0];

      this.selectVideo = (vid) => {
        console.log('clicked', vid);
        this.currentVideo = vid;
      };

      this.searchResults = (query) => {
        console.log(query);
        console.log('searching');
      };
    },

    service: function(youTube) {
      // get search results and set to currentVideo
      //this.search
    }


  });
