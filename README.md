## Angular Mapbox Forward Geolocation Directive
Angular directive that works with the [Mapbox forward geocoding API](https://www.mapbox.com/developers/api/geocoding/#forward).

[Demo](http://mike-loffland.github.io/angular-mapbox-forward-geolocation-directive)

This Angular JS directive uses the Mapbox forward geocoding API to allow your users to obtain a specific geolocation based on query input.

### How to use it

First and foremost, you need to have a working [Mapbox API token[(https://www.mapbox.com/developers/api/#access-tokens).

Make sure that the angular-mapbox-forward-geolocation.js file is included in your HTML page.

    ...
    <script src="angular.js"></script>
    <script src="angular-mapbox-forward-geolocation.js"></script>
    ...


Make sure you include the mapbox-forward-geo dependency on your Angular module:

    angular.module('app', ['mapbox-forward-geo']);

You MUST pass your apiToken to the directive.

    <mapbox-forward-geocoding api-token="YOURAPITOKENGOESHERE"></mapbox-forward-geocoding>

### Examples

#### Returning a query results object

If you just want the query results returned (so you can use them however you want)... you can pass an array variable to the directive via the query-results attribute.

    <mapbox-forward-geocoding query-results="results" api-token="YOURAPITOKEN"></mapbox-forward-geocoding>

Use $watchCollection in the given controller to be notified when the given array is updated.

    $scope.$watchCollection('results',function(){
        // spit it out to the console
        if(angular.isDefined($scope.results)){
          console.log(results);
        }
    });
#### Capturing a location based on the user's selection

Auto-suggest is enabled by default. This provides the user with suggestions based on his/her query. If the user clicks one of these suggestions, the geolocation information can be captured by passing an object to the directive via the selected-location attribute.

    <mapbox-forward-geocoding selected-location="addressSelection" api-token="YOURAPITOKEN"></mapbox-forward-geocoding>

Use $watchCollection in the given controller to be notified when the given object is updated.

    $scope.$watchCollection('addressSelection',function(){
        // spit it out to the console
        if(angular.isDefined($scope.addressSelection)){
          console.log(addressSelection);
        }
    });

#### Options

This directive can be customized by passing an options object via the options attribute.

    <mapbox-forward-geocoding selected-location="addressSelection" options="{autoSuggest: false}" api-token="YOURAPITOKEN"></mapbox-forward-geocoding>


* **placeHolderText** - Customizes the placeholder text in the input box.
* **minLength** - Customize how many characters must be provided before querying the Mapbox API. The default is 4.
* **minLengthErrorText** - Customizes the error text displayed whenever a user attempts to submit a search that does not meet the minimum length requirements. If you include %N% in your string, the directive will replace %N% with the value of **minLength**.
* **displayProperty** - Specify which property from the Mapbox API you want displayed in the auto-suggest results. The default is place_name.
* **excludeEntriesWithNoPlaceName** - Whether or not to include results that do not have a value for place_name. The default is false.
* **autoSuggest** - Whether or not to provide suggestions based on a user input. The default is true.
* **emptyPropertyText** - Customize the text used whenever the directive encounters an empty value for the displayProperty. The default is _(empty property)_
* **includeThisKeyword** - This option allows you to provide a keyword that will be injected into query (unless it already exists). This is an attempt to provide a more meaningful result set relative to your app's primary focus.

Here is an example of passing in an options object defined in your controller.

    angular.module('myModule').controller('AppCtrl', ['$scope',
        function($scope) {
            $scope.myOptions = {
                 placeHolderText: 'Enter an address, zip, or state',
                 minLengthErrorText: 'Please enter at least %N% character(s).',
                 displayProperty: 'id',
                 excludeEntriesWithNoPlaceName: true,
                 autoSuggest: false,
                 emptyPropertyText: '(value was empty)',
                 minLength: 6,
                 includeThisKeyword: 'California'
               };
        }
    ]);

And then in your HTML...

    <mapbox-forward-geocoding selected-location="addressSelection" options="myOptions" api-token="YOURAPITOKEN"></mapbox-forward-geocoding>




