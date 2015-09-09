

angular.module('faculdade').controller('EditFaculdadeController', function($scope, $routeParams, $location, FaculdadeResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.faculdade = new FaculdadeResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Faculdades");
        };
        FaculdadeResource.get({FaculdadeId:$routeParams.FaculdadeId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.faculdade);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.faculdade.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Faculdades");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Faculdades");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.faculdade.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});