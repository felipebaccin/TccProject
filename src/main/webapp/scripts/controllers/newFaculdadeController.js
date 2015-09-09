
angular.module('faculdade').controller('NewFaculdadeController', function ($scope, $location, locationParser, FaculdadeResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.faculdade = $scope.faculdade || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Faculdades/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        FaculdadeResource.save($scope.faculdade, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Faculdades");
    };
});