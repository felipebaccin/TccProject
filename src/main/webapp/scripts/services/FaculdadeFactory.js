angular.module('faculdade').factory('FaculdadeResource', function($resource){
    var resource = $resource('rest/faculdades/:FaculdadeId',{FaculdadeId:'@id'},{'queryAll':{method:'GET',isArray:true},'query':{method:'GET',isArray:false},'update':{method:'PUT'}});
    return resource;
});