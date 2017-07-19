angular.module('video-player')
  .component('app', {

    templateUrl: 'src/templates/app.html',

    controller: function(youTube) {
      this.videos = exampleVideoData;
      this.currentVideo = this.videos[0];

      this.selectVideo = (vid) => {
        console.log('clicked', vid);
        this.currentVideo = vid;
      };

      this.searchResults = (items) => {
        this.videos = items;
        this.currentVideo = this.videos[0];
      };

      youTube.search('angular', this.searchResults);

    },

  });
