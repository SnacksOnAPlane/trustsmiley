var app = angular.module('TrustSmiley', ['ui.bootstrap']);
app.controller('ReviewsController', function ReviewsController($scope, $http, $sce) {
  $scope.categories = {};

  function sanitizeEntry(entry) {
    // basically we just want the fields that start with gsx$, and only their $t vals
    var retme = {};
    for (var k in entry) {
      var v = entry[k];
      if (k.startsWith("gsx$")) {
        retme[k.substring(4)] = v['$t'];
      }
    }
    return retme;
  }

  function loadReviews(reviews) {
    for (var i in reviews.feed.entry) {
      var entry = sanitizeEntry(reviews.feed.entry[i]);
      var category = entry['category'];
      if (!$scope.categories[category]) {
        $scope.categories[category] = [entry];
      } else {
        $scope.categories[category].push(entry);
      }
    }
    console.log($scope.categories);
  }

  var url = 'https://spreadsheets.google.com/feeds/list/1AuxOvoQMsu-IqsmDFjZvw4vgCX323YoPPx3z8N2sBeE/od6/public/values?alt=json-in-script';
  url = $sce.trustAsResourceUrl(url)
  $http.jsonp(url, {jsonpCallbackParam: 'callback'})
  .then(function(data) {
    loadReviews(data.data);
  });
});
