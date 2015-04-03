(function () {

  angular.module('app', ['mapbox-forward-geo','moduleFilters'])

    .controller('AppCtrl', function($scope){
      $scope.myapitoken = 'pk.eyJ1IjoibWxvZmZsYW5kIiwiYSI6Ik5leC11NlUifQ.h2UgWXhT5l7zjts894SySw';

      //$scope.mapboxoptions = {
      //  placeHolderText: 'Search Address, City or Zip',
      //  autoSuggest: true,
      //  excludeEntriesWithNoPlaceName: true,
      //  minLength: 3,
      //  minLengthErrorText: 'Please enter at least %N% character(s).',
      //  includeThisKeyword: 'oklahoma'
      //};


      // watch the addressSelection model
      $scope.$watchCollection('addressSelection',function(){
        // spit it out to the console
        if(angular.isDefined($scope.addressSelection)){
          console.log('Selected address/city/zip info');
          console.log($scope.addressSelection);
        }
      });


      // watch the addressSelection model
      $scope.$watchCollection('results',function(){
        // spit it out to the console
        if(angular.isDefined($scope.results)){
          console.log('results');
          console.log($scope.results);
        }
      });
  });

  angular.module('moduleFilters', []).filter('classy', function() {
    return function(text) {
      return String(text).replace(/ /mg, "-");
    };
  });
}());