
angular.module('faculdade').controller('NewCursoController', function ($scope, $location, locationParser, CursoResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.curso = $scope.curso || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Cursos/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        CursoResource.save($scope.curso, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Cursos");
    };
});