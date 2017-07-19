angular.module('video-player')
  .component('app', {

    templateUrl: 'src/templates/app.html',

    controller: function(youTube) {
     // console.log(this)
     //console.log(youTube)

      this.videos = exampleVideoData;
      this.currentVideo = this.videos[0];

      this.selectVideo = (vid) => {
        console.log('clicked', vid);
        this.currentVideo = vid;
      };

      this.searchResults = (query) => {
        console.log(query);
        console.log('searching');
        youTube.search(query, (items) => {
          this.videos = items;
          this.currentVideo = this.videos[0];
        });
      };

      this.searchResults('angular.js');

    },

  });
