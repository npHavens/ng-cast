angular.module('video-player')
  .component('search', {

    templateUrl: 'src/templates/search.html',

    controller: function(youTube) {
      this.buttonClick = (input) => {
        youTube.search(input, items => {
          this.result(items);
        });
      };
    },

    bindings: {
      result: '<',
      service: '<'
    }

  });
