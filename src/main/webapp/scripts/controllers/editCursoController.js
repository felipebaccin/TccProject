

angular.module('faculdade').controller('EditCursoController', function($scope, $routeParams, $location, CursoResource ) {
    var self = this;
    $scope.disabled = false;
    $scope.$location = $location;
    
    $scope.get = function() {
        var successCallback = function(data){
            self.original = data;
            $scope.curso = new CursoResource(self.original);
        };
        var errorCallback = function() {
            $location.path("/Cursos");
        };
        CursoResource.get({CursoId:$routeParams.CursoId}, successCallback, errorCallback);
    };

    $scope.isClean = function() {
        return angular.equals(self.original, $scope.curso);
    };

    $scope.save = function() {
        var successCallback = function(){
            $scope.get();
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        };
        $scope.curso.$update(successCallback, errorCallback);
    };

    $scope.cancel = function() {
        $location.path("/Cursos");
    };

    $scope.remove = function() {
        var successCallback = function() {
            $location.path("/Cursos");
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError=true;
        }; 
        $scope.curso.$remove(successCallback, errorCallback);
    };
    
    
    $scope.get();
});