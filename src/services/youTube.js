angular.module('video-player')
  .service('youTube', function($http, $window) {
    // TODO
    this.search = (query, callback) => {
      console.log($window.YOUTUBE_API_KEY)
      $http.get('https://www.googleapis.com/youtube/v3/search',
        {params: {part: 'snippet',
                  q: query,
                  type: 'video',
                  maxResults: 5,
                  key: $window.YOUTUBE_API_KEY,
                  videoEmbeddable: true}}
      ).then(function({data}){
        callback(data.items);
      })
    };
  });

