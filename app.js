(function () {

  angular.module('app', ['mapbox-forward-geo'])

    .controller('AppCtrl', function($scope){
      $scope.myapitoken = 'pk.eyJ1IjoibWxvZmZsYW5kIiwiYSI6Ik5leC11NlUifQ.h2UgWXhT5l7zjts894SySw';

      // watch the addressSelection model
      $scope.$watchCollection('addressSelection',function(){
        // spit it out to the console
        if(angular.isDefined($scope.addressSelection)){
          $scope.results = undefined;
          console.log('Selected address/city/zip info');
          console.log($scope.addressSelection);
        }
      });


      // watch the addressSelection model
      $scope.$watchCollection('results',function(){
        // spit it out to the console
        if(angular.isDefined($scope.results)){
          $scope.addressSelection = undefined;
          console.log('results');
          console.log($scope.results);
        }
      });
  });

}());