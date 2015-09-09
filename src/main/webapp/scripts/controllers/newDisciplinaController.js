
angular.module('faculdade').controller('NewDisciplinaController', function ($scope, $location, locationParser, DisciplinaResource ) {
    $scope.disabled = false;
    $scope.$location = $location;
    $scope.disciplina = $scope.disciplina || {};
    

    $scope.save = function() {
        var successCallback = function(data,responseHeaders){
            var id = locationParser(responseHeaders);
            $location.path('/Disciplinas/edit/' + id);
            $scope.displayError = false;
        };
        var errorCallback = function() {
            $scope.displayError = true;
        };
        DisciplinaResource.save($scope.disciplina, successCallback, errorCallback);
    };
    
    $scope.cancel = function() {
        $location.path("/Disciplinas");
    };
});